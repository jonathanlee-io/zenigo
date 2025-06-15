import {ApiKeyGuard} from '@app/auth/guards/api-key/api-key.guard';
import {ApiKeyWithUserEmailGuard} from '@app/auth/guards/api-key-with-user-email/api-key-with-user-email.guard';
import {JwtStrategy} from '@app/auth/strategies';
import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.getOrThrow<string>('JWT_SECRET'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [JwtStrategy, ApiKeyGuard, ApiKeyWithUserEmailGuard],
  exports: [ApiKeyGuard, ApiKeyWithUserEmailGuard],
})
export class AuthModule {}
