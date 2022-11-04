/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePost {
  @Field()
  title: string;

  @Field()
  content: string;
}
