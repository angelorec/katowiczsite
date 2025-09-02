import Header from '@/components/layout/header';
import { CreatePostForm } from '@/components/create-post-form';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CreatePage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="container mx-auto max-w-2xl px-2 py-8">
        <Card className="border-primary/20">
            <CardHeader>
                <CardTitle className="font-headline text-3xl text-primary">
                    Criar Post com IA ✨
                </CardTitle>
                <CardDescription>
                    Descreva sua foto e deixe nossa IA criar a legenda e hashtags perfeitas para você, no estilo Natalia Katowicz.
                </CardDescription>
            </CardHeader>
            <CreatePostForm />
        </Card>
      </main>
    </div>
  );
}
