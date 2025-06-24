import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class AddUserArgs {
  @Field()
  firstName: String;

  @Field()
  lastName: String;

  @Field()
  email: String;

  @Field()
  password: String;

  @Field()
  role: String;
}
