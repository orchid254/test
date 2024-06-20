import { PostMetaWhereInput } from "./PostMetaWhereInput";
import { PostMetaOrderByInput } from "./PostMetaOrderByInput";

export type PostMetaFindManyArgs = {
  where?: PostMetaWhereInput;
  orderBy?: Array<PostMetaOrderByInput>;
  skip?: number;
  take?: number;
};
