import { Global, Module } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

const supabaseProvider = {
  provide: 'SUPABASE_CLIENT',
  useFactory: () => {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_ANON_KEY;

    if (!url || !key) {
      throw new Error(
        'SUPABASE_URL or SUPABASE_ANON_KEY is not defined in the environment variables.',
      );
    }
    return createClient(url, key);
  },
};

@Global()
@Module({
  providers: [supabaseProvider],
  exports: [supabaseProvider],
})
export class SupabaseModule {}
