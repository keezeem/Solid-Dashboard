import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '@/lib/prisma'; // Assuming you have a prisma client instance

const SECRET_KEY = process.env.JWT_SECRET || 'your_jwt_secret_key';

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, password, phoneNumber, address, subscriptionPlan } = await req.json();

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });
    
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in the database
    const user = await prisma.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email,
        password: hashedPassword,
        phoneNumber: phoneNumber,
        address,
        subscriptionPlan
      }
    });

    // Generate JWT token
    const token = jwt.sign(
      { 
        id: user.id, 
        email: user.email, 
        firstName: user.firstName, 
        lastName: user.lastName 
      },
      SECRET_KEY,
      { expiresIn: '7d' }
    );

    return NextResponse.json({
      message: 'User registered successfully',
      token,
      user: { 
        firstName: user.firstName, 
        lastName: user.lastName 
      }
    }, { status: 201 });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' }, 
      { status: 500 }
    );
  }
}