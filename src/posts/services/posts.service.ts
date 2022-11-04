import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Post } from '../post.entity';
import { CreatePost } from '../dtos/post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postsRepository: Repository<Post>,
  ) {}

  async findAll(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  createPost(data: CreatePost): Promise<Post> {
    const newPost = this.postsRepository.create(data);
    return this.postsRepository.save(newPost);
  }
}
