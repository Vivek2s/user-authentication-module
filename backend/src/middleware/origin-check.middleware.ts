import { Injectable, NestMiddleware, ForbiddenException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class OriginCheckMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const allowedOrigin = process.env.ALLOWED_ORIGIN;
    const requestOrigin = req.headers.origin;

    // Check if request origin matches allowed origin
    if (requestOrigin !== allowedOrigin) {
      throw new ForbiddenException('Access denied from this origin');
    }
    next();
  }
}
