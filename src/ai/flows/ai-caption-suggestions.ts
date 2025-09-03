'use server';

/**
 * @fileOverview Provides AI-generated caption and hashtag suggestions for user uploads.
 *
 * - suggestCaptionAndHashtags - A function that generates caption and hashtag suggestions.
 * - SuggestCaptionAndHashtagsInput - The input type for the suggestCaptionAndHashtags function.
 * - SuggestCaptionAndHashtagsOutput - The return type for the suggestCaptionAndHashtags function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const SuggestCaptionAndHashtagsInputSchema = z.object({
  imageDescription: z
    .string()
    .describe('A detailed description of the image content.'),
  siteTheme: z
    .string()
    .default('feminine, vibrant')
    .describe('The theme of the website. e.g., feminine, vibrant, etc.'),
});
export type SuggestCaptionAndHashtagsInput = z.infer<
  typeof SuggestCaptionAndHashtagsInputSchema
>;

const SuggestCaptionAndHashtagsOutputSchema = z.object({
  suggestedCaption: z
    .string()
    .describe('An AI-generated caption suggestion for the image.'),
  suggestedHashtags: z
    .string()
    .describe('AI-generated hashtag suggestions for the image.'),
});
export type SuggestCaptionAndHashtagsOutput = z.infer<
  typeof SuggestCaptionAndHashtagsOutputSchema
>;

export async function suggestCaptionAndHashtags(
  input: SuggestCaptionAndHashtagsInput
): Promise<SuggestCaptionAndHashtagsOutput> {
  return suggestCaptionAndHashtagsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestCaptionAndHashtagsPrompt',
  input: {schema: SuggestCaptionAndHashtagsInputSchema},
  output: {schema: SuggestCaptionAndHashtagsOutputSchema},
  prompt: `You are an AI assistant specializing in generating engaging captions and relevant hashtags for social media content.

  Based on the image description: "{{imageDescription}}" and the website theme: "{{siteTheme}}", create a captivating caption and suggest relevant hashtags to maximize user engagement.

  Ensure the caption is concise, creative, and aligns with the overall theme of the website.
  The tone must be suitable for a feminine audience.

  Return the caption in suggestedCaption and hashtags in suggestedHashtags.
  `,
});

const suggestCaptionAndHashtagsFlow = ai.defineFlow(
  {
    name: 'suggestCaptionAndHashtagsFlow',
    inputSchema: SuggestCaptionAndHashtagsInputSchema,
    outputSchema: SuggestCaptionAndHashtagsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
