import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FlashcardListRelationFilter } from "../flashcard/FlashcardListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MindMapListRelationFilter } from "../mindMap/MindMapListRelationFilter";
import { QuestionListRelationFilter } from "../question/QuestionListRelationFilter";
import { SummaryListRelationFilter } from "../summary/SummaryListRelationFilter";

export type PdfWhereInput = {
  fileName?: StringNullableFilter;
  fileSize?: IntNullableFilter;
  fileUrl?: StringNullableFilter;
  flashcards?: FlashcardListRelationFilter;
  id?: StringFilter;
  mindMaps?: MindMapListRelationFilter;
  questions?: QuestionListRelationFilter;
  summaries?: SummaryListRelationFilter;
};
