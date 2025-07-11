    import { PassportStrategy } from '@nestjs/passport';
    import { ExtractJwt, Strategy } from 'passport-jwt';
    import { Request as RequestType } from 'express';
    import { Injectable } from '@nestjs/common';


    @Injectable()
    export class JwtStrategy extends PassportStrategy(Strategy){
        constructor(){
            super({
                jwtFromRequest: ExtractJwt.fromExtractors([ 
                    JwtStrategy.extractJWT,
                    ExtractJwt.fromAuthHeaderAsBearerToken(),
                ]),
                ignoreExpiration:false,
                secretOrKey: "secret"
            });

            
        }

         
    private static extractJWT(req: RequestType): string | null {

        // console.log (req.cookies);
        if (
        req.cookies &&        
        'user_token' in req.cookies &&
        req.cookies.user_token.length > 0
        ) {
        return req.cookies.user_token; 
        }
        return null;
    }

    async validate(payload: any) {
    // Optional: Return user object or validation logic
    // return {userId:payload.sub, username: payload.username};
    return {userId:payload.id};
  }

    }
