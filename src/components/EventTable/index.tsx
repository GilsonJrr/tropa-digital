/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from "react";
import * as Styles from "./styles";
import More from "../../assets/more.png";
import Search from "../../assets/search.png";

type EventTypes = {
  name: string;
  teams: number;
  status: string;
  date: string;
};

type EventTableProps = {
  events: EventTypes[];
};

export const EventTable: FC<EventTableProps> = ({ events }) => {
  const [page, setPage] = useState(1);

  return (
    <Styles.TableContainer>
      <Styles.SearchRow>
        <Styles.SearchInputContainer>
          <img src={Search} alt="Search" />
          <Styles.SearchInput placeholder={"Buscar eventos"} />
        </Styles.SearchInputContainer>
        <Styles.InsertButton>+ Inserir novo</Styles.InsertButton>
      </Styles.SearchRow>

      <Styles.TableHeader>
        <span>Nome do evento</span>
        <span>Total de equipes</span>
        <span>Status</span>
        <span>Data</span>
      </Styles.TableHeader>

      {events.slice((page - 1) * 2, page * 2).map((event, idx) => (
        <Styles.TableRow key={idx}>
          <a href="#">{event.name}</a>
          <span>{event.teams}</span>
          <div>
            <Styles.StatusDot />
            <span>{event.status}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{event.date}</span>
            <img src={More} alt="More" />
          </div>
        </Styles.TableRow>
      ))}

      <Styles.Pagination>
        <Styles.PaginationButton
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Anterior
        </Styles.PaginationButton>
        {[1, 2, 3].map((n) => (
          <Styles.PaginationButton
            key={n}
            onClick={() => setPage(n)}
            disabled={page !== n}
            option
          >
            {n}
          </Styles.PaginationButton>
        ))}
        <Styles.PaginationButton
          disabled={page === 3}
          onClick={() => setPage(page + 1)}
        >
          Próxima
        </Styles.PaginationButton>
      </Styles.Pagination>
    </Styles.TableContainer>
  );
};

export default EventTable;
