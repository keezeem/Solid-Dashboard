import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import db from '@/lib/db';

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
        await db.none(
            'INSERT INTO users (first_name, last_name, email, password, phone_number, address) VALUES ($1, $2, $3, $4, $5, $6)',
            [firstName, lastName, email, hashedPassword, phoneNumber, address]
        );

        return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}
