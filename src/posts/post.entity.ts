/* eslint-disable prettier/prettier */
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from 'typeorm';

import { Author } from 'src/authors/entities/author.entity';

@Entity()
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column({ type: 'text', nullable: true })
  @Field({ nullable: true })
  content?: string;

  @Column()
  @Field(() => Int)
  authorId: number;

  @ManyToOne(() => Author, (author) => author.posts)
  @Field(() => Author)
  author: Author;
}
