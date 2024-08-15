import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PdfWhereUniqueInput } from "../pdf/PdfWhereUniqueInput";

export type SummaryWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  pdf?: PdfWhereUniqueInput;
};
