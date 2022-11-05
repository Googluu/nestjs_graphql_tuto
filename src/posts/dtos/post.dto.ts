/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength, IsInt } from 'class-validator';

@InputType()
export class CreatePost {
  @Field()
  @IsNotEmpty({
    message: "Title is required"
  })
  @MaxLength(100, {
    message: "Title is too Long",
  })
  @MinLength(3, {
    message: "Title is too short"
  })
  title: string;

  @Field({ nullable: true })
  @MaxLength(400)
  content?: string;

  @IsInt()
  @Field()
  authorId: number;
}
