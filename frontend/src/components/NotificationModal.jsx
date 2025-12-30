import { useEffect, useRef } from "react";
import { CloseIcon, DesignIcon, InfoIcon } from "./icons";

/**
 * NotificationModal Component
 * Displays contextual notifications positioned near the clicked element
 */
const NotificationModal = ({
  isOpen,
  onClose,
  title,
  message,
  type = "info",
  buttonRef,
}) => {
  const positionRef = useRef({ top: 0, left: 0 });

  useEffect(() => {
    if (buttonRef && buttonRef.current && isOpen) {
      const rect = buttonRef.current.getBoundingClientRect();
      positionRef.current = {
        top: rect.top - 230,
        left: rect.left + rect.width / 2,
      };
    }
  }, [buttonRef, isOpen]);

  if (!isOpen) return null;

  const getIcon = () => {
    switch (type) {
      case "design":
        return <DesignIcon className="w-8 h-8 text-pink-400" />;
      case "demo":
        return <InfoIcon className="w-8 h-8 text-blue-400" />;
      default:
        return <InfoIcon className="w-8 h-8 text-gray-400" />;
    }
  };

  return (
    <div
      className="fixed z-[70] w-max max-w-md"
      style={{
        top: `${positionRef.current.top}px`,
        left: `${positionRef.current.left}px`,
        transform: "translateX(-50%)",
      }}
    >
      <div className="relative bg-zinc-900 rounded-2xl border border-white/10 shadow-2xl animate-in fade-in duration-300 px-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 
                     flex items-center justify-center text-white/60 hover:text-white transition-all"
        >
          <CloseIcon className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">{getIcon()}</div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-white/70 leading-relaxed whitespace-pre-line">
                {message}
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white font-medium
                         transition-colors duration-200"
            >
              Got it!
            </button>
          </div>
        </div>

        {/* Arrow pointing down to buttons */}
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-6 bg-zinc-900 border-b border-r border-white/10 transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
