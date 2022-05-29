import MainView from "../components/MainView";
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Home() {
  const { connected } = useWallet();

  return (
    <div className="app">
      {connected ? (
        <MainView />
      ) : (
        <div className="loginContainer">
          <div className="loginTitle">Iniciar sesión en TikTok</div>
          <div className="loginSubtitle">Administra tu cuenta, revisa tus notificaciones, comentarios, videos y más.</div>
          <WalletMultiButton />
        </div>
      )}
    </div>
  )
}
