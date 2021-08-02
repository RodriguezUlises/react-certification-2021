import React from 'react';
import { useTheme } from 'styled-components';
import { Container, RightContainer, Toggle, ProfilePicture } from './Header.styled';
import SearchInput from '../SearchInput';
import Logo from '../Logo';
import Sun from '../../utils/svg/Sun';
import Moon from '../../utils/svg/Moon';

function Header({ themeToggler, fetchVideos }) {
  const theme = useTheme();
  return (
    <Container>
      <Logo />
      <SearchInput fetchVideos={fetchVideos} />
      <RightContainer>
        <Toggle onClick={themeToggler} data-testid="Toggle">
          { theme.colors.primary === '#FFF' ?
            <Moon width={20} height={25} /> :
            <Sun width={25} height={25} />
          }
        </Toggle>
        <ProfilePicture />
      </RightContainer>
    </Container>
  );
}

export default Header;
