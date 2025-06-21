"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Flex, Column, Button, Text } from "@/once-ui/components";
import styles from "./Slideshow.module.scss";

interface SlideshowProps {
  images: string[];
  interval?: number;
}

export const Slideshow: React.FC<SlideshowProps> = ({ images, interval = 3000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  const goNext = () => setIndex((prev) => (prev + 1) % images.length);
  const goPrev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  if (!images.length) return null;

  return (
    <Column gap="l" horizontal="center" fillWidth>
      <Text 
        variant="heading-strong-l" 
        wrap="balance" 
        align="center"
        className={styles.slideshowTitle}
      >
        Take a look into my works
      </Text>

      <Flex fillWidth horizontal="center" paddingX="s">
        <div className={styles.slideshowContainer}>
          <Image
            src={images[index]}
            alt={`Slideshow Image ${index + 1}`}
            fill
            style={{ objectFit: "cover", transition: "0.5s ease-in-out" }}
          />
        </div>
      </Flex>

      <Flex gap="m" horizontal="center" className={styles.buttonContainer}>
        <Button 
          size="s" 
          variant="secondary" 
          onClick={goPrev}
          className={styles.navButton}
        >
          ⬅ Previous
        </Button>
        <Button 
          size="s" 
          variant="secondary" 
          onClick={goNext}
          className={styles.navButton}
        >
          Next ➡
        </Button>
      </Flex>
    </Column>
  );
};
