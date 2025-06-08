/* eslint-disable jsx-a11y/anchor-is-valid */
import * as Styles from "./styles";
import Sidebar from "../../components/Sidebar";
import EventTable from "../../components/EventTable";

const events = Array(10).fill({
  name: "Clube do Laço Coração Pantaneiro",
  teams: 10,
  status: "Ativo",
  date: "09 a 11 de Junho",
});

export function Dashboard() {
  const userName = "Kaique Steck";

  return (
    <Styles.Container>
      <Sidebar userName={userName} />

      <Styles.MainContent>
        <Styles.Greetings>
          Bem vindo de volta, <strong>{userName}</strong>
        </Styles.Greetings>
        <Styles.Title>Todos eventos</Styles.Title>

        <EventTable events={events} />
      </Styles.MainContent>
    </Styles.Container>
  );
}

export default Dashboard;
