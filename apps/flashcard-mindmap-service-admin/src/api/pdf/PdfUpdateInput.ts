import { FlashcardUpdateManyWithoutPdfsInput } from "./FlashcardUpdateManyWithoutPdfsInput";
import { MindMapUpdateManyWithoutPdfsInput } from "./MindMapUpdateManyWithoutPdfsInput";
import { QuestionUpdateManyWithoutPdfsInput } from "./QuestionUpdateManyWithoutPdfsInput";
import { SummaryUpdateManyWithoutPdfsInput } from "./SummaryUpdateManyWithoutPdfsInput";

export type PdfUpdateInput = {
  fileName?: string | null;
  fileSize?: number | null;
  fileUrl?: string | null;
  flashcards?: FlashcardUpdateManyWithoutPdfsInput;
  mindMaps?: MindMapUpdateManyWithoutPdfsInput;
  questions?: QuestionUpdateManyWithoutPdfsInput;
  summaries?: SummaryUpdateManyWithoutPdfsInput;
};
