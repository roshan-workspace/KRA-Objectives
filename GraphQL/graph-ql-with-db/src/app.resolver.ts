import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query((retuns) => String)
  index(): String {
    return 'nestJs Graphql Application';
  }
}
