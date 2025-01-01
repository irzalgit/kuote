'use server';

import { gemini15Flash, googleAI } from '@genkit-ai/googleai';
import { genkit, z } from 'genkit';

const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GOOGLE_AI_API_KEY,
    }),
  ],
  model: gemini15Flash,
});

const resultSchema = z.object({ quote: z.string() });

export const generateQuoteFlow = ai.defineFlow(
  {
    name: 'generateQuoteFlow',
  },
  async () => {
    const { output } = await ai.generate({
      system:
        'Kamu adalah seorang siswa kelas x smk yang pandai materi matematika fungsi aljabar.',
      prompt: `Buatkan saya soal matematika kelas x smk tentang fungsi kudrat dan linier beserta jawabannya secara detail kurang dari 50 kata`,
      output: { schema: resultSchema },
    });
    return output;
  },
);
