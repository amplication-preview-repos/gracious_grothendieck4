import { SortOrder } from "../../util/SortOrder";

export type PdfOrderByInput = {
  createdAt?: SortOrder;
  fileName?: SortOrder;
  fileSize?: SortOrder;
  fileUrl?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
