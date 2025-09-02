'use server';

import { suggestCaptionAndHashtags } from '@/ai/flows/ai-caption-suggestions';
import { z } from 'zod';

export type FormState = {
  message: string;
  caption?: string;
  hashtags?: string;
  errors?: {
    description?: string[];
  };
};

const schema = z.object({
  description: z.string({
    required_error: "A descrição é obrigatória.",
  }).min(10, 'A descrição deve ter pelo menos 10 caracteres.'),
});

export async function getAiSuggestions(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = schema.safeParse({
    description: formData.get('description'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Por favor, corrija os erros abaixo.',
    };
  }

  try {
    const result = await suggestCaptionAndHashtags({
      imageDescription: validatedFields.data.description,
      siteTheme: 'feminine, vibrant, purple, pink, elegant, fashion',
    });
    return {
      message: 'Sugestões geradas com sucesso!',
      caption: result.suggestedCaption,
      hashtags: result.suggestedHashtags,
      errors: {},
    };
  } catch (error) {
    console.error(error);
    return { message: 'Ocorreu um erro ao gerar sugestões. Tente novamente.' };
  }
}
