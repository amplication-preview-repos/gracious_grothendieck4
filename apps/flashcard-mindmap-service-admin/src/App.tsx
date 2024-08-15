import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PdfList } from "./pdf/PdfList";
import { PdfCreate } from "./pdf/PdfCreate";
import { PdfEdit } from "./pdf/PdfEdit";
import { PdfShow } from "./pdf/PdfShow";
import { FlashcardList } from "./flashcard/FlashcardList";
import { FlashcardCreate } from "./flashcard/FlashcardCreate";
import { FlashcardEdit } from "./flashcard/FlashcardEdit";
import { FlashcardShow } from "./flashcard/FlashcardShow";
import { SummaryList } from "./summary/SummaryList";
import { SummaryCreate } from "./summary/SummaryCreate";
import { SummaryEdit } from "./summary/SummaryEdit";
import { SummaryShow } from "./summary/SummaryShow";
import { MindMapList } from "./mindMap/MindMapList";
import { MindMapCreate } from "./mindMap/MindMapCreate";
import { MindMapEdit } from "./mindMap/MindMapEdit";
import { MindMapShow } from "./mindMap/MindMapShow";
import { QuestionList } from "./question/QuestionList";
import { QuestionCreate } from "./question/QuestionCreate";
import { QuestionEdit } from "./question/QuestionEdit";
import { QuestionShow } from "./question/QuestionShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FlashcardMindmapService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Pdf"
          list={PdfList}
          edit={PdfEdit}
          create={PdfCreate}
          show={PdfShow}
        />
        <Resource
          name="Flashcard"
          list={FlashcardList}
          edit={FlashcardEdit}
          create={FlashcardCreate}
          show={FlashcardShow}
        />
        <Resource
          name="Summary"
          list={SummaryList}
          edit={SummaryEdit}
          create={SummaryCreate}
          show={SummaryShow}
        />
        <Resource
          name="MindMap"
          list={MindMapList}
          edit={MindMapEdit}
          create={MindMapCreate}
          show={MindMapShow}
        />
        <Resource
          name="Question"
          list={QuestionList}
          edit={QuestionEdit}
          create={QuestionCreate}
          show={QuestionShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
