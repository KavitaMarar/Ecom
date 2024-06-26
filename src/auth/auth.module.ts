/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserSchema } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports:[
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.registerAsync({
      inject:[ConfigService],
      useFactory:(config:ConfigService)=>{
        return {
          secret:config.get<string>('JWT_SECRET'),
          signOptions:{
            expiresIn:config.get<string>('JWT_EXPIRES')
          }
        }
      }
    }),
    MailerModule,ConfigModule.forRoot(),
    MongooseModule.forFeature([{name:'User',schema:UserSchema}])
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy],
  exports:[PassportModule,JwtStrategy]
})
export class AuthModule {}
