import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PostMetaWhereInput = {
  id?: StringFilter;
  metaData?: JsonFilter;
  postId?: IntNullableFilter;
};
