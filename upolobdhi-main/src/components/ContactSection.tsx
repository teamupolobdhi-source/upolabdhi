import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ContactSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-20">
          <p className="text-sm font-medium text-primary tracking-wide mb-3">Contact</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Get in touch.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4 font-light">
            Have a project in mind? Let's talk about how Upolobdhi can help bring it to life.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-md mx-auto"
        >
          <Button asChild className="gradient-bg text-primary-foreground w-full font-medium rounded-full h-12">
            <a href="mailto:team.upolobdhi@gmail.com?subject=Project%20Inquiry&body=Hi%20Upolobdhi%20Team,%0D%0A%0D%0A">
              <Send className="h-4 w-4 mr-2" /> Send Message
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
