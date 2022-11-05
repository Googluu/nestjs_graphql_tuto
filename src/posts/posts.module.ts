import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostsService } from './services/posts.service';
import { PostsResolver } from './resolvers/posts.resolver';

import { AuthorsModule } from 'src/authors/authors.module';

import { Post } from './post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post]), AuthorsModule],
  providers: [PostsService, PostsResolver],
})
export class PostsModule {}
