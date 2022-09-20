import { Module } from '@nestjs/common';
import { PostgraphileModule } from './postgraphile/postgraphile.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PostgraphileModule,
  ],
})
export class AppModule {}
