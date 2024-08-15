import { FlashcardCreateNestedManyWithoutPdfsInput } from "./FlashcardCreateNestedManyWithoutPdfsInput";
import { MindMapCreateNestedManyWithoutPdfsInput } from "./MindMapCreateNestedManyWithoutPdfsInput";
import { QuestionCreateNestedManyWithoutPdfsInput } from "./QuestionCreateNestedManyWithoutPdfsInput";
import { SummaryCreateNestedManyWithoutPdfsInput } from "./SummaryCreateNestedManyWithoutPdfsInput";

export type PdfCreateInput = {
  fileName?: string | null;
  fileSize?: number | null;
  fileUrl?: string | null;
  flashcards?: FlashcardCreateNestedManyWithoutPdfsInput;
  mindMaps?: MindMapCreateNestedManyWithoutPdfsInput;
  questions?: QuestionCreateNestedManyWithoutPdfsInput;
  summaries?: SummaryCreateNestedManyWithoutPdfsInput;
};
