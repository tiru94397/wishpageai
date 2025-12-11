import { motion } from "motion/react";

interface TemplateCardProps {
  imageUrl: string;
  title: string;
  delay?: number;
}

export function TemplateCard({ imageUrl, title, delay = 0 }: TemplateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative rounded-2xl overflow-hidden bg-white shadow-lg transition-all duration-300 flex-shrink-0 w-64"
      style={{
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)"
      }}
    >
      {/* Gold border glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" 
        style={{
          background: "linear-gradient(135deg, rgba(212, 175, 55, 0.4), rgba(255, 215, 0, 0.4))",
          padding: "2px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude"
        }}
      />
      
      {/* Image */}
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Title */}
      <div className="p-4 bg-white">
        <p className="text-gray-900 text-sm text-center">{title}</p>
      </div>
    </motion.div>
  );
}