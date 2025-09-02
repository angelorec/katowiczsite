'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { getAiSuggestions, type FormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { Bot, Check, Copy, RefreshCw, Wand2 } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Separator } from './ui/separator';

const initialState: FormState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
      {pending ? (
        <>
          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
          Gerando...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Gerar Sugestões
        </>
      )}
    </Button>
  );
}

function CopyButton({ textToCopy }: { textToCopy: string }) {
    const [copied, setCopied] = useState(false);
    const { toast } = useToast();

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        toast({
            title: "Copiado!",
            description: "O conteúdo foi copiado para a área de transferência.",
        });
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <Button variant="ghost" size="icon" onClick={handleCopy}>
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
        </Button>
    )
}

export function CreatePostForm() {
  const [state, formAction] = useFormState(getAiSuggestions, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && state.message !== 'Sugestões geradas com sucesso!') {
        toast({
            variant: "destructive",
            title: "Erro na Validação",
            description: state.message,
        })
    }
  }, [state, toast]);

  const hasSuggestions = state.caption || state.hashtags;

  return (
    <>
      <form action={formAction} ref={formRef}>
        <CardContent className="grid gap-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Image
              src="https://picsum.photos/seed/create/128/128"
              width={128}
              height={128}
              alt="placeholder"
              className="rounded-lg object-cover aspect-square"
              data-ai-hint="fashion accessory"
            />
            <div className="w-full space-y-2">
              <Label htmlFor="description" className="font-bold">Descreva a Imagem</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Ex: mulher sorrindo, usando vestido rosa, em um campo de flores ao pôr do sol..."
                rows={5}
                required
                className={cn(state.errors?.description && "border-destructive")}
              />
              {state.errors?.description && (
                <p className="text-sm text-destructive">{state.errors.description[0]}</p>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <SubmitButton />
        </CardFooter>
      </form>
      
      {hasSuggestions && (
        <div className="px-6 pb-6">
            <Separator className="my-4" />
            <div className="space-y-4">
                <h3 className="text-lg font-headline flex items-center gap-2 text-primary">
                    <Bot className="h-5 w-5"/>
                    Sugestões da IA
                </h3>
                {state.caption && (
                    <div className="space-y-2">
                        <Label className="font-bold">Legenda Sugerida</Label>
                        <div className="flex items-start gap-2 rounded-md border p-3 bg-card">
                            <p className="flex-1 text-sm">{state.caption}</p>
                            <CopyButton textToCopy={state.caption} />
                        </div>
                    </div>
                )}
                {state.hashtags && (
                    <div className="space-y-2">
                        <Label className="font-bold">Hashtags Sugeridas</Label>
                         <div className="flex items-start gap-2 rounded-md border p-3 bg-card">
                            <p className="flex-1 text-sm text-accent">{state.hashtags}</p>
                            <CopyButton textToCopy={state.hashtags} />
                        </div>
                    </div>
                )}
            </div>
        </div>
      )}
    </>
  );
}
