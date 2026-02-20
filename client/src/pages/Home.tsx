import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Music2, ArrowDown } from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FloatingElement } from "@/components/FloatingElement";
import { MusicPlayer } from "@/components/MusicPlayer";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  const [showSuccess, setShowSuccess] = useState(false);
  const reasonsRef = useRef<HTMLDivElement>(null);
  const questionRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
const playMusic = () => {
  if (audioRef.current) {
    audioRef.current.play();
  }
};
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleYesClick = () => {
    setShowSuccess(true);
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const random = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults, 
        particleCount,
        origin: { x: random(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults, 
        particleCount,
        origin: { x: random(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <MusicPlayer />
      
      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <FloatingElement className="absolute top-20 left-10 text-pink-300 opacity-50" delay={0}>
          <Heart className="w-16 h-16 fill-pink-300" />
        </FloatingElement>
        <FloatingElement className="absolute top-40 right-20 text-pink-200 opacity-60" delay={2}>
          <Music2 className="w-24 h-24" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-32 left-32 text-red-200 opacity-40" delay={4}>
          <Heart className="w-32 h-32 fill-red-200" />
        </FloatingElement>
        <FloatingElement className="absolute top-1/2 right-10 text-yellow-200 opacity-60" delay={1}>
          <Sparkles className="w-12 h-12" />
        </FloatingElement>
      </div>

      <AnimatePresence mode="wait">
        {!showSuccess ? (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            {/* HERO SECTION */}
            <section className="min-h-screen flex flex-col items-center justify-center relative px-4 text-center z-10">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="mb-8"
              >
                <div className="relative inline-block">
                  <span className="text-6xl md:text-8xl filter drop-shadow-md">🎵</span>
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-4 -right-4"
                  >
                    <span className="text-4xl">✨</span>
                  </motion.div>
                </div>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-display text-primary mb-6 drop-shadow-sm leading-tight"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
               Speically For My <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">
                  Kuchupuchuu
                </span>
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground font-handwriting max-w-2xl mx-auto mb-12"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Life is better with my babygurl 🎀🌸💗✨ Than lets gooo....
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="rounded-full text-lg px-8 py-6 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-xl shadow-pink-200"
                  onClick={() => scrollToSection(reasonsRef)}
                >
                  Start Here 💖
                  <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
                </Button>
              </motion.div>
            </section>

            <SectionDivider />

            {/* REASONS SECTION */}
            <section ref={reasonsRef} className="min-h-screen bg-white py-24 px-4 relative z-10 flex flex-col items-center">
              <div className="max-w-6xl mx-auto w-full">
                <motion.h2 
                  className="text-4xl md:text-6xl font-display text-center text-primary mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Why I love our friendship...
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  {[
                    {
                      emoji: "❤️",
                      title: "The way you love",
                      desc: "No body can love me the way u love me and take care of mee!!.",
                      color: "bg-pink-50"
                    },
                    {
                      emoji: "🎀",
                      title: "Late Night Talks",
                      desc: "Those late night rants and tea spilling sessions that sometimes end up with some deep conversations.",
                      color: "bg-rose-50"
                    },
                    {
                      emoji: "😉",
                      title: "Only Minee!!😏",
                      desc: "You are onlyy mineee no, I am not ready to share you with anyoneeee!! not even your close oness.",
                      color: "bg-red-50"
                    },
                    {
                      emoji: "🥰",
                      title: "Always Being There",
                      desc: "Nobody can do it better than my that babygurl like she is always there for mee no matter what where and whenn!!.",
                      color: "bg-orange-50"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ y: -10 }}
                    >
                      <Card className={`h-full p-8 border-none shadow-lg ${item.color} rounded-3xl overflow-hidden relative group`}>
                        <div className="absolute -right-8 -top-8 text-9xl opacity-10 group-hover:opacity-20 transition-opacity select-none">
                          {item.emoji}
                        </div>
                        <div className="text-6xl mb-6">{item.emoji}</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-display">
                          {item.title}
                        </h3>
                        <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                          {item.desc}
                        </p>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="outline"
                      size="lg"
                      className="rounded-full text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                      onClick={() => scrollToSection(questionRef)}
                    >
                      One more thing...
                    </Button>
                  </motion.div>
                </div>
              </div>
            </section>

            <SectionDivider flip />

            {/* QUESTION SECTION */}
            <section ref={questionRef} className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20 z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="text-center max-w-4xl mx-auto"
              >
                <h2 className="text-5xl md:text-7xl font-display text-primary mb-12 drop-shadow-md">
                  So...Promise that you are only minee!?
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 h-40">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button 
                      size="lg"
                      className="text-2xl px-12 py-8 rounded-full bg-green-500 hover:bg-green-600 shadow-xl shadow-green-200 font-bold tracking-wide"
                      onClick={handleYesClick}
                    >
                      YES, obviously!
                    </Button>
                  </motion.div>

                  <EvasiveButton />
                </div>
              </motion.div>
            </section>
          </motion.div>
        ) : (
          <SuccessView />
        )}
      </AnimatePresence>
    </div>
  );
}

function EvasiveButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoverCount, setHoverCount] = useState(0);

  const moveButton = () => {
    const newX = Math.random() * 300 - 150;
    const newY = Math.random() * 300 - 150;
    setPosition({ x: newX, y: newY });
    setHoverCount(prev => prev + 1);
  };

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative"
    >
      <Button 
        variant="destructive"
        size="lg"
        className="text-2xl px-12 py-8 rounded-full shadow-xl opacity-80"
        onMouseEnter={moveButton}
        onClick={moveButton}
      >
        {hoverCount > 3 ? "Catch me!" : "No"}
      </Button>
    </motion.div>
  );
}

function SuccessView() {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 to-white text-center px-4 z-20"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8 text-8xl md:text-9xl"
      >
        🎉
      </motion.div>

      <motion.h1 
        className="text-6xl md:text-8xl font-display text-primary mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        YAAAYYYY!!!!
      </motion.h1>

      <motion.div 
        className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-xl border-2 border-pink-100 max-w-2xl w-full"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 font-display">
          Lets Go On A Date!!.
        </h2>

        <div className="space-y-6 text-xl md:text-2xl text-left pl-4 md:pl-12">
          <motion.div 
            className="flex items-center gap-4"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="text-3xl">🗓️</span>
            <div>
              <span className="font-bold text-primary">When:</span>
              <span className="ml-2 text-gray-600">Whenever you want jaanemann</span>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-center gap-4"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            <span className="text-3xl">📍</span>
            <div>
              <span className="font-bold text-primary">Where:</span>
              <span className="ml-2 text-gray-600">Jaha Ap Boloo Madamm!🩷</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.p 
        className="mt-12 text-2xl md:text-3xl text-primary/80 font-handwriting font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        I like being there with you, beside you, forever with you and I LOVE YOU THE MOST!! 💖
      </motion.p>
    </motion.div>
  );
}
