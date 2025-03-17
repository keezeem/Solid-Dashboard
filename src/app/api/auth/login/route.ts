import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '@/lib/db';

const SECRET_KEY = 'your_jwt_secret_key'; // Replace this with a .env variable

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        // Check if user exists
        const user = await db.oneOrNone('SELECT * FROM users WHERE email = $1', [email]);
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
            { id: user.id, email: user.email, firstName: user.first_name, lastName: user.last_name },
            SECRET_KEY,
            { expiresIn: '7d' }     
        );

        return NextResponse.json({ message: 'Login successful', token }, { status: 200 });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}
