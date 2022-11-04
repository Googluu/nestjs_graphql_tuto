import { Module } from '@nestjs/common';
import { PostsService } from './services/posts.service';
import { PostsResolver } from './resolvers/posts.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Post } from './post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [PostsService, PostsResolver],
})
export class PostsModule {}
