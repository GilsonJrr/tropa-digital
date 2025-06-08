import styled from 'styled-components';

type Props = {
  active?: boolean
  option?: boolean
}

export const TableContainer = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 20px;
  margin-top: 30px;
  border: 1px solid #09428F2B;
`

export const SearchRow = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 12px;
  gap: 10px;
`;

export const SearchInputContainer = styled.div`
  padding: 10px 15px;
  border-radius: 33px;
  border: none;
  width: 30%;
  background-color: #F6F6F6;
  color: #00000033 !important;
  display: flex;
  gap: 10px;
`

export const SearchInput = styled.input`
  border: none;
  background-color: #F6F6F6;
  color: #00000033 !important;
  font-weight: bold;
  &::placeholder {
    color: #00000033;
    opacity: 0.7;
  }
  &:-webkit-autofill {
    -webkit-text-fill-color: #00000033 !important;
    transition: background-color 5000s ease-in-out 0s;
  }
  &:active {
    border: none;
  }
`;

export const InsertButton = styled.button`
  background: #d35400;
  border: none;
  color: white;
  padding: 8px 14px;
  border-radius: 33px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #b94800;
  }
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 2fr;
  font-weight: 600;
  padding: 10px;
  color: #CC623780;
  border-bottom: 1px solid #CC62371A;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 2fr;
  padding: 10px;
  border-bottom: 1px solid #CC62371A;
  font-size: 14px;
  align-items: center;

  a {
    color: #657593;
    text-decoration: none;
    cursor: pointer;
  }

  span{
    color: #657593;
  }

  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

export const StatusDot = styled.div`
  width: 9px;
  height: 9px;
  background: #4DEF00;
  border-radius: 999px;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 1rem;
`;

export const PaginationButton = styled.button<Props>`
  width: ${({option}) => option ? 35 : 'auto'}px;
  height: ${({option}) => option ? 35 : 'auto'}px;
  padding: 10px 16px;
  border-radius: 200px;
  border: none;
  background: white;
  cursor: pointer;
  background: ${({active}) => active ? '#F5F5F5' : '#CC6237'};
  font-size: 12px;
  font-weight: bold;
  color: ${({active}) => active ? '#000000' : '#FFFFFF'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 29px;
`

