import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { answerType, question } = await request.json();

  // vectorize the question
  // make db ask function to get the answer including the answer type to either get one answer or multiple answers
  // return the answer and question
  const answer =
    "Die Telefonlisten finden sie auf der Intranet Webseite unter Telefonlisten oder benutzen sie diesen Link: https://intranet.drk-rostock.de/Telefonlisten.";
  const data = { answer, question, newAnswer: true };

  return NextResponse.json({ data });
}
