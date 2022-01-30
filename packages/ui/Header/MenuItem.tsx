import { FunctionComponent } from "react";
import * as S from './MenuItem.styles';

export interface MenuItemProps {
  id: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const MenuItem: FunctionComponent<MenuItemProps> = ({
  children,
  isActive = false,
  onClick,
}) => (
  <S.MenuItem
    className={isActive ? "is-active" : ""}
    onClick={onClick}
  >
    {children}
  </S.MenuItem>
);
