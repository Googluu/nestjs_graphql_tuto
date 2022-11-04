import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

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

  @Query(() => Post)
  post(@Args('id', { type: () => Int }) id: number) {
    return this.postsService.findOne(id);
  }

  @Mutation(() => Post)
  createPost(@Args('postInput') postInput: CreatePost) {
    return this.postsService.createPost(postInput);
  }
}
