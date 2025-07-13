import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@theeventsedit.com';
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj3bp.Gm.F5W'; // 'admin123'

async function verifyAdminCredentials(email: string, password: string): Promise<boolean> {
  if (email !== ADMIN_EMAIL) {
    return false;
  }
  
  return await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
}

function generateToken(user: any): string {
  return jwt.sign(user, JWT_SECRET, { expiresIn: '24h' });
}

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const isValid = await verifyAdminCredentials(email, password);

    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const user = {
      id: '1',
      email,
      role: 'admin' as const
    };

    const token = generateToken(user);

    return NextResponse.json({ token, user });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}