"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Flex, Column, Button, Text } from "@/once-ui/components";

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
    <Column gap="l" horizontal="center">
      <Text variant="heading-strong-l" wrap="balance" align="center">
        Take a look into my works
      </Text>

      <Flex fillWidth horizontal="center">
  <div
    style={{
      position: "relative",
      width: "1100px",
      maxWidth: "960px",
      height: "540px", // 16:9 aspect ratio
      borderRadius: "1rem",
      overflow: "hidden",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    }}
  >
    <Image
      src={images[index]}
      alt={`Slideshow Image ${index + 1}`}
      fill
      style={{ objectFit: "cover", transition: "0.5s ease-in-out" }}
    />
  </div>
</Flex>


      <Flex gap="1" horizontal="center">
        <Button size="s" variant="secondary" onClick={goPrev}>
          ⬅ Previous
        </Button>
        <Button size="s" variant="secondary" onClick={goNext}>
          Next ➡
        </Button>
      </Flex>
    </Column>
  );
};
