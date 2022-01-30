import {
  FunctionComponent,
  useState,
  Children,
  PropsWithChildren,
  ReactElement,
  cloneElement,
} from "react";
import { MenuItem, MenuItemProps } from "./MenuItem";
import * as S from './Header.styles';
import { MenuLogo, MenuLogoProps } from "./MenuLogo";


interface MenuProps {
  Logo: FunctionComponent<MenuLogoProps>;
  Item: FunctionComponent<MenuItemProps>;
}

const Menu: FunctionComponent & MenuProps = ({ children, ...props }) => {
  const [activeTab, setActiveTab] = useState<string>();
  const MenuItemsArray = [] as ReactElement<PropsWithChildren<MenuItemProps>>[];
  let MenuLogoElement = {} as ReactElement<MenuLogoProps>;
  Children.map(children, child => {
    // Logo handler
    const logoItem = child as ReactElement<MenuLogoProps>;
    if (logoItem.type === MenuLogo) {
      MenuLogoElement = cloneElement(logoItem);
    }
    // MenuItem handler
    const item = child as ReactElement<PropsWithChildren<MenuItemProps>>;
    if (item.type === MenuItem) {
      const isActive = item.props.id === activeTab;
      const onClick = () => {
        setActiveTab(item.props.id);
        item.props.onClick?.();
      };
      const clonedElement = cloneElement(item, { isActive, onClick, key: item.props.id });
      MenuItemsArray.push(clonedElement);
    }
    // Another type of invalid child
    if (item.type !== MenuItem && item.type !== MenuLogo) {
      throw new Error(`Invalid child type. Expected <MenuItem /> or <HeaderLogo />.`);
    }
  });
  return (
    <S.Header>
      {MenuLogoElement}
      <S.MenuItems>
        {MenuItemsArray}
      </S.MenuItems>
    </S.Header>
  );
};

Menu.Logo = MenuLogo;
Menu.Item = MenuItem;

export { Menu };
