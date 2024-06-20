import { PostMeta as TPostMeta } from "../api/postMeta/PostMeta";

export const POSTMETA_TITLE_FIELD = "id";

export const PostMetaTitle = (record: TPostMeta): string => {
  return record.id?.toString() || String(record.id);
};
