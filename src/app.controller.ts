import { Controller, Get, Next, Post, Req, Res } from '@nestjs/common';
import { PostGraphileResponseNode } from 'postgraphile';
import { middleware } from 'src/graphql/middleware';
import { Request, Response } from 'express';

@Controller('/')
export class AppController {
  @Get(middleware.graphiqlRoute)
  graphiql(@Req() request: Request, @Res() response: Response, @Next() next) {
    middleware.graphiqlRouteHandler(
      new PostGraphileResponseNode(request, response, next),
    );
  }

  @Post(middleware.graphqlRoute)
  graphql(@Req() request: Request, @Res() response: Response, @Next() next) {
    middleware.graphqlRouteHandler(
      new PostGraphileResponseNode(request, response, next),
    );
  }
}
