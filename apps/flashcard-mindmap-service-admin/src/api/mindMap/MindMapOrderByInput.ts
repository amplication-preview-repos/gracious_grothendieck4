import { SortOrder } from "../../util/SortOrder";

export type MindMapOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  nodes?: SortOrder;
  pdfId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
