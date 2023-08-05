import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ImageMetadataInput {
  @Field({ description: '로고 ID' })
  logoId: string;

  @Field({ description: '이미지 src (url)' })
  src: string;

  @Field({ description: '이미지 alt' })
  alt: string;

  @Field(() => Int, { description: '이미지 width' })
  width: number;

  @Field(() => Int, { description: '이미지 height' })
  height: number;
}