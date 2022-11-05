import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';

import { Post } from '../post.entity';
import { Author } from 'src/authors/entities/author.entity';
import { PostsService } from '../services/posts.service';
import { CreatePost } from '../dtos/post.dto';

@Resolver(() => Post)
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

  @ResolveField(() => Author)
  author(@Parent() post: Post): Promise<Author> {
    return this.postsService.getAuthor(post.authorId);
  }

  @Mutation(() => Post)
  createPost(@Args('postInput') postInput: CreatePost) {
    return this.postsService.createPost(postInput);
  }
}
