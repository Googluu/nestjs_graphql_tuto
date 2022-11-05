import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AuthorsService } from 'src/authors/authors.service';

import { Post } from '../post.entity';
import { Author } from 'src/authors/entities/author.entity';
import { CreatePost } from '../dtos/post.dto';

@Injectable()
export class PostsService {
  constructor(
    private authorsService: AuthorsService,
    @InjectRepository(Post) private postsRepository: Repository<Post>,
  ) {}

  async findAll(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  async findOne(id: number): Promise<Post> {
    return await this.postsRepository.findOne({
      where: {
        id,
      },
    });
  }

  createPost(data: CreatePost): Promise<Post> {
    const newPost = this.postsRepository.create(data);
    return this.postsRepository.save(newPost);
  }

  getAuthor(userId: number): Promise<Author> {
    return this.authorsService.findOne(userId);
  }
}
