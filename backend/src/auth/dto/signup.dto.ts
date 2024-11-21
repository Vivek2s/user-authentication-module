import { IsEmail, IsNotEmpty, MinLength, Matches } from 'class-validator';

export class SignUpDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  name: string;

  @MinLength(8)
  @Matches(/(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, {
    message: 'Password must include at least one letter, one number, and one special character',
  })
  password: string;
}
