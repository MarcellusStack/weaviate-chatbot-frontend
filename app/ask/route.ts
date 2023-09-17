import { NextResponse } from "next/server";
import { db } from "@/server/db/db";
import dbMigration from "@/server/db/migration";

export async function POST(request: Request) {
  const { answerType, question } = await request.json();

  // vectorize the question
  // make db ask function to get the answer including the answer type to either get one answer or multiple answers
  // return the answer and question
  const answer =
    "Die Telefonlisten finden sie auf der Intranet Webseite unter Telefonlisten oder benutzen sie diesen Link: https://intranet.drk-rostock.de/Telefonlisten.";

  // instruction for the generative module
  const generatePrompt = `Generiere mir bitte eine Chatbot antwort aus diesem Text: {answer}`;

  const response = await db.graphql
    .get()
    .withClassName("Answer")
    .withFields("answer")
    .withNearText({ concepts: [question], certainty: 0.9 })
    .withGenerate({
      singlePrompt: generatePrompt,
    })
    .withLimit(1)
    .do();

  const generatedAnswer =
    response.data &&
    response.data.Get.Answer.length > 0 &&
    response.data.Get.Answer[0]._additional.generate.singleResult;

  const data = {
    answer: generatedAnswer
      ? generatedAnswer
      : "Entschuldigen Sie, aber ich habe leider keine spezifischen Informationen zu diesem Thema. Mein Wissen ist auf Informationen beschränkt, die vor meinem letzten Aktualisierungsdatum verfügbar waren. Wenn Sie weitere Fragen haben oder Hilfe zu anderen Themen benötigen, stehe ich Ihnen gerne zur Verfügung.",
    question,
    newAnswer: true,
  };
  /* const migrateDB = await dbMigration(); */

  /* const response = await db.schema.getter().do(); */

  /* const newAnswer = await db.data
    .creator()
    .withClassName("Answer")
    .withProperties({
      answer:
        "Telefonlisten werden monatlich aktualisiert, falls ein Fehler vorliegt, melden Sie sich bitte im Sekretariat.",
    })
    .do(); */

  return NextResponse.json({ data });
}
