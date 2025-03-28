import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '@/lib/prisma'; // Make sure this is your Prisma client

const SECRET_KEY = process.env.JWT_SECRET || 'your_jwt_secret_key';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Check if user exists using Prisma
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        id: user.id, 
        email: user.email, 
        firstName: user.firstName,  // or user.first_name if your schema uses snake_case
        lastName: user.lastName    // or user.last_name if your schema uses snake_case
      },
      SECRET_KEY,
      { expiresIn: '7d' }
    );

    // Return response - adjust field names to match your schema
    return NextResponse.json({
      message: 'Login successful',
      token,
      user: { 
        firstName: user.firstName,  // or user.first_name
        lastName: user.lastName     // or user.last_name
      }
    }, { status: 200 });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}