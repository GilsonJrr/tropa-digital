import styled from 'styled-components';

export const Logo = styled.div`
  margin-bottom: 30px;
  margin-left: 10px;
`

export const NavItemOptions = styled.div`
`

export const Sidebar = styled.aside`
  width: 210px;
  background: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #eee;
`;

export const SidebarTitle = styled.h1`
  color: #A3A3A3;
  font-size: 9px;
  text-transform: uppercase;
  margin-left: 10px;
`

export const NavItem = styled.button<{ $active?: boolean }>`
  display: flex;
  border: none;
  width: 100%;
  text-align: left;
  padding: 10px;
  border-radius: 5px;
  background: ${({ $active }) => ($active ? '#d35400' : 'transparent')};
  color: ${({ $active }) => ($active ? '#ffffff' : '#333')};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  align-items: center;
  justify-content: start;
  gap: 10px;
`;

export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  border: solid 1px #CC6237;
`

export const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  border-top: 1px solid #eee;
  padding: 39px 10px 0;
`;

export const UserIconNameContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: start;
`

export const UserNameContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-weight: bold;
    font-size: 14px;
  }

  span {
    font-size: 12px;
    color: gray;
  }
`
