import { Secret } from 'jsonwebtoken';

export const secret: Secret = 'manteiga';

export const config: object = {
  expiresIn: '6h',
  algorithm: 'HS256',
};