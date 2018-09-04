import React from 'react';
import styled from 'styled-components';
import Sidebar from 'components/Sidebar';

const Layout = ({ children, ...props }) => (
  <Container>
    <Sidebar />
    <Content>{children}</Content>
  </Container>
);

export default Layout;

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 200px 1fr;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
