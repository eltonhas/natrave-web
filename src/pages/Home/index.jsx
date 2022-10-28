import { Navigate } from "react-router-dom"
import { useLocalStorage } from "react-use"

import Logo from "~/components/Icon/svgs/logo/logo-fundo-vinho.svg"
import Casal from "~/components/Icon/svgs/imagem/img.png"

export function Home() {

  const [auth, setAuth] = useLocalStorage('auth', {})

  if (auth?.user?.id) {
    return <Navigate to="/dashboard" replace={true} />
  }

  return(
    <div className="bg-red-700 text-white flex flex-col items-center p-4 space-y-6 md:h-screen ">
      <header className="container flex justify-center max-w-5xl p-4">
        <img src={ Logo } className="w-40"/>
      </header>
      <div className="container flex flex-1 flex-col items-center space-y-6 p-4 max-w-5xl md:flex-row md:space-y-0 md:space-x-6">
        <div className="flex justify-center md:flex-1">
          <img src={ Casal } className="w-full max-w-sm"/>
        </div>

        <div className="flex flex-col space-y-6 md:flex-1">
          <h1 className="text-3xl text-center font-bold md:text-left">Dê o seu palpite na Copa do mundo do Catar 2022!</h1>

          <a href="/signup" className=" text-center text-red-700 bg-white text-xl px-8 py-4 rounded-xl">
            Criar minha conta
          </a>
          <a href="/login" className=" text-center text-white border border-white text-xl px-8 py-4 rounded-xl">
            Fazer login
          </a>
        </div>
      </div>
    </div>

  );
}