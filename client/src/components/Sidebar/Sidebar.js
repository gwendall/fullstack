import React from 'react';
import styled from 'styled-components';

const Sidebar = ({ isConnected, ...props }) => (
  <Container>
    <Logo />
    <div>The Idea Pool</div>
    {isConnected && <SidebarConnected {...props} />}
  </Container>
);

export default Sidebar;

const Container = styled.div`
  padding: 37px 10px;
  background-color: rgba(0, 168, 67, 1);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img.attrs({
  src: require('./assets/logo.png'),
})`
  width: 64px;
  height: 64px;
  margin-bottom: 10px;
`;

const SidebarConnected = ({ logout, ...props }) => <button onClick={() => logout()}>Logout</button>;
