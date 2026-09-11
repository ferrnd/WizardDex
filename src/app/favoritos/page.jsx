'use client';

import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CharacterCard from '@/components/CharacterCard/CharacterCard';
import CharacterModal from '@/components/CharacterModal/CharacterModal';
import styles from '../personagens/personagens.module.css';

export default function Favoritos() {
    const [personagensF, setPersonagensF] = useState([]);
    const [personagemS, setPersonagemS] = useState(null);
    const [eCliente, setECliente] = useState(false);

    useEffect(() => {
        setECliente(true);
        const cardsT = JSON.parse(localStorage.getItem('characters')) || [];
        const dadosF = JSON.parse(sessionStorage.getItem('favorites')) || [];
        const idsF = dadosF.map(fav => fav.id);
        const favoritos = cardsT.filter(card => idsF.includes(card.id));
        setPersonagensF(favoritos);
    }, []);

    const alternarF = (personagem) => {
        const favoritosA = personagensF.filter((fav) => fav.id !== personagem.id);
        setPersonagensF(favoritosA);
        
        sessionStorage.setItem('favorites', JSON.stringify(favoritosA));
        toast.info(`${personagem.name} foi removido(a) dos favoritos! 💔`);
    };

    if (!eCliente) {
        return null; 
    }

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Meus Favoritos</h1>

            {personagensF.length === 0 ? (
                <div className={styles.nenhumP}>Nenhum personagem foi favoritado.</div>
            ) : (
                <div className={styles.grid}>
                    {personagensF.map((personagem) => (
                        <CharacterCard
                            key={personagem.id}
                            character={personagem}
                            isFavorite={true}
                            onToggleFavorite={() => alternarF(personagem)}
                            onClick={() => setPersonagemS(personagem)}
                        />
                    ))}
                </div>
            )}

            {personagemS && (
                <CharacterModal
                    character={personagemS}
                    onClose={() => setPersonagemS(null)}
                />
            )}

            <ToastContainer position="bottom-right" theme="dark" />
        </main>
    );
}
