import { ReactComponent as back } from "./svgs/icones/back.svg";
import { ReactComponent as arrowLeft } from "./svgs/icones/arrow-left.svg";
import { ReactComponent as arrowRight } from "./svgs/icones/arrow-right.svg";
import { ReactComponent as profile } from "./svgs/icones/profile.svg";
import { ReactComponent as logoBranco } from "./svgs/logo/logo-fundo-branco.svg";
import { ReactComponent as logoVinho } from "./svgs/logo/logo-fundo-vinho.svg";
import { ReactComponent as logoRed } from "./svgs/logo/logo-fundo-vermelho.svg";

const icons = {
  back,
  arrowLeft,
  arrowRight,
  profile,
  logoBranco,
  logoVinho,
  logoRed
}

export const Icon = ({ name, ...props }) => {
  const Element = icons[name]

  return <Element {...props}/>
}