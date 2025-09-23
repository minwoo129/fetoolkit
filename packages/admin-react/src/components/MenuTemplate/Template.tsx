import React from 'react';
import {
  MenuList,
  MenuLogo,
  MenuTemplateContent,
  MenuTemplateWrapper,
  TemplateContainer,
} from './Elements';

interface Props {
  logo?: React.ReactNode;
  //   menus: FirstDepthMenuItem[];
  //   userProfile?: UserProfileType;
}

export const MenuTemplate = ({ logo }: Props) => {
  return (
    <TemplateContainer>
      <MenuTemplateWrapper>
        <MenuTemplateContent>
          <MenuLogo>{logo ?? 'Logo'}</MenuLogo>

          <MenuList></MenuList>
        </MenuTemplateContent>
      </MenuTemplateWrapper>
    </TemplateContainer>
  );
};
