import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface IDashboardProps extends PropsWithChildren {}

const DashboardContainerStyled = styled.div`
  height: 100vh;
  background: #f2f2f2;
`;
const SidebarStyled = styled.aside`
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  padding: 1rem;
  z-index: 20;
`;
const MainStyled = styled.main`
  height: 100%;
  overflow-y: auto;
  padding-left: 250px;
`;

const MainPageStyled = styled.div`
  padding: 1rem;
`;

export default function Dashboard({ children }: IDashboardProps) {
  return (
    <DashboardContainerStyled>
      <SidebarStyled>tess</SidebarStyled>
      <MainStyled>
        <MainPageStyled>{children}</MainPageStyled>
      </MainStyled>
    </DashboardContainerStyled>
  );
}
