import * as Styles from "./styles";
import Logo from "../../assets/logo.png";

import Calendar from "../../assets/calendar.png";
import DashboardLogo from "../../assets/dashboard.png";
import Subscription from "../../assets/subscription.png";
import Team from "../../assets/team.png";

import User from "../../assets/user.png";

import UserLogo from "../../assets/user_logo.png";
import Off from "../../assets/off.png";

import { useNavigate } from "react-router-dom";
import { FC } from "react";

type DashboardProps = {
  userName: string;
};

export const Dashboard: FC<DashboardProps> = ({ userName }) => {
  const navigate = useNavigate();

  const handleIcon = (_page: string) => {
    switch (_page) {
      case "Dashboard":
        return DashboardLogo;
      case "Eventos":
        return Calendar;
      case "Equipes":
        return Team;
      case "Inscrições":
        return Subscription;
    }
  };

  return (
    <Styles.Sidebar>
      <Styles.NavItemOptions>
        <Styles.Logo>
          <img src={Logo} alt="Logo" width="160" />
        </Styles.Logo>
        <Styles.SidebarTitle>menu</Styles.SidebarTitle>
        {["Dashboard", "Eventos", "Equipes", "Inscrições"].map((item) => (
          <Styles.NavItem key={item} $active={item === "Eventos"}>
            <img src={handleIcon(item)} alt="Logo" width="13" />
            {item}
          </Styles.NavItem>
        ))}
      </Styles.NavItemOptions>

      <Styles.UserSection>
        <Styles.UserIconNameContainer>
          <Styles.UserImage src={User} alt="avatar" />
          <Styles.UserNameContainer>
            <p>{userName}</p>
            <span>Administrador</span>
          </Styles.UserNameContainer>
        </Styles.UserIconNameContainer>
        <div>
          <Styles.NavItem>
            <img src={UserLogo} alt="Logo" width="13" /> Alterar dados
          </Styles.NavItem>
          <Styles.NavItem onClick={() => navigate("/")}>
            <img src={Off} alt="Logo" width="13" />
            Sair
          </Styles.NavItem>
        </div>
      </Styles.UserSection>
    </Styles.Sidebar>
  );
};

export default Dashboard;
