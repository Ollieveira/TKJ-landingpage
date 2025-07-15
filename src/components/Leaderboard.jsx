import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import {
  collection,
  query,
  orderBy,
  limit,
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

const   Leaderboard = () => {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define a consulta ao Firestore
    // Em Leaderboard.jsx
    const q = query(
      collection(db, "leaderboard"),
      orderBy("playerScore.finishTime", "asc"), // 1º critério: menor tempo
      orderBy("playerScore.deaths", "asc"), // 2º critério: menos mortes
      limit(10)
    );
    // onSnapshot "escuta" as mudanças em tempo real
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const scoresData = [];
      querySnapshot.forEach((doc) => {
        // Adiciona o id do documento junto com os dados
        scoresData.push({ id: doc.id, ...doc.data() });
      });
      setScores(scoresData);
      setLoading(false);
    });

    // Função de limpeza: O React executará isso quando o componente for "desmontado".
    // Isso é CRUCIAL para evitar memory leaks (vazamentos de memória),
    // pois para de escutar as atualizações do Firebase.
    return () => unsubscribe();
  }, []); // O array vazio [] garante que o useEffect rode apenas uma vez, quando o componente montar.

  if (loading) {
    return (
      <div className="text-white text-3xl text-center">
        Carregando Ranking...
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-8">
      <h1 className="text-5xl md:text-6xl font-bold text-center font-libra text-text-main mb-8 text-shadow-lg">
        🏆 RANKING GERAL 🏆
      </h1>
      <div className="space-y-4">
        {scores.map((entry, index) => (
          // Usamos o id do documento do Firebase como 'key', que é um identificador único perfeito.
          <div
            key={entry.id}
            className="flex justify-between items-center bg-red-900 p-5 rounded-lg border-2 border-red-400 shadow-xl"
          >
            <span className="text-3xl font-bold text-yellow w-16">
              #{index + 1}
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
    </div>
  );
};

export default Leaderboard;
