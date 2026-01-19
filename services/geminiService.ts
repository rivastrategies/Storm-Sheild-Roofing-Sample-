
import { GoogleGenAI, Type } from "@google/genai";
import { DamageReport } from "../types";

export const analyzeDamage = async (imageBuffer: string): Promise<DamageReport> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: {
      parts: [
        {
          inlineData: {
            mimeType: 'image/jpeg',
            data: imageBuffer,
          },
        },
        {
          text: `Analyze this roof for storm damage. Provide a JSON response evaluating the severity (Low, Medium, High, Critical), a short summary of visible damage, recommended actions, and estimated urgency.`,
        },
      ],
    },
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          severity: { type: Type.STRING },
          summary: { type: Type.STRING },
          recommendedActions: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          estimatedUrgency: { type: Type.STRING }
        },
        required: ["severity", "summary", "recommendedActions", "estimatedUrgency"]
      }
    },
  });

  return JSON.parse(response.text || '{}') as DamageReport;
};
