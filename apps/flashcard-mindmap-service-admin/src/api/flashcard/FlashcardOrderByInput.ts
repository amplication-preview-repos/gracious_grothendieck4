import { SortOrder } from "../../util/SortOrder";

export type FlashcardOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  pdfId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
