import botao from "./Botao.module.scss";

// Tipando o que vai ser os tipos do botão
type botaoProps = {
  texto?: string;
  children: React.ReactNode;
};

// Fazendo a desestruturação do tipo BotaoProps para obter apenas a propriedade children, a qual é do tipo React.ReactNode, e passando esse filho como conteúdo do elemento button
const Botao = ({ children }: botaoProps) => {
  return <button className={botao.botao}>{children}</button>;
};

export default Botao;
