//import OpenAI from "openai";
const OpenAI = require("openai");

const openai = new OpenAI({
  //apiKey: "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",
  apiKey: "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",
});

async function main() {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant designed to output JSON.",
        },
        { role: "user", content: "Who won the world series in 2020?" },
      ],
      model: "gpt-3.5-turbo-0125",
      response_format: { type: "json_object" },
    });
    console.log(completion.choices[0].message.content);
  } catch (err) {
    console.log(err);
  }
}

main();
