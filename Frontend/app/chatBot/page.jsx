'use client';

import { useChat } from 'ai/react';
import { useState } from 'react';
import Markdown from 'react-markdown';

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    keepLastMessageOnError: true,
  });
  const [prompt, setPrompt] = useState(input);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
    handleInputChange(e);
  };

  const handleFormSubmit = async (e) => {
    await handleSubmit(e);
    setPrompt(''); // Vacía el input después de enviar el mensaje
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-300/5 border-1 border-blue-300/30 shadow-lg rounded-lg p-6 w-full max-w-md">
        <div className="h-80 overflow-y-auto space-y-4 pr-2">
        {messages && messages.length > 0 ? (
            messages.map((message) => (
              <div
                key={message.id}
                className={`p-3 rounded-lg ${
                  message.role === 'user'
                    ? 'bg-blue-500 text-white self-end'
                    : 'bg-gray-200 text-gray-800 self-start'
                }`}
              >
                <span className="font-semibold">
                  {message.role === 'user' ? 'User: ' : 'AI: '}
                </span>
               <Markdown>{message.content}</Markdown> 
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 flex flex-col items-center">
              <p>¡Hola! Soy tu asistente personal en este sitio. Pregúntame cualquier cosa que quieras saber sobre YerDev.</p>
              <img src='/robot.gif' alt="Robot" className="w-full h-72" />
            </div>
          )}
        </div>
        <form className="mt-6 flex" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="prompt"
            value={prompt}
            onChange={handlePromptChange}
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Escribe tu mensaje..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
