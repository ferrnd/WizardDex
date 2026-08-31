"use client";

import { useState, useEffect } from "react";

export default function TrocaTema() {
  const [tema, setTema] = useState("light");

  const aplicarEstiloBody = (novoTema) => {
    if (novoTema === 'dark') {
      document.body.style.background = '#1f2937';
      document.body.style.color = '#f9fafb';
      console.log('🌙 Tema escuro aplicado');
    } else {
      document.body.style.background = '#f9fafb';
      document.body.style.color = '#1f2937';
      console.log('☀️ Tema claro aplicado');
    }
  };

  const lerCookie = (nome) => {
    try {
      const cookies = document.cookie.split(';');
      for (let cookie of cookies) {
        const [chave, valor] = cookie.trim().split('=');
        if (chave === nome) {
          return valor;
        }
      }
      return null;
    } catch (error) {
      console.error('❌ Erro ao ler cookie:', error.message);
      return null;
    }
  };

  const alternarTema = () => {
    try {
      const novoTema = tema === 'light' ? 'dark' : 'light';

      const dataExpiracao = new Date();
      dataExpiracao.setDate(dataExpiracao.getDate() + 30);

      document.cookie = `tema=${novoTema}; expires=${dataExpiracao.toUTCString()}; path=/`;

      aplicarEstiloBody(novoTema);
      setTema(novoTema);
    } catch (error) {
      console.error('❌ Erro ao alterar tema:', error.message);
    }
  };

  useEffect(() => {
    const temaSalvo = lerCookie('tema');
    if (temaSalvo) {
      setTema(temaSalvo);
      aplicarEstiloBody(temaSalvo);
    }
  }, []);

  return (
    <button onClick={alternarTema} style={{ cursor: 'pointer', padding: '8px 12px' }}>
      Tema: {tema === 'light' ? '☀️ Claro' : '🌙 Escuro'}
    </button>
  );
}