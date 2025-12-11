import { motion } from "motion/react";
import { Sparkles, Zap, Share2, Palette, Instagram, Youtube, MessageCircle, ArrowRight } from "lucide-react";
import { FeatureCard } from "./components/FeatureCard";
import { TemplateCard } from "./components/TemplateCard";

export default function App() {
  const templates = [
    {
      title: "Birthday Classic",
      imageUrl: "https://images.unsplash.com/photo-1715281007002-0c6951203c55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNlbGVicmF0aW9uJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY1NDM3Mzg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Luxury Gold Birthday",
      imageUrl: "https://images.unsplash.com/photo-1745573673933-f9bc4da7a485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnb2xkJTIwcGFydHl8ZW58MXx8fHwxNzY1NDUxNDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Best Friend Birthday",
      imageUrl: "https://images.unsplash.com/photo-1647905555465-0f9004fbdaed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzaGlwJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY1NDAyOTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Kids Birthday",
      imageUrl: "https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYmlydGhkYXklMjBwYXJ0eXxlbnwxfHx8fDE3NjUzNTg2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Anniversary",
      imageUrl: "https://images.unsplash.com/photo-1579031883349-23bef9646559?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGFubml2ZXJzYXJ5JTIwY291cGxlfGVufDF8fHx8MTc2NTQ1MTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Lover Birthday",
      imageUrl: "https://images.unsplash.com/photo-1636194623117-e354471719b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGJpcnRoZGF5JTIwbG92ZXxlbnwxfHx8fDE3NjU0NTE0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Wedding Congratulations",
      imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY1Mzg3NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Farewell",
      imageUrl: "https://images.unsplash.com/photo-1653515906732-5fa2d473c88c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJld2VsbCUyMGdvb2RieWUlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjU0NTE0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Promotion / Achievement",
      imageUrl: "https://images.unsplash.com/photo-1758518731027-78a22c8852ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2hpZXZlbWVudCUyMHN1Y2Nlc3MlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjU0MTM3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Diwali Festival",
      imageUrl: "https://images.unsplash.com/photo-1608865413696-fb1e4220173f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXdhbGklMjBmZXN0aXZhbCUyMGxpZ2h0c3xlbnwxfHx8fDE3NjU0NTE0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Christmas Celebration",
      imageUrl: "https://images.unsplash.com/photo-1571070201512-fd08ca89a23b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RtYXMlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjU0MjI5MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Thank You / Appreciation",
      imageUrl: "https://images.unsplash.com/photo-1624811531417-f29437fed1ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGFuayUyMHlvdSUyMGZsb3dlcnN8ZW58MXx8fHwxNzY1NDUxNDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Minimal Mobile Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 px-6 py-6"
      >
        <div className="flex items-center justify-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl tracking-tight text-gray-900">WishPage AI</span>
        </div>
      </motion.header>

      {/* Hero Section - Mobile First */}
      <section className="relative z-10 px-6 pt-8 pb-16">
        <div className="text-center max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* AI Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-yellow-200/50 mb-6 shadow-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-yellow-600" />
              <span className="text-sm text-gray-700">Powered by AI</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl tracking-tight text-gray-900 mb-4">
              WishPage AI
            </h1>
            
            {/* Subtext */}
            <p className="text-lg text-gray-600 mb-10 leading-relaxed px-4">
              Create Stunning Digital Wishes in Seconds.
            </p>

            {/* Vertical Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative max-w-xs mx-auto mb-10"
            >
              {/* Glow behind phone */}
              <div className="absolute -inset-4 bg-gradient-to-b from-yellow-400/30 via-yellow-500/20 to-transparent rounded-[3rem] blur-2xl" />
              
              {/* Phone frame */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-black p-3">
                <div className="relative rounded-[2rem] overflow-hidden bg-white">
                  <img 
                    src="https://images.unsplash.com/photo-1727159939129-fe1d6ba9724f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd2lzaCUyMGNhcmQlMjBiaXJ0aGRheSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2NTQ1MTIxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                    alt="Digital wish page preview"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/5 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-4 mb-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full max-w-sm px-8 py-5 rounded-2xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white shadow-2xl transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  Create Wish
                  <ArrowRight className="w-5 h-5" />
                </span>
              </motion.button>
              
              {/* Small redirect text */}
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span>Redirects to</span>
                <MessageCircle className="w-4 h-4 text-green-600" />
                <span className="text-gray-700">WhatsApp</span>
                <span>&</span>
                <Instagram className="w-4 h-4 text-pink-600" />
                <span className="text-gray-700">Instagram DM</span>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full max-w-sm px-8 py-5 rounded-2xl bg-white/60 backdrop-blur-sm border-2 border-gray-200 text-gray-900 transition-all duration-300"
              >
                View Templates
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Stacked Cards */}
      <section className="relative z-10 px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl tracking-tight text-gray-900 mb-3">Everything You Need</h2>
          <p className="text-base text-gray-600">Create, customize, and share in minutes</p>
        </motion.div>

        <div className="max-w-lg mx-auto space-y-4">
          <FeatureCard
            icon={Zap}
            title="Instant Page Generation"
            description="Create beautiful wish pages in 5 seconds."
            delay={0}
          />
          <FeatureCard
            icon={Sparkles}
            title="AI Media Magic"
            description="Auto images, colours, animations."
            delay={0.1}
          />
          <FeatureCard
            icon={Share2}
            title="Share Anywhere"
            description="One link works on all platforms."
            delay={0.2}
          />
          <FeatureCard
            icon={Palette}
            title="Customization Suite"
            description="Themes, music, layouts, templates."
            delay={0.3}
          />
        </div>
      </section>

      {/* Templates Section - Horizontal Scroll */}
      <section id="templates" className="relative z-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 px-6"
        >
          <h2 className="text-4xl tracking-tight text-gray-900 mb-3">Premium Templates</h2>
          <p className="text-base text-gray-600">Handcrafted designs for every occasion</p>
        </motion.div>

        {/* Horizontal scrollable container */}
        <div className="overflow-x-auto pb-6 scrollbar-hide">
          <div className="flex gap-4 px-6" style={{ width: 'max-content' }}>
            {templates.map((template, index) => (
              <TemplateCard
                key={index}
                imageUrl={template.imageUrl}
                title={template.title}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-6 px-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span>View All Templates</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </section>

      {/* CTA Section - Mobile */}
      <section className="relative z-10 px-6 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto text-center relative rounded-3xl p-10 bg-white/40 backdrop-blur-xl border border-white/20 shadow-xl overflow-hidden"
        >
          {/* Subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-yellow-500/10" />
          
          <div className="relative z-10">
            <h2 className="text-3xl tracking-tight text-gray-900 mb-6">
              Ready to Create Your First Wish?
            </h2>
            
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-5 rounded-2xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white shadow-xl transition-all duration-300 mb-4"
            >
              <span className="flex items-center justify-center gap-2">
                Create Wish
                <ArrowRight className="w-5 h-5" />
              </span>
            </motion.button>

            {/* Social icons */}
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-green-600" />
                <span>WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-5 h-5 text-pink-600" />
                <span>Instagram</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Pricing Ribbon - Mobile */}
      <section id="pricing" className="relative z-10 px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto text-center rounded-2xl py-6 px-8 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow-lg"
        >
          <p className="text-white">Start Free • Premium Templates Available</p>
        </motion.div>
      </section>

      {/* Footer - Minimal Mobile */}
      <footer className="relative z-10 px-6 py-12 border-t border-gray-200 mt-12">
        <div className="max-w-lg mx-auto">
          {/* Brand */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl tracking-tight text-gray-900">WishPage AI</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">Home</a>
            <span>•</span>
            <a href="#templates" className="hover:text-gray-900 transition-colors">Templates</a>
            <span>•</span>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-500 flex items-center justify-center transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-500 flex items-center justify-center transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-500 flex items-center justify-center transition-all duration-300 group"
            >
              <Youtube className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-400">© 2025 WishPage AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
