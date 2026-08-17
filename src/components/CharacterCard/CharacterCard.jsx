'use client';

import Image from 'next/image';
import styles from './CharacterCard.module.css';

export default function CharacterCard({ character, onClick, onToggleFavorite, isFavorite }) {
    const imageUrl = character.image || 'https://placehold.co/300x400/1e293b/fbbf24?text=Sem+Foto';

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer} onClick={onClick}>
                <Image
                    src={imageUrl}
                    alt={`Foto de ${character.name}`}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 250px"
                />
            </div>
            <div className={styles.info} onClick={onClick}>
                <h3 className={styles.name}>{character.name}</h3>
                <p>
                    <strong>Casa:</strong> {character.house || 'Desconhecida'}
                </p>
                <p>
                    <strong>Ator/Atriz:</strong> {character.actor || 'N/A'}
                </p>
            </div>
            <button
                className={`${styles.favBtn} ${isFavorite ? styles.active : ''}`}
                onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite();
                }}>
                {isFavorite ? '❤️ Desfavoritar' : '🤍 Favoritar'}
            </button>
        </div>
    );
}
