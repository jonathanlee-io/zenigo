import {Injectable} from '@angular/core';
import {AuthChangeEvent, AuthSession, createClient, Session, SupabaseClient} from '@supabase/supabase-js';
import {uuid} from '@supabase/supabase-js/dist/main/lib/helpers';

import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private readonly _supabaseClient: SupabaseClient;

  constructor() {
    this._supabaseClient = createClient(
        environment.SUPABASE_URL,
        environment.SUPABASE_PUBLIC_KEY,
    );
  }

  _session: AuthSession | null = null;

  get session() {
    this._supabaseClient.auth.getSession().then(({data}) => {
      this._session = data.session;
    });
    return this._session;
  }

  set session(session: AuthSession | null) {
    this._session = session;
  }

  authChanges(
      callback: (event: AuthChangeEvent, session: Session | null) => void,
  ) {
    return this._supabaseClient.auth.onAuthStateChange(callback);
  }

  signInWithGoogle() {
    return this._supabaseClient.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: this.getRedirectUrl(),
      },
    });
  }

  signInWithGitHub() {
    return this._supabaseClient.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: this.getRedirectUrl(),
      },
    });
  }

  signOut() {
    return this._supabaseClient.auth.signOut();
  }

  async uploadPhoto(bucketName: string, file: File) {
    const {data, error} = await this._supabaseClient.storage
        .from(bucketName)
        .upload(`${this.session?.user.id}/${uuid()}`, file);
    return {data, error};
  }

  private getRedirectUrl(): string {
    const isLocal = window.location.hostname === 'localhost';
    return `${isLocal ? 'http' : 'https'}://${window.location.hostname}${isLocal ? ':4200' : ''}/login-success`;
  }
}
