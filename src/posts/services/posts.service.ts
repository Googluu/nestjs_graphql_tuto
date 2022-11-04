import { Injectable } from '@nestjs/common';

import { Post } from '../post.entity';

@Injectable()
export class PostsService {
  findAll(): Post[] {
    return [
      {
        id: 1,
        title: 'Hi world!',
        content: 'This is a great',
      },
    ];
  }
}
