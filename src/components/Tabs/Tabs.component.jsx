import React from 'react';
import { TabsContainer, ProfilePicture, Ico, IcoPro, LoggedPicture } from './Tabs.styled';
import Home from '../../utils/svg/Home';
import Heart from '../../utils/svg/Heart';
import Clock from '../../utils/svg/Clock';
import { useAuth } from '../../providers/Auth';

const Tabs = () => {
    const { authenticated, logout, user } = useAuth();
    return (
        <TabsContainer>
            <Ico to="/">
                <Home width={`100%`} height={`100%`} />
            </Ico>
            <Ico to={authenticated ? '/favorites' : '/login'}>
                <Heart width={`80%`} height={`100%`} />
            </Ico>
            <Ico to={authenticated ? '/history' : '/login'}>
                <Clock width={`80%`} height={`100%`} />
            </Ico>
            {authenticated ? 
                <LoggedPicture onClick={() => logout()}>
                    <img 
                        src={user.avatarUrl} 
                        alt="logout"  
                    />
                </LoggedPicture> 
                :
                <IcoPro to='/login'>
                    <ProfilePicture /> 
                </IcoPro>
            }
        </TabsContainer>
    )
}

export default Tabs