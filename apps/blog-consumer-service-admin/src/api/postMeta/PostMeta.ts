import { JsonValue } from "type-fest";

export type PostMeta = {
  createdAt: Date;
  id: string;
  metaData: JsonValue;
  postId: number | null;
  updatedAt: Date;
};
