import * as React from 'react';
import * as S from './MenuLogo.styles';

export type MenuLogoProps = {
  children: React.ReactNode;
};

export function MenuLogo({ children }: MenuLogoProps) {
  return (
    <S.MenuLogo>
      {children}
    </S.MenuLogo>
  )
}
