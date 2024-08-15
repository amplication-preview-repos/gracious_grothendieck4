import { SortOrder } from "../../util/SortOrder";

export type QuestionOrderByInput = {
  answer?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  pdfId?: SortOrder;
  question?: SortOrder;
  updatedAt?: SortOrder;
};
