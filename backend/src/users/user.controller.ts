import { Controller, Get, UseGuards, Request, Post } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UserController {
    constructor(private readonly usersService: UsersService) {}
  // Add user-related routes, like fetching user details

  @UseGuards(JwtAuthGuard)
  @Post('me')   
  async getUserProfile(@Request() req) {
    // Retrieve and return user profile info from req.user
    const user = await this.usersService.findByEmail(req.body.email);
    return { message: 'User profile data', user };
  }
}
