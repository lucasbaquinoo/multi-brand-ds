import { useTheme } from "@emotion/react";
import { HeaderLogo, Menu } from "ui";

export default function Web() {
  const theme = useTheme();
  return (
    <>
      <Menu>
        <Menu.Logo>
          <HeaderLogo colorTravel={theme.color.primary} />
        </Menu.Logo>
        <Menu.Item id="home" isActive>
          Home
        </Menu.Item>
        <Menu.Item id="story">Story</Menu.Item>
        <Menu.Item id="gallery">Gallery</Menu.Item>
        <Menu.Item id="contact-us">Contact Us</Menu.Item>
      </Menu>
    </>
  );
}
