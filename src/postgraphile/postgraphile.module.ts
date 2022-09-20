import { Module } from '@nestjs/common';
import { PostGraphileController } from './postgraphile.controller';

@Module({
  controllers: [PostGraphileController],
})
export class PostgraphileModule {}
