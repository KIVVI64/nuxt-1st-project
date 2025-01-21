import { GoogleGenerativeAI } from "@google/generative-ai";

export default eventHandler(async (event) => {
  try {
    const { geminiKey } = useRuntimeConfig();
    const genAI = new GoogleGenerativeAI(geminiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
      systemInstruction: "Narzekaj oraz bądź sceptycznie nastawiony do informacji jakie przedstawiasz",
    });

    // Extract the prompt from the request body
    const { prompt } = await readBody(event);

    // Validate the prompt
    if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
      return createError({ statusCode: 400, statusMessage: 'Prompt is required and must be a non-empty string.' });
    }

    const result = await model.generateContent(prompt);
    //const result = await model.generateContentStream(prompt);

    return result.response.text();
    //return result;
  } catch (error) {
    console.error("Error processing Gemini request:", error);
    return createError({ statusCode: 500, statusMessage: 'Error processing request.' });
  }
});

