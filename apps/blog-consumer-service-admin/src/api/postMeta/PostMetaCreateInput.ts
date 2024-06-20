import { InputJsonValue } from "../../types";

export type PostMetaCreateInput = {
  metaData?: InputJsonValue;
  postId?: number | null;
};
