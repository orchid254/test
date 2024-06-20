import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PostMetaService } from "./postMeta.service";
import { PostMetaControllerBase } from "./base/postMeta.controller.base";

@swagger.ApiTags("postMetas")
@common.Controller("postMetas")
export class PostMetaController extends PostMetaControllerBase {
  constructor(protected readonly service: PostMetaService) {
    super(service);
  }
}
