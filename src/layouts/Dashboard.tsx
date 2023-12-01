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
`;
const MainStyled = styled.main`
  height: 100%;
  overflow-y: auto;
  padding-left: 250px;
`;

export default function Dashboard({ children }: IDashboardProps) {
  return (
    <DashboardContainerStyled>
      <SidebarStyled>tess</SidebarStyled>
      <MainStyled>{children}</MainStyled>
    </DashboardContainerStyled>
  );
}
