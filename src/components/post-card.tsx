"use client";

import type { Post, Comment } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import { Bookmark, Heart, MessageCircle, MoreHorizontal, PlayCircle, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useRef } from "react";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [newComment, setNewComment] = useState("");
  const commentInputRef = useRef<HTMLInputElement>(null);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
    if (!isLiked) {
      setIsLiking(true);
      setTimeout(() => setIsLiking(false), 400);
    }
  };

  const handleDoubleClick = () => {
    if (!isLiked) {
      handleLikeClick();
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
        const comment: Comment = {
            user: "Anônimo", // Or a logged-in user
            text: newComment.trim(),
        }
        setComments([...comments, comment]);
        setNewComment("");
    }
  }

  const isMegaVideo = post.type === 'video' && post.mediaUrl.includes('mega.nz/embed');
  const isBunnyVideo = post.type === 'video' && post.mediaUrl.includes('iframe.mediadelivery.net');

  return (
    <Card className="w-full overflow-hidden rounded-lg border-none shadow-lg bg-card">
      <CardHeader className="flex flex-row items-center gap-3 p-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={post.avatarUrl} alt={post.author} />
          <AvatarFallback>{post.author.substring(0, 2)}</AvatarFallback>
        </Avatar>
        <span className="font-bold text-sm">{post.author}</span>
        <button className="ml-auto">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </CardHeader>
      <CardContent className="p-0 relative" onDoubleClick={handleDoubleClick}>
        {post.type === 'image' ? (
          <Image
            src={post.mediaUrl}
            alt={`Post by ${post.author}`}
            width={600}
            height={750}
            className="w-full object-cover aspect-[4/5]"
            priority={parseInt(post.id.split('-')[1]) <= 3} // Prioritize loading first 3 images
            data-ai-hint="fashion style"
          />
        ) : isMegaVideo ? (
            <div className="aspect-video w-full">
              <iframe 
                src={post.mediaUrl}
                width="100%" 
                height="100%" 
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
        ) : isBunnyVideo ? (
            <div className="aspect-video w-full">
              <iframe 
                src={post.mediaUrl}
                width="640" 
                height="360" 
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
        ) : (
          <div className="relative aspect-video w-full">
             <Image
              src={post.mediaUrl}
              alt={`Video by ${post.author}`}
              width={600}
              height={400}
              className="w-full h-full object-cover"
              data-ai-hint="lifestyle video"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <PlayCircle className="h-16 w-16 text-white/80 drop-shadow-lg" />
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 p-4">
        <div className="flex w-full items-center">
          <div className="flex gap-4">
            <button onClick={handleLikeClick}>
              <Heart className={cn(
                'h-6 w-6 transition-all duration-300', 
                isLiked ? 'fill-pink-500 text-pink-500' : 'text-foreground',
                isLiking && 'animate-like-bounce'
                )} />
            </button>
            <button onClick={() => commentInputRef.current?.focus()}>
              <MessageCircle className="h-6 w-6" />
            </button>
          </div>
          <button className="ml-auto">
            <Bookmark className="h-6 w-6" />
          </button>
        </div>
        <div className="text-sm font-semibold">{likes.toLocaleString()} likes</div>
        <div className="text-sm w-full space-y-2">
            <div>
                <span className="font-bold mr-1">{post.author}</span>
                <span>{post.caption}</span>
            </div>
            {comments.length > 2 && (
                 <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Ver todos os {comments.length} comentários
                </button>
            )}
            <div className="w-full space-y-2 text-sm">
                {comments.slice(0,2).map((comment, index) => (
                    <div key={index} className="flex gap-2">
                        <span className="font-bold shrink-0">{comment.user}</span>
                        <span>{comment.text}</span>
                    </div>
                ))}
            </div>
        </div>
        
        <Separator className="my-2 bg-border/50"/>

        <form onSubmit={handleCommentSubmit} className="w-full flex items-center gap-2">
            <Input 
                ref={commentInputRef}
                type="text"
                placeholder="Adicione um comentário..."
                className="bg-transparent border-none focus-visible:ring-0 text-sm h-8 p-0"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
            />
            <Button type="submit" variant="ghost" size="sm" disabled={!newComment.trim()} className="text-primary hover:text-primary">
                Publicar
            </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
