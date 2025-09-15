import { Heart, MessageCircle, BookOpen, User, Clock } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  course?: string;
  condition: "New" | "Like New" | "Good" | "Fair";
  price?: number;
  type: "sell" | "lend" | "exchange";
  owner: string;
  image: string;
  postedTime: string;
  isLiked?: boolean;
}

const BookCard = ({
  title,
  author,
  course,
  condition,
  price,
  type,
  owner,
  image,
  postedTime,
  isLiked = false
}: BookCardProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "sell": return "bg-primary text-primary-foreground";
      case "lend": return "bg-accent text-accent-foreground";
      case "exchange": return "bg-success text-success-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case "New": return "text-success";
      case "Like New": return "text-accent";
      case "Good": return "text-warning";
      case "Fair": return "text-muted-foreground";
      default: return "text-muted-foreground";
    }
  };

  return (
    <Card className="group hover:shadow-book transition-all duration-300 cursor-pointer overflow-hidden">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <Heart 
            className={`h-5 w-5 cursor-pointer transition-colors ${
              isLiked ? "fill-destructive text-destructive" : "text-white hover:text-destructive"
            }`}
          />
        </div>
        <Badge className={`absolute top-3 left-3 ${getTypeColor(type)}`}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Badge>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">by {author}</p>
        
        {course && (
          <Badge variant="outline" className="mb-2 text-xs">
            {course}
          </Badge>
        )}

        <div className="flex items-center justify-between mb-3">
          <span className={`text-sm font-medium ${getConditionColor(condition)}`}>
            {condition}
          </span>
          {price && (
            <span className="text-lg font-bold text-primary">
              ${price}
            </span>
          )}
        </div>

        <div className="flex items-center text-xs text-muted-foreground mb-3">
          <User className="h-3 w-3 mr-1" />
          <span className="mr-3">{owner}</span>
          <Clock className="h-3 w-3 mr-1" />
          <span>{postedTime}</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button className="flex-1" size="sm">
          <MessageCircle className="h-4 w-4 mr-2" />
          Contact
        </Button>
        <Button variant="outline" size="sm">
          <BookOpen className="h-4 w-4 mr-2" />
          Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;