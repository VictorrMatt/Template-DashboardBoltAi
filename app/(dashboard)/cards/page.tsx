"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/layout/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/layout/dialog";
import { Input } from "@/components/ui/form/input";
import { Label } from "@/components/ui/form/label";
import { Button } from "@/components/ui/navigation/button";

const defaultCards = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A revolutionary new project",
    content: "This is a sample project card that can be edited.",
  },
  {
    id: 2,
    title: "Project Beta",
    description: "Innovation at its finest",
    content: "Another example of a customizable card.",
  },
];

export default function CardsPage() {
  const [cards, setCards] = useState(defaultCards);
  const [editingCard, setEditingCard] = useState(null);

  const handleSave = (id, newData) => {
    setCards(
      cards.map((card) => (card.id === id ? { ...card, ...newData } : card))
    );
    setEditingCard(null);
  };

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Cards</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Dialog key={card.id}>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{card.content}</p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Card</DialogTitle>
                <DialogDescription>
                  Make changes to your card here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    defaultValue={card.title}
                    onChange={(e) =>
                      setEditingCard({
                        ...editingCard,
                        title: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    defaultValue={card.description}
                    onChange={(e) =>
                      setEditingCard({
                        ...editingCard,
                        description: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="content">Content</Label>
                  <Input
                    id="content"
                    defaultValue={card.content}
                    onChange={(e) =>
                      setEditingCard({
                        ...editingCard,
                        content: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <Button onClick={() => handleSave(card.id, editingCard)}>
                Save changes
              </Button>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
