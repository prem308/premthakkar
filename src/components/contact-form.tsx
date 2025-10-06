import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail } from "lucide-react";

interface ContactFormProps {
  email: string;
  name: string;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function ContactForm({ email, name, children, open: controlledOpen, onOpenChange: controlledOnOpenChange }: ContactFormProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setIsOpen = controlledOnOpenChange || setInternalOpen;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("Contact from Portfolio");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;

    window.open(mailtoUrl);
    toast.success("Email client opened!");

    setFormData({ name: "", email: "", message: "" });
    setIsOpen(false);
  };

  const handleDirectEmail = () => {
    window.open(`mailto:${email}`);
    setIsOpen(false);
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Get in Touch</DialogTitle>
          <DialogDescription>
            Send me a message and I'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              placeholder="Your message..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={5}
              required
            />
          </div>
          <div className="flex gap-3 pt-2">
            <Button
              type="submit"
              className="flex-1"
              disabled={!isFormValid}
            >
              Send Message
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={handleDirectEmail}
              className="flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Email directly
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
