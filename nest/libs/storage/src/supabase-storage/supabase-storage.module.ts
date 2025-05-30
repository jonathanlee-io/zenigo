import {SupabaseStorageService} from '@app/storage/supabase-storage/services/supabase-storage/supabase-storage.service';
import {Module} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';

@Module({
  providers: [ConfigService, SupabaseStorageService],
  exports: [SupabaseStorageService],
})
export class SupabaseStorageModule {}
