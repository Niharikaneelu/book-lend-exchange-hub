export const mockBooks = [
  {
    id: "1",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    course: "CS 101",
    condition: "Like New" as const,
    price: 85,
    type: "sell" as const,
    owner: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=500&fit=crop",
    postedTime: "2 hours ago",
    isLiked: true
  },
  {
    id: "2",
    title: "Organic Chemistry",
    author: "Paula Yurkanis Bruice",
    course: "CHEM 201",
    condition: "Good" as const,
    type: "lend" as const,
    owner: "Mike Johnson",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=500&fit=crop",
    postedTime: "5 hours ago",
    isLiked: false
  },
  {
    id: "3",
    title: "Calculus: Early Transcendentals",
    author: "James Stewart",
    course: "MATH 151",
    condition: "New" as const,
    price: 120,
    type: "sell" as const,
    owner: "Emma Davis",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=500&fit=crop",
    postedTime: "1 day ago",
    isLiked: false
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    course: "ENG 202",
    condition: "Fair" as const,
    type: "exchange" as const,
    owner: "Alex Rodriguez",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop",
    postedTime: "3 days ago",
    isLiked: true
  },
  {
    id: "5",
    title: "Physics for Engineers",
    author: "Raymond A. Serway",
    course: "PHYS 101",
    condition: "Good" as const,
    price: 95,
    type: "sell" as const,
    owner: "Jessica Liu",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    postedTime: "1 week ago",
    isLiked: false
  },
  {
    id: "6",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    condition: "Like New" as const,
    type: "lend" as const,
    owner: "David Kim",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=500&fit=crop",
    postedTime: "2 days ago",
    isLiked: false
  }
];

export const mockRequests = [
  {
    id: "1",
    bookTitle: "Introduction to Algorithms",
    requester: "John Smith",
    owner: "Sarah Chen",
    type: "buy",
    status: "pending",
    requestTime: "2 hours ago",
    message: "Hi! I'm interested in buying this book. Is the price negotiable?"
  },
  {
    id: "2",
    bookTitle: "Organic Chemistry",
    requester: "Maria Garcia",
    owner: "You",
    type: "borrow",
    status: "approved",
    requestTime: "1 day ago",
    message: "Could I borrow this for the semester? I'll take good care of it."
  },
  {
    id: "3",
    bookTitle: "Physics for Engineers",
    requester: "You",
    owner: "Jessica Liu",
    type: "buy",
    status: "rejected",
    requestTime: "3 days ago",
    message: "Looking to buy this book for next semester."
  }
];

export const mockTransactions = [
  {
    id: "1",
    bookTitle: "Calculus: Early Transcendentals",
    otherParty: "Emma Davis",
    type: "purchased",
    amount: 120,
    date: "2024-01-15",
    status: "completed"
  },
  {
    id: "2",
    bookTitle: "The Great Gatsby",
    otherParty: "David Kim",
    type: "borrowed",
    dueDate: "2024-02-28",
    date: "2024-01-10",
    status: "active"
  },
  {
    id: "3",
    bookTitle: "Chemistry Lab Manual",
    otherParty: "Alex Chen",
    type: "exchanged",
    date: "2024-01-08",
    status: "completed"
  }
];