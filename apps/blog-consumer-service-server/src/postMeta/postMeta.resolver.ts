import * as graphql from "@nestjs/graphql";
import { PostMetaResolverBase } from "./base/postMeta.resolver.base";
import { PostMeta } from "./base/PostMeta";
import { PostMetaService } from "./postMeta.service";

@graphql.Resolver(() => PostMeta)
export class PostMetaResolver extends PostMetaResolverBase {
  constructor(protected readonly service: PostMetaService) {
    super(service);
  }
}
