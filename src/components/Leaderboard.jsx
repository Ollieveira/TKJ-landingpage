import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import {
  collection,
  query,
  orderBy,
  limit,
  startAfter,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

// Função para formatar o tempo
const formatTime = (interval) => {
  if (typeof interval !== "number") return "--:--:--";
  const minutes = Math.floor(interval / 60);
  const seconds = Math.floor(interval % 60);
  const deciseconds = Math.floor((interval % 1) * 100);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}:${String(deciseconds).padStart(2, "0")}`;
};

const Leaderboard = () => {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [lastDocs, setLastDocs] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    setLoading(true);
    let unsubscribe = () => {};

    // A quantidade de itens a buscar (página + 1 para verificação)
    const pageSize = 10;

    if (page === 1) {
      // ESTRATÉGIA REAL-TIME PARA A PÁGINA 1
      const q = query(
        collection(db, "leaderboard"),
        orderBy("playerScore.finishTime", "asc"),
        orderBy("playerScore.deaths", "asc"),
        limit(pageSize + 1) // Pede 11 para saber se há uma próxima página
      );

      unsubscribe = onSnapshot(
        q,
        (querySnapshot) => {
          const docs = querySnapshot.docs;
          // Verifica se recebemos mais documentos do que o tamanho da página
          const hasMore = docs.length > pageSize;
          setIsLastPage(!hasMore);

          // Exibe apenas a quantidade de scores da página
          const scoresToShow = hasMore ? docs.slice(0, pageSize) : docs;
          const scoresData = scoresToShow.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          const lastVisible = scoresToShow[scoresToShow.length - 1];
          setScores(scoresData);
          setLastDocs([lastVisible]);
          setLoading(false);
        },
        (error) => {
          console.error("Erro no listener do Firestore:", error);
          setLoading(false);
        }
      );
    } else {
      // ESTRATÉGIA DE BUSCA ÚNICA PARA OUTRAS PÁGINAS
      const fetchPaginatedData = async () => {
        try {
          const q = query(
            collection(db, "leaderboard"),
            orderBy("playerScore.finishTime", "asc"),
            orderBy("playerScore.deaths", "asc"),
            limit(pageSize + 1), // Pede 11 também
            startAfter(lastDocs[page - 2])
          );
          const documentSnapshots = await getDocs(q);
          const docs = documentSnapshots.docs;
          const hasMore = docs.length > pageSize;
          setIsLastPage(!hasMore);

          const scoresToShow = hasMore ? docs.slice(0, pageSize) : docs;
          const scoresData = scoresToShow.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          const lastVisible = scoresToShow[scoresToShow.length - 1];
          setScores(scoresData);
          setLastDocs((prev) => {
            const newLastDocs = [...prev];
            newLastDocs[page - 1] = lastVisible;
            return newLastDocs;
          });
        } catch (error) {
          console.error("Erro ao buscar leaderboard:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchPaginatedData();
    }

    return () => {
      unsubscribe();
    };
  }, [page]);

  const handleNextPage = () => {
    if (!isLastPage) setPage((p) => p + 1);
  };
  const handlePrevPage = () => {
    if (page > 1) setPage((p) => p - 1);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-8">
      <h1 className="text-5xl md:text-6xl font-bold text-center text-text-main font-libra mb-8 text-shadow-lg">
        🏆 RANKING GERAL 🏆
      </h1>

      {loading ? (
        <div className="text-text-main font-libra text-3xl text-center">
          Carregando Ranking...
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {scores.map((entry, index) => (
              <div
                key={entry.id}
                className="flex justify-between items-center bg-red-900 p-5 rounded-lg border-2 border-red-400 shadow-xl"
              >
                <span className="text-3xl font-bold text-yellow w-16">
                  {/* Calcula o ranking baseado na página atual */}#
                  {(page - 1) * 10 + index + 1}
                </span>
                <span className="text-3xl text-text-secondary font-libra flex-grow">
                  {entry.playerScore.playerName}
                </span>
                <span className="text-3xl font-mono text-yellow w-48 text-right">
                  {formatTime(entry.playerScore.finishTime)}
                </span>
                <span className="text-3xl text-red-400 w-48 text-right">
                  {entry.playerScore.deaths} Mortes
                </span>
              </div>
            ))}
          </div>

          {/* --- CONTROLES DE PAGINAÇÃO --- */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrevPage}
              disabled={page === 1 || loading}
              className="bg-red-main-light text-text-main font-bold py-2 px-6 rounded-lg disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-red-main-dark transition-colors"
            >
              Anterior
            </button>
            <span className="text-white text-xl font-semibold">
              Página {page}
            </span>
            <button
              onClick={handleNextPage}
              disabled={isLastPage || loading}
              className="bg-red-main-light text-white font-bold py-2 px-6 rounded-lg disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-red-main-dark transition-colors"
            >
              Próximo
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Leaderboard;
