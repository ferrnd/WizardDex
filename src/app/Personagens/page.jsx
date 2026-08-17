'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CharacterCard from '@/components/CharacterCard/CharacterCard';
import CharacterModal from '@/components/CharacterModal/CharacterModal';
import styles from './personagens.module.css';

export default function Personagens() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [favorites, setFavorites] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://hp-api.onrender.com/api/characters');
                setCharacters(response.data.slice(0, 25));
            } catch (err) {
                setError('Ocorreu um erro ao buscar os bruxos. Tente novamente mais tarde.');
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    const toggleFavorite = (character) => {
        const isFav = favorites.some((fav) => fav.id === character.id);

        if (isFav) {
            setFavorites(favorites.filter((fav) => fav.id !== character.id));
            toast.info(`${character.name} foi removido(a) dos favoritos! 💔`);
        } else {
            setFavorites([...favorites, character]);
            toast.success(`${character.name} foi adicionado(a) aos favoritos! ❤️`);
        }
    };

    if (loading) return <div className={styles.loader}>Conjurando personagens... ✨</div>;
    if (error) return <div className={styles.error}>{error}</div>;

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Catálogo de Bruxos</h1>

            <div className={styles.grid}>
                {characters.map((char) => (
                    <CharacterCard
                        key={char.id}
                        character={char}
                        isFavorite={favorites.some((fav) => fav.id === char.id)}
                        onToggleFavorite={() => toggleFavorite(char)}
                        onClick={() => setSelectedCharacter(char)}
                    />
                ))}
            </div>

            {selectedCharacter && (
                <CharacterModal
                    character={selectedCharacter}
                    onClose={() => setSelectedCharacter(null)}
                />
            )}

            <ToastContainer position="bottom-right" theme="dark" />
        </main>
    );
}
