import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '@/lib/prisma';

const SECRET_KEY = process.env.JWT_SECRET || 'your_jwt_secret_key';

export async function POST(request: Request) {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      address,
      subscriptionPlan,
      subscriptionPrice
    } = await request.json();

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with subscription data
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        phoneNumber,
        address,
        subscriptionPlan,
        subscriptionPrice
      }
    });

    // Generate JWT token
    const token = jwt.sign(
      { 
        id: newUser.id, 
        email: newUser.email, 
        firstName: newUser.firstName, 
        lastName: newUser.lastName,
        subscriptionPlan: newUser.subscriptionPlan,
        subscriptionPrice: newUser.subscriptionPrice
      },
      SECRET_KEY,
      { expiresIn: '7d' }
    );

    return NextResponse.json({
      message: 'User created successfully',
      token,
      user: {
        id: newUser.id,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        subscriptionPlan: newUser.subscriptionPlan,
        subscriptionPrice: newUser.subscriptionPrice
      }
    }, { status: 201 });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}