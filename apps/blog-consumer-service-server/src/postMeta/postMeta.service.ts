import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PostMetaServiceBase } from "./base/postMeta.service.base";

@Injectable()
export class PostMetaService extends PostMetaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
