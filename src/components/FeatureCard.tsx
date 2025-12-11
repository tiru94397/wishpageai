import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative p-6 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/20 shadow-lg transition-all duration-300"
      style={{
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.05)"
      }}
    >
      {/* Gold glow */}
      <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500" 
        style={{
          background: "radial-gradient(600px circle at 50% 50%, rgba(212, 175, 55, 0.1), transparent 40%)"
        }}
      />
      
      <div className="relative z-10 flex items-start gap-4">
        {/* Icon container with gold gradient - smaller for mobile */}
        <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 shadow-lg">
          <Icon className="w-6 h-6 text-white" strokeWidth={2} />
        </div>
        
        <div className="flex-1">
          <h3 className="mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}