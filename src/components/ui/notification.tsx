"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

export interface NotificationProps {
  type: 'success' | 'error';
  title: string;
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const Notification = ({ 
  type, 
  title, 
  message, 
  isVisible, 
  onClose, 
  duration = 5000 
}: NotificationProps) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev - (100 / (duration / 100));
        if (newProgress <= 0) {
          onClose();
          return 0;
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isVisible, duration, onClose]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: -100, 
      scale: 0.8,
      rotateX: -90
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        duration: 0.6
      }
    },
    exit: { 
      opacity: 0, 
      y: -50, 
      scale: 0.9,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        delay: 0.2,
        type: "spring" as const,
        stiffness: 400,
        damping: 25
      }
    }
  };

  const progressVariants = {
    hidden: { width: "100%" },
    visible: { 
      width: `${progress}%`,
      transition: {
        duration: 0.1,
        ease: "linear" as const
      }
    }
  };

  const config = {
    success: {
      bgColor: "bg-gradient-to-r from-emerald-50 to-green-50",
      borderColor: "border-emerald-200",
      iconColor: "text-emerald-500",
      progressColor: "bg-emerald-400",
      textColor: "text-emerald-800",
      icon: CheckCircle,
      shadowColor: "shadow-emerald-100"
    },
    error: {
      bgColor: "bg-gradient-to-r from-red-50 to-rose-50",
      borderColor: "border-red-200",
      iconColor: "text-red-500",
      progressColor: "bg-red-400",
      textColor: "text-red-800",
      icon: XCircle,
      shadowColor: "shadow-red-100"
    }
  };

  const currentConfig = config[type];
  const Icon = currentConfig.icon;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`
            fixed top-6 right-6 z-50 max-w-md w-full
            ${currentConfig.bgColor} ${currentConfig.borderColor} ${currentConfig.shadowColor}
            border-2 rounded-xl shadow-2xl backdrop-blur-sm
            overflow-hidden
          `}
          style={{
            perspective: "1000px"
          }}
        >
          {/* Progress bar */}
          <div className="absolute top-0 left-0 h-1 bg-gray-200 w-full">
            <motion.div
              variants={progressVariants}
              initial="hidden"
              animate="visible"
              className={`h-full ${currentConfig.progressColor} rounded-r-full`}
            />
          </div>

          <div className="p-6 pt-8">
            <div className="flex items-start space-x-4">
              {/* Icon */}
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                className={`
                  flex-shrink-0 w-12 h-12 rounded-full 
                  bg-white/80 backdrop-blur-sm
                  flex items-center justify-center
                  shadow-lg
                `}
              >
                <Icon className={`w-6 h-6 ${currentConfig.iconColor}`} />
              </motion.div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <motion.h3 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className={`text-lg font-bold ${currentConfig.textColor} mb-1`}
                >
                  {title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className={`text-sm ${currentConfig.textColor} opacity-90 leading-relaxed`}
                >
                  {message}
                </motion.p>
              </div>

              {/* Close button */}
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                onClick={onClose}
                className={`
                  flex-shrink-0 w-8 h-8 rounded-full
                  bg-white/60 hover:bg-white/80
                  flex items-center justify-center
                  transition-all duration-200
                  hover:scale-110 active:scale-95
                  ${currentConfig.textColor}
                `}
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-2 -right-2 w-20 h-20 bg-white/10 rounded-full blur-xl" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 rounded-full blur-lg" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;