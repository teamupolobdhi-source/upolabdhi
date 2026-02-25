import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  from: "user" | "bot";
  text: string;
}

const faq: Record<string, string> = {
  team: "We're Upolobdhi — a 4-member dev team specializing in React, Node.js, Kotlin, ML, Full Stack, and Mobile App development.",
  services: "We offer web development, mobile apps, ML solutions, UI/UX design, cloud solutions, and DevOps services.",
  projects: "Check out our Projects page! We've built e-commerce platforms, healthcare systems, and fintech apps.",
  hiring: "Visit our Contact page or email us at team.upolobdhi@gmail.com.",
  contact: "You can reach us at team.upolobdhi@gmail.com or visit our Contact page.",
  skills: "Our expertise includes React, Express, Node.js, Kotlin, Python, Pandas, Machine Learning, MERN Stack, Java, and more!",
  upolobdhi: "Upolobdhi is a passionate team of 4 developers building scalable digital solutions with modern technologies.",
};

const getBotReply = (msg: string): string => {
  const lower = msg.toLowerCase();
  for (const [key, val] of Object.entries(faq)) {
    if (lower.includes(key)) return val;
  }
  return "Thanks for your message! For detailed inquiries, please use our contact form or email us at team.upolobdhi@gmail.com.";
};

const ChatButton = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Hi! 👋 I'm the Upolobdhi assistant. Ask me about our team, skills, services, or projects!" },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Message = { from: "user", text: input };
    const botMsg: Message = { from: "bot", text: getBotReply(input) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {!open && (
        <>
          <a
            href="https://wa.me/917047283086?text=Hi%20Upolobdhi%20team%2C%20I%20want%20to%20discuss%20a%20project."
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with Upolobdhi on WhatsApp"
            className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary" fill="currentColor" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-8.7 14.93L2 22l5.2-1.36A10 10 0 1 0 12 2Zm0 18.18a8.15 8.15 0 0 1-4.15-1.13l-.3-.18-3.08.8.82-3-.2-.31A8.18 8.18 0 1 1 12 20.18Zm4.49-5.95c-.25-.13-1.48-.73-1.71-.82-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.24-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.38.11-.51.11-.11.25-.3.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.57-1.38-.78-1.9-.21-.5-.42-.43-.57-.44l-.49-.01c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.6.13.17 1.77 2.7 4.29 3.78.6.26 1.06.42 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.19.21-.59.21-1.09.15-1.19-.06-.1-.23-.17-.48-.3Z" />
            </svg>
          </a>

          <a
            href="tel:+917047283086"
            aria-label="Call Upolobdhi"
            className="fixed bottom-40 right-6 z-50 w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Phone className="h-5 w-5 text-primary" />
          </a>
        </>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-bg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        {open ? <X className="h-5 w-5 text-primary-foreground" /> : <MessageCircle className="h-5 w-5 text-primary-foreground" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            style={{ maxHeight: "60vh" }}
          >
            <div className="gradient-bg p-4">
              <h3 className="font-display font-semibold text-primary-foreground">Upolobdhi Chat</h3>
              <p className="text-xs text-primary-foreground/70">Ask us anything!</p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px]">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm ${
                    m.from === "user"
                      ? "gradient-bg text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-border flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Type a message..."
                className="bg-secondary text-sm rounded-full"
              />
              <Button size="icon" onClick={send} className="gradient-bg text-primary-foreground shrink-0 rounded-full">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatButton;
