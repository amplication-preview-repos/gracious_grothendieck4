import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PdfWhereUniqueInput } from "../pdf/PdfWhereUniqueInput";

export type FlashcardWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  pdf?: PdfWhereUniqueInput;
  title?: StringNullableFilter;
};
