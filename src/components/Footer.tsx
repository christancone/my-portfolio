import { Flex, IconButton, SmartLink, Text } from "@/once-ui/components";
import { person, social } from "@/app/resources/content";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      position="relative"
      fillWidth
      padding="8"
      horizontal="center"
      mobileDirection="column"
    >
      <Flex
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="space-between"
        vertical="center"
      >
        <Text 
          variant="body-default-s" 
          onBackground="neutral-strong"
          className={styles.copyright}
        >
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4" className={styles.name}>{person.name}</Text>
          <Text onBackground="neutral-weak" className={styles.rights}>
            / All Rights Reserved{" "}
          </Text>
        </Text>
        <Flex gap="16" className={styles.socialLinks}>
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                  className={styles.socialButton}
                />
              ),
          )}
        </Flex>
      </Flex>
      <Flex height="80" show="s"></Flex>
    </Flex>
  );
};
