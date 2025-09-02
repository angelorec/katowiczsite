import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Instagram, Twitter, Link as LinkIcon, Edit } from "lucide-react";
import { Button } from "../ui/button";

function TiktokIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.528 8.008v.01" />
            <path d="M12.528 12.01v.01" />
            <path d="M12.528 16.01v.01" />
            <path d="M16.528 4.008v.01" />
            <path d="M16.528 8.008v.01" />
            <path d="M16.528 12.01v.01" />
            <path d="M8.528 12.01v.01" />
            <path d="M8.528 16.01v.01" />
            <path d="M20.73 10.51a8.47 8.47 0 0 0-3.23-5.26 8.47 8.47 0 0 0-5.26-2.25H12" />
            <path d="M3.27 13.49a8.47 8.47 0 0 0 3.23 5.26 8.47 8.47 0 0 0 5.26 2.25H12" />
        </svg>
    )
}

export default function Header() {
  return (
    <header className="w-full">
      <div className="relative h-48 md:h-64 w-full">
        <Image 
          src="https://i.imgur.com/iu9YXXA.jpeg" 
          alt="Foto de capa com tema Kuromi" 
          fill
          className="object-cover"
          priority
          data-ai-hint="cartoon character collage"
        />
      </div>
      <div className="container max-w-2xl mx-auto px-4 pb-4">
        <div className="flex justify-center -mt-16 md:-mt-20">
          <Avatar className="h-28 w-28 md:h-36 md:w-36 border-4 border-background">
            <AvatarImage src="https://i.imgur.com/JFb3R8k.jpeg" alt="Natália Katowicz" data-ai-hint="woman selfie" className="object-cover" />
            <AvatarFallback>NK</AvatarFallback>
          </Avatar>
        </div>

        <div className="text-center pt-4">
            <h1 className="font-headline text-4xl text-white">Natália Katowicz</h1>
            <p className="text-sm text-muted-foreground pt-1">
                She/Her 💜 Gamer, streamer & e-girl.
            </p>
            <p className="text-sm text-muted-foreground">Bem-vindo ao meu universo! ✨</p>
        </div>

        <nav className="flex items-center justify-center gap-4 py-4">
            <a href="https://www.instagram.com/natkatowicz/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
            </a>
            <a href="https://x.com/vitacelestine" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
            </a>
            <a href="https://www.tiktok.com/@vitacelestine?lang=pt" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <TiktokIcon className="h-6 w-6" />
                <span className="sr-only">TikTok</span>
            </a>
        </nav>
      </div>
    </header>
  );
}
