import { SortOrder } from "../../util/SortOrder";

export type SummaryOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  pdfId?: SortOrder;
  updatedAt?: SortOrder;
};
