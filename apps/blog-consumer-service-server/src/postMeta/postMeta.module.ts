import { Module } from "@nestjs/common";
import { PostMetaModuleBase } from "./base/postMeta.module.base";
import { PostMetaService } from "./postMeta.service";
import { PostMetaController } from "./postMeta.controller";
import { PostMetaResolver } from "./postMeta.resolver";

@Module({
  imports: [PostMetaModuleBase],
  controllers: [PostMetaController],
  providers: [PostMetaService, PostMetaResolver],
  exports: [PostMetaService],
})
export class PostMetaModule {}
