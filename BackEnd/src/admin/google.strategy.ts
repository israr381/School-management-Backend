import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: '1096677271936-168k3qou0sort4m4mumfbgjj9gupfgol.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:5000/admin/auth/google/callback',
      scope: ['profile', 'email', 'openid'],

    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {

    const { name, emails, photos } = profile;
    const user = {
      id: profile.id, // Google se aane wali id
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken,
    };
    
    done(null, user);
  }
}
 