'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Loader2 } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) return;

    setIsLoading(true);
    setProgress(0);

    // Simulate progress over 5 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Store email in localStorage and redirect
          localStorage.setItem('userEmail', email);
          router.push('/');
          return 100;
        }
        return prev + 2; // Increment by 2% every 100ms (5 seconds total)
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Profile Section */}
        <div className="text-center space-y-4">
          <Avatar className="h-24 w-24 mx-auto border-4 border-primary">
            <AvatarImage src="https://i.imgur.com/JFb3R8k.jpeg" alt="Natália Katowicz" />
            <AvatarFallback>NK</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-headline text-3xl text-primary">Natália Katowicz VIP</h1>
            <p className="text-muted-foreground text-sm">Acesso exclusivo ao conteúdo premium</p>
          </div>
        </div>

        {/* Login Form */}
        <Card className="border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-headline text-primary">
              Acesso VIP 💜
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-center block font-medium">
                  Coloque seu e-mail de pagamento
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className="text-center"
                />
              </div>

              {isLoading && (
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Verificando acesso...
                  </div>
                  <Progress value={progress} className="w-full" />
                  <p className="text-xs text-center text-muted-foreground">
                    Carregando conteúdo exclusivo...
                  </p>
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground"
                disabled={isLoading || !email.trim()}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Gerando Login...
                  </>
                ) : (
                  'Gerar Login'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-xs text-muted-foreground">
          <p>Conteúdo exclusivo para assinantes VIP</p>
          <p className="mt-1">✨ Acesso liberado em segundos ✨</p>
        </div>
      </div>
    </div>
  );
}