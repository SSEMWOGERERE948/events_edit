import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@theeventsedit.com';
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj3bp.Gm.F5W'; // 'admin123'

export interface AdminUser {
  id: string;
  email: string;
  role: 'admin';
}

export async function verifyAdminCredentials(email: string, password: string): Promise<boolean> {
  if (email !== ADMIN_EMAIL) {
    return false;
  }
  
  return await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
}

export function generateToken(user: AdminUser): string {
  return jwt.sign(user, JWT_SECRET, { expiresIn: '24h' });
}

export function verifyToken(token: string): AdminUser | null {
  try {
    return jwt.verify(token, JWT_SECRET) as AdminUser;
  } catch {
    return null;
  }
}

export function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}