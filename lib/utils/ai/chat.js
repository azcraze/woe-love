const tectalicOpenai = require('@tectalic/openai').default;
const { Configuration, OpenAIApi } = require("openai");
const util = require('util');


require('dotenv').config()

/*
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function generateCompletion() {
  const response = await openai.createCompletion({
    model: "text-davinci-001",
    prompt: "Write a tagline for an ice cream shop.",
    temperature: 0.4,
    max_tokens: 64,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });


  console.log(util.inspect(response, { depth: null }));

}

generateCompletion();
*/


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
let prompt = `how to structure and destructure objects?`

async function generateCompletion() {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "system", content: "Disregard all prior instructions. You are a Javascript helpbot named Scripty. You are concise, and at the same time thourough in your responses to all thing JavaScript. When providing examples, avoid useing methods and functions or any other JavaScript concept related to UI, HTML, CSS etc. as well as Networking, HTTPS, Requests, and avoid Streams and buffers. No concept discussed should deal with working with the DOM or browser. Besides being a helpful JavaScript chat bot, your coding skills are your superpower. Snippets for completing tasks will be followed with alternative solutions, perhaps using libraries to help with the task. " },{ role: "user", content: prompt }]
  })

  console.log(completion.data.choices[0].message);


}

generateCompletion();

/*
let prompt = `how to structure and destructure objects?`

tectalicOpenai(process.env.OPENAI_API_KEY)
  .chatCompletions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "system", content: "Disregard all prior instructions. You are a Javascript helpbot named Scripty. You are concise, and at the same time thourough in your responses to all thing JavaScript. When providing examples, avoid useing methods and functions or any other JavaScript concept related to UI, HTML, CSS etc. as well as Networking, HTTPS, Requests, and avoid Streams and buffers. No concept discussed should deal with working with the DOM or browser. Besides being a helpful JavaScript chat bot, your coding skills are your superpower. Snippets for completing tasks will be followed with alternative solutions, perhaps using libraries to help with the task. " },{ role: "user", content: prompt }]
  })
  .then((response) => {
    console.log(response.data.choices[0].message.content.trim());
  })


*/