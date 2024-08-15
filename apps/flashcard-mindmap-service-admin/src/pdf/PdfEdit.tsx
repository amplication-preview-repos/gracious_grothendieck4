import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FlashcardTitle } from "../flashcard/FlashcardTitle";
import { MindMapTitle } from "../mindMap/MindMapTitle";
import { QuestionTitle } from "../question/QuestionTitle";
import { SummaryTitle } from "../summary/SummaryTitle";

export const PdfEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="fileName" source="fileName" />
        <NumberInput step={1} label="fileSize" source="fileSize" />
        <TextInput label="fileUrl" source="fileUrl" />
        <ReferenceArrayInput
          source="flashcards"
          reference="Flashcard"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FlashcardTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="mindMaps"
          reference="MindMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MindMapTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="questions"
          reference="Question"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QuestionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="summaries"
          reference="Summary"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SummaryTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
