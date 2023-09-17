import weaviate from "weaviate-ts-client";

export const db = weaviate.client({
  scheme: "http",
  host: "localhost:8080",
  headers: {
    "X-OpenAI-Api-Key": process.env.OPEN_API_KEY as string,
  },
});

export const schemaConfig = {
  class: "Answer",
  description: "A class called answer",
  vectorizer: "text2vec-openai",
  moduleConfig: {
    "generative-openai": {
      model: "gpt-3.5-turbo",
      temperatureProperty: 0.7,
      maxTokensProperty: 4096,
      frequencyPenaltyProperty: 0,
      presencePenaltyProperty: 0,
      topPProperty: 1,
    },
  },
  properties: [
    {
      dataType: ["text"],
      description: "The answer to the question",
      name: "answer",
    },
  ],
};
