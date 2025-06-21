"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@/once-ui/components";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  return (
    <Column fillWidth gap="m" className={styles.projectCard}>
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        images={images.map((image) => ({
          src: image,
          alt: title,
        }))}
        className={styles.carousel}
      />
      <Flex
        mobileDirection="column"
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
        className={styles.content}
      >
        {title && (
          <Flex flex={5} className={styles.titleContainer}>
            <Heading 
              as="h2" 
              wrap="balance" 
              variant="heading-strong-xl"
              className={styles.title}
            >
              {title}
            </Heading>
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16" className={styles.details}>
            {avatars?.length > 0 && (
              <AvatarGroup 
                avatars={avatars} 
                size="m" 
                reverse 
                className={styles.avatars}
              />
            )}
            {description?.trim() && (
              <Text 
                wrap="balance" 
                variant="body-default-s" 
                onBackground="neutral-weak"
                className={styles.description}
              >
                {description}
              </Text>
            )}
            <Flex gap="24" wrap className={styles.links}>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                  className={styles.link}
                >
                  <Text variant="body-default-s">Read case study</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                  className={styles.link}
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
