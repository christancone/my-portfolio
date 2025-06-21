import React from "react";
import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
} from "@/once-ui/components";

import { baseURL } from "@/app/resources";
import { home, about, person } from "@/app/resources/content";
import { getAllProjectImages } from "@/app/utils/getProjectImages";
import { Slideshow } from "@/components/Slideshow"; // 🔥 Make sure this path is correct
import styles from "./page.module.scss";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Home() {
  const slideshowImages = getAllProjectImages(); // ✅ Get images dynamically

  return (
    <Column maxWidth="m" gap="xl" horizontal="center" paddingX="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="s" paddingX="s">
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
            <Heading 
              wrap="balance" 
              variant="display-strong-l"
              className={styles.responsiveHeading}
            >
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
            <Text 
              wrap="balance" 
              onBackground="neutral-weak" 
              variant="heading-default-xl"
              className={styles.responsiveSubline}
            >
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4} horizontal="start">
            <Button
              id="about"
              data-border="rounded"
              href="/about"
              variant="secondary"
              size="m"
              arrowIcon
              className={styles.responsiveButton}
            >
              <Flex gap="8" vertical="center">
                {about.avatar.display && (
                  <Avatar
                    style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                <span className={styles.buttonText}>{about.title}</span>
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>

      {/* 🔥 Slideshow inserted here */}
      <RevealFx translateY="16" delay={0.6} fillWidth>
        <Slideshow images={slideshowImages} interval={3500} />
      </RevealFx>
    </Column>
  );
}
