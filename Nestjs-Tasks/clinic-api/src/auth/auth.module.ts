import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy'; 
@Module({
  imports:[UserModule, PassportModule,
    JwtModule.register({secret:"secret_keeeeyyy",signOptions:{expiresIn:"1d"}})
  ],
  providers: [AuthService,JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
