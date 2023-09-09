import botao from "./Botao.module.scss";

type botaoProps = {
  texto?: string;
  children: React.ReactNode;
};

const Botao = ({ children }: botaoProps) => {
  return <button className={botao.botao}>{children}</button>;
};

export default Botao;
