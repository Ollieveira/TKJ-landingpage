import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />

      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">
          Bem-vindo ao The King's Jest
        </h1>
        <nav className="space-x-4">
          <Link to="/gdd" className="text-red-600 underline">
            GDD
          </Link>
          <Link to="/help" className="text-blue-600 underline">
            Ajuda
          </Link>
        </nav>
      </main>
    </>
  );
}

export default Home;
