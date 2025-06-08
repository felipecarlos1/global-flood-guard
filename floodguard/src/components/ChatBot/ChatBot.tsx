"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    watsonAssistantChatOptions?: {
      integrationID: string;
      region: string;
      serviceInstanceID: string;
      namespace: string;
      clientVersion?: string;
      onLoad: (instance: { render: () => Promise<void> }) => void;
    };
  }
}

export default function Chatbot() {
  useEffect(() => {
    const scriptId = 'watson-assistant-script';

    if (!window.watsonAssistantChatOptions) {
      window.watsonAssistantChatOptions = {
        integrationID: "bf6f53a5-1483-404c-b7c8-969c6617fc0d",
        region: "au-syd",
        serviceInstanceID: "99766e14-630f-4de3-9e00-2c1e6104eefd",
        namespace: "chatbotViaMobilidade",
        onLoad: async (instance) => {
          await instance.render();
        }
      };
    }

    if (!document.getElementById(scriptId)) {
      const t = document.createElement('script');
      t.id = scriptId;
      t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
              (window.watsonAssistantChatOptions?.clientVersion || 'latest') +
              "/WatsonAssistantChatEntry.js";
      document.head.appendChild(t);
    }

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
      delete window.watsonAssistantChatOptions;
    };
  }, []);

  return null;
}