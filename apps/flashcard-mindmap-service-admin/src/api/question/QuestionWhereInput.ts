import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PdfWhereUniqueInput } from "../pdf/PdfWhereUniqueInput";

export type QuestionWhereInput = {
  answer?: StringNullableFilter;
  id?: StringFilter;
  pdf?: PdfWhereUniqueInput;
  question?: StringNullableFilter;
};
