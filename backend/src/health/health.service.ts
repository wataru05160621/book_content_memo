import { Injectable } from '@nestjs/common';
import { SupabaseClient, PostgrestError } from '@supabase/supabase-js';
import { InjectSupabaseClient } from '../supabase/supabase.decorator';

@Injectable()
export class HealthService {
  constructor(
    @InjectSupabaseClient() private readonly supabase: SupabaseClient,
  ) {}

  async checkAll() {
    const results = await Promise.all([
      this.checkDatabase(),
      this.checkExternalServices(),
    ]);

    return {
      status: results.every((r) => r.status === 'ok') ? 'ok' : 'error',
      timestamp: new Date().toISOString(),
      services: {
        database: results[0],
        external: results[1],
      },
    };
  }

  async checkDatabase() {
    try {
      const { data, error } = await this.supabase.rpc('health_check');
      return {
        status: error ? 'error' : 'ok',
        message: error instanceof PostgrestError ? error.message : 'Database connection is healthy',
      };
    } catch (error) {
      return {
        status: 'error',
        message: error.message,
      };
    }
  }

  async checkExternalServices() {
    // 外部サービスのヘルスチェックを実装
    return {
      status: 'ok',
      message: 'External services are healthy',
    };
  }
}
