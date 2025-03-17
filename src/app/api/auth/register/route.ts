import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '@/lib/db';

const SECRET_KEY = process.env.JWT_SECRET || 'your_jwt_secret_key';

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, password, phoneNumber, address } = await req.json();

    // Check if user exists
    const existingUser = await db.oneOrNone('SELECT * FROM users WHERE email = $1', [email]);
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into the database
    const user = await db.one(
      'INSERT INTO users (first_name, last_name, email, password, phone_number, address) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [firstName, lastName, email, hashedPassword, phoneNumber, address]
    );

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, firstName: user.first_name, lastName: user.last_name },
      SECRET_KEY,
      { expiresIn: '7d' }
    );

    return NextResponse.json({
      message: 'User registered successfully',
      token,
      user: { firstName: user.first_name, lastName: user.last_name }
    }, { status: 201 });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
