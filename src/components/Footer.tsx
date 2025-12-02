import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-muted-foreground">
            Designed & Built by{" "}
            <a
              href="https://github.com/Arin8830"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Arin Saynere
            </a>
          </p>
          <p className="font-mono text-xs text-muted-foreground/60">
            © 2024 All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;