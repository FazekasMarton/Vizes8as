import { IsDefined, IsEmail, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
    @IsDefined()
    @IsString()
    @IsEmail()
    @ApiProperty({ description: 'User email address', example: 'john.doe@example.com' })
    email: string;

    @IsDefined()
    @IsString()
    @ApiProperty({ description: 'User password', example: 'securePassword123' })
    password: string;
}
