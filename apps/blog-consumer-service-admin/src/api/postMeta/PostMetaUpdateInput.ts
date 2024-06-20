import { InputJsonValue } from "../../types";

export type PostMetaUpdateInput = {
  metaData?: InputJsonValue;
  postId?: number | null;
};
