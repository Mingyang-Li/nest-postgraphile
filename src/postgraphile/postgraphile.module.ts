import { Module } from '@nestjs/common';
import { PostGraphileController } from './postgraphile.controller';
import { PostGraphileService } from './postgraphile.service';

@Module({
  controllers: [PostGraphileController],
  providers: [PostGraphileService],
})
export class PostgraphileModule {}
