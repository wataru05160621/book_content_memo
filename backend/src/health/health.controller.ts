import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HealthCheckResponseDto } from './dto/health.dto';
import { ConfigService } from '@nestjs/config';

@ApiTags('ヘルスチェック')
@Controller('health')
export class HealthController {
  constructor(private configService: ConfigService) {}

  @Get()
  @ApiOperation({ summary: 'ヘルスチェック' })
  @ApiResponse({
    status: 200,
    description: 'サーバー稼働中',
    type: HealthCheckResponseDto,
  })
  check(): HealthCheckResponseDto {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      version: this.configService.get('API_VERSION', '1.0.0'),
    };
  }
}
