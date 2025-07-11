import { Module } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';
import { AuthGuard, PassportModule, PassportStrategy } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtGuard } from './auth.guard';
import { AuthController } from './auth.controller';

@Module({
    imports:[PassportModule.register({defaultStrategy:'jwt', session:false}), 
        JwtModule.register({secret:"secret", signOptions:{expiresIn:'1h'}})
    ],
    providers:[JwtStrategy, JwtGuard], 
    controllers: [AuthController]
})
export class AuthModule {}
