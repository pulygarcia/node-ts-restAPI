type Category = 
  | "Programming"
  | "Technology"
  | "Health"
  | "Travel"
  | "Food"
  | "Education"
  | "Lifestyle"
  | "Finance"
  | "Sports"
  | "Entertainment";


export interface Post{
    id: number;
    title: string;
    content: string;
    author: string;
    createdAt: Date;
    category: Category;
    comments?: Comment[];
}

interface Comment{
    id: number;
    author: string;
    content: string;
    createdAt: Date;
}

export const posts: Post[] = [
    {
        id: 1,
        title: "Introduction to TypeScript",
        content: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript...",
        author: "John Doe",
        createdAt: new Date("2024-06-01T10:00:00Z"),
        category: "Programming",
        comments: [
          {
            id: 1,
            author: "Jane Smith",
            content: "Great introduction to TypeScript! Very helpful.",
            createdAt: new Date("2024-06-02T12:00:00Z"),
          },
          {
            id: 2,
            author: "Bob Johnson",
            content: "I found this article very informative, thanks!",
            createdAt: new Date("2024-06-02T14:00:00Z"),
          },
        ]
    },
    {
        id: 2,
        title: "Advanced TypeScript Tips",
        content: "In this article, we will explore some advanced features of TypeScript...",
        author: "Alice Brown",
        createdAt: new Date("2024-06-10T09:00:00Z"),
        category: "Programming",
        comments: [
            {
                id: 3,
                author: "Charlie Davis",
                content: "These tips really helped me improve my TypeScript skills.",
                createdAt: new Date("2024-06-11T10:30:00Z")
            }
        ]
    },
    {
      id: 5,
      title: "Understanding Asynchronous JavaScript",
      content: "Asynchronous programming is crucial for modern web development...",
      author: "Ivy Clark",
      createdAt: new Date("2024-06-12T07:00:00Z"),
      category: "Programming",
      comments: [
          {
              id: 6,
              author: "Jack Walker",
              content: "A very detailed and easy-to-understand article.",
              createdAt: new Date("2024-06-13T11:30:00Z")
          }
      ]
  },
]