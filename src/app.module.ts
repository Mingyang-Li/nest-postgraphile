import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PostgraphileModule } from './postgraphile/postgraphile.module';

@Module({
  imports: [PostgraphileModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
