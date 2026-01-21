import React, { useState } from "react";
import { motion } from "motion/react";

const ERROR_IMG_SRC =
  "https://i.pinimg.com/736x/46/a9/31/46a93147868a427701e912d5a66dc4b7.jpg"; // fallback картинка
const FALLBACK_BG = "https://i.pinimg.com/736x/46/a9/31/46a93147868a427701e912d5a66dc4b7.jpg/images/my-fallback.jpg"; // твое фоновое изображение (положи в public/images)

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false);

  const handleError = () => setDidError(true);

  const { src, alt, style, className, ...rest } = props;

  return didError ? (
    <motion.div
      className={`inline-block bg-[url('${FALLBACK_BG}')] bg-cover bg-center text-center align-middle ${className ?? ""}`}
      style={style}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center justify-center w-full h-full p-2">
        <motion.img
          src={ERROR_IMG_SRC}
          alt="Error loading image"
          {...rest}
          data-original-url={src}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </div>
    </motion.div>
  ) : (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      style={style}
      {...rest}
      onError={handleError}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    />
  );
}
