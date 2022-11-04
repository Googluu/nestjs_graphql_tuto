import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { Post } from '../post.entity';
import { PostsService } from '../services/posts.service';
import { CreatePost } from '../dtos/post.dto';

@Resolver()
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query(() => [Post])
  posts() {
    return this.postsService.findAll();
  }

  @Mutation(() => Post)
  createPost(@Args('postInput') postInput: CreatePost) {
    return this.postsService.createPost(postInput);
  }
}
