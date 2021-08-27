import React from 'react';
import { useTheme } from 'styled-components';
import {
  Container,
  RightContainer,
  Toggle,
  ProfilePicture,
  LoggedPicture,
} from './Header.styled';
import SearchInput from '../SearchInput';
import Logo from '../Logo';
import Sun from '../../utils/svg/Sun';
import Moon from '../../utils/svg/Moon';
import { useAuth } from '../../providers/Auth';

function Header({ themeToggler, fetchVideos }) {
  const theme = useTheme();
  const { authenticated, user, logout } = useAuth();
  return (
    <Container>
      <Logo />
      <SearchInput fetchVideos={fetchVideos} />
      <RightContainer>
        <Toggle onClick={themeToggler} data-testid="Toggle">
          {theme.colors.primary === '#FFF' ? (
            <Moon width={20} height={25} />
          ) : (
            <Sun width={25} height={25} />
          )}
        </Toggle>
        {authenticated ? (
          <LoggedPicture onClick={() => logout()}>
            <img src={user.avatarUrl} alt="logout" />
          </LoggedPicture>
        ) : (
          <ProfilePicture to="/login" />
        )}
      </RightContainer>
    </Container>
  );
}

export default Header;
