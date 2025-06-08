import * as Styles from "./styles";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setError("Por favor, insira um e‑mail válido.");
      return;
    }
    if (password.trim() === "") {
      setError("Insira sua senha.");
      return;
    }
    setError("");
    navigate("/dashboard");
  };

  return (
    <Styles.Container>
      <Styles.Card>
        <Styles.FormSection>
          <img src={Logo} alt="Logo" width="170" />

          <Styles.TitlesWrapper>
            <Styles.Title>Bem-vindo de volta</Styles.Title>
            <Styles.SubTitle>
              Entre com sua conta para acessar o painel.
            </Styles.SubTitle>
          </Styles.TitlesWrapper>

          <Styles.Label htmlFor="email">E-mail</Styles.Label>
          <Styles.Input
            type="email"
            id="email"
            placeholder="exemplo@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Styles.Label htmlFor="senha">Senha</Styles.Label>
          <Styles.Input
            type="password"
            id="senha"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Styles.Button onClick={handleLogin}>Entrar</Styles.Button>
          {error && <Styles.ErrorMessage>{error}</Styles.ErrorMessage>}
        </Styles.FormSection>
        <Styles.ImageSection>
          <Styles.Image />
          <Styles.ImageSectionColor />
        </Styles.ImageSection>
      </Styles.Card>
    </Styles.Container>
  );
}
