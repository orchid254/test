import { SortOrder } from "../../util/SortOrder";

export type PostMetaOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  metaData?: SortOrder;
  postId?: SortOrder;
  updatedAt?: SortOrder;
};
