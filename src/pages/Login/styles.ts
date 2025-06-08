import styled from "styled-components";
import illustration from "../../assets/illustration.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Card = styled.div`
  background: white;
  width: 800px;
  max-width: 756.5px;
  display: flex;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

export const FormSection = styled.div`
  flex: 1;
  padding: 40px 20px;
`;

export const ImageSection = styled.div`
  position: relative;
  flex: 1;
  border-radius: 20px;
  padding-right: 42px;
`;

export const ImageSectionColor = styled.div`
  position: relative;
  flex: 1;
  background-color: #c15c2f;
  border-radius: 20px;
  margin-left: 42px;
  height: 100%;
  width: 100%;
`;

export const Image = styled.div`
  position: absolute;
  flex: 1;
  height: 100%;
  width: 100%;
  background-image: url(${illustration});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  z-index: 100;
`;

export const TitlesWrapper = styled.div`
  margin: 35px 0;
`

export const Title = styled.h2`
  color: #c15c2f;
  font-size: 26px;
`;

export const SubTitle = styled.h2`
  color: #2A4D8E80;
  font-size: 13px;
`;


export const Label = styled.label`
  color: #CC6237;
  font-weight: 700;
  display: block;
  margin: 0 0 5px;
`;

export const ErrorMessage = styled.p`
  text-align: center;
  color: red;
  font-size: 14px;
  margin-top: 9px;
`

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  border-radius: 100px;
  border: none;
  margin-bottom: 20px;
  color: #657593 !important;
  &::placeholder {
    color: #657593;
    opacity: 0.7;
  }
  &:-webkit-autofill {
    -webkit-text-fill-color: #657593 !important;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  background-color: #c15c2f;
  color: white;
  border-radius: 100px;
  font-size: 1rem;
  cursor: pointer;
`;
