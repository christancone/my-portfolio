import React from "react";
import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Grid,
  Icon,
  Tag,
  Badge,
} from "@/once-ui/components";

import { baseURL } from "@/app/resources";
import { home, about, person, kirk, services } from "@/app/resources/content";
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

export default function Home() {
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

      {/* Hero */}
      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="s" paddingX="s">
          {kirk.display && (
            <RevealFx fillWidth horizontal="start" paddingBottom="m">
              <Badge
                title={`Building ${kirk.name} · kirkreservations.lk`}
                href={kirk.url}
                icon="rocket"
                arrow
              />
            </RevealFx>
          )}
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
            <Flex gap="12" wrap vertical="center">
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
              {about.calendar.display && (
                <Button
                  data-border="rounded"
                  href={about.calendar.link}
                  variant="tertiary"
                  size="m"
                  prefixIcon="calendar"
                >
                  Schedule a call
                </Button>
              )}
            </Flex>
          </RevealFx>
        </Column>
      </Column>

      {/* Featured venture — Kirk */}
      {kirk.display && (
        <RevealFx translateY="16" delay={0.5} fillWidth>
          <Flex
            fillWidth
            direction="column"
            background="surface"
            border="neutral-medium"
            radius="l"
            padding="xl"
            gap="l"
          >
            <Flex fillWidth horizontal="space-between" vertical="center" gap="16" wrap>
              <Flex gap="16" vertical="center" wrap>
                <img
                  src={kirk.logo}
                  alt={`${kirk.name} logo`}
                  style={{ height: "44px", width: "auto" }}
                />
                <Text variant="heading-default-m" onBackground="neutral-weak">
                  {kirk.tagline}
                </Text>
              </Flex>
              <Tag variant="brand" size="m" prefixIcon="sparkles">
                {kirk.status}
              </Tag>
            </Flex>

            <Text variant="body-default-l" onBackground="neutral-medium">
              {kirk.description}
            </Text>

            <Flex gap="8" wrap>
              {kirk.stack.map((tech) => (
                <Tag key={tech} size="m" variant="neutral">
                  {tech}
                </Tag>
              ))}
            </Flex>

            <Flex>
              <Button
                href={kirk.url}
                variant="primary"
                size="m"
                data-border="rounded"
                suffixIcon="arrowUpRight"
              >
                Visit kirkreservations.lk
              </Button>
            </Flex>
          </Flex>
        </RevealFx>
      )}

      {/* What I can do for you */}
      {services.display && (
        <RevealFx translateY="16" delay={0.6} fillWidth>
          <Column fillWidth gap="l">
            <Column maxWidth="s" gap="8">
              <Heading as="h2" variant="display-strong-s">
                {services.title}
              </Heading>
              <Text variant="body-default-l" onBackground="neutral-weak">
                {services.description}
              </Text>
            </Column>
            <Grid columns="3" tabletColumns="2" mobileColumns="1" gap="16" fillWidth>
              {services.items.map((service) => (
                <Flex
                  key={service.title}
                  direction="column"
                  gap="12"
                  background="surface"
                  border="neutral-medium"
                  radius="l"
                  padding="l"
                  fillWidth
                >
                  <Icon name={service.icon} size="m" onBackground="brand-medium" />
                  <Text variant="heading-strong-m">{service.title}</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {service.description}
                  </Text>
                </Flex>
              ))}
            </Grid>
          </Column>
        </RevealFx>
      )}

      {/* Research highlight */}
      {about.research.display && about.research.items.length > 0 && (
        <RevealFx translateY="16" delay={0.7} fillWidth>
          <Flex
            fillWidth
            direction="column"
            background="surface"
            border="neutral-medium"
            radius="l"
            padding="xl"
            gap="m"
          >
            <Flex gap="12" vertical="center">
              <Icon name="beaker" size="m" onBackground="brand-medium" />
              <Text variant="label-strong-s" onBackground="brand-medium">
                {about.research.title}
              </Text>
            </Flex>
            <Heading as="h2" variant="display-strong-s" wrap="balance">
              {about.research.items[0].title}
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {about.research.items[0].description}
            </Text>
            <Flex paddingTop="8">
              <Button href="/about" variant="tertiary" size="m" suffixIcon="arrowRight">
                More about my work
              </Button>
            </Flex>
          </Flex>
        </RevealFx>
      )}
    </Column>
  );
}
