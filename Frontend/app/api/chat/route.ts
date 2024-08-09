import { google } from '@ai-sdk/google';
import { convertToCoreMessages,  streamText } from 'ai';
import { skills, projects, bio, prompt , Socials, } from '@/data';


export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = await streamText({
  model: google('models/gemini-1.5-pro'),
  system: prompt,
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'assistant', content: bio },
    { role: 'assistant', content: projects },
    { role: 'assistant', content: skills },
    { role: 'assistant', content: Socials },
    ...convertToCoreMessages(messages)  // Conversación del usuario
  ]
});
return result.toDataStreamResponse();
}


