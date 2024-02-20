import { Toaster } from "react-hot-toast";
import LandingPage from "./src/pages/Landing";


export default function Home() {
  return (
   <main>
      {/* aqui vou chamar meus componentes para fazre a pagina funcionar */}
      <Toaster/>
      <LandingPage />
   </main>
  );
}
