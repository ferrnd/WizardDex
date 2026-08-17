'use client';

import Image from 'next/image';
import styles from './CharacterModal.module.css';

export default function CharacterModal({ character, onClose }) {
    const imageUrl = character.image || 'https://placehold.co/300x400/1e293b/fbbf24?text=Sem+Foto';

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>
                    X
                </button>

                <div className={styles.content}>
                    <div className={styles.imageContainer}>
                        <Image src={imageUrl} alt={character.name} fill className={styles.image} />
                    </div>

                    <div className={styles.details}>
                        <h2>{character.name}</h2>
                        <p>
                            <strong>Casa:</strong> {character.house || 'Desconhecida'}
                        </p>
                        <p>
                            <strong>Espécie:</strong> {character.species}
                        </p>
                        <p>
                            <strong>Patrono:</strong> {character.patronus || 'Nenhum'}
                        </p>
                        <p>
                            <strong>Data de Nascimento:</strong>{' '}
                            {character.dateOfBirth || 'Desconhecida'}
                        </p>
                        <p>
                            <strong>Cor dos Olhos:</strong> {character.eyeColour || 'Desconhecida'}
                        </p>
                        <p>
                            <strong>Cor do Cabelo:</strong> {character.hairColour || 'Desconhecida'}
                        </p>
                        <p>
                            <strong>Ator/Atriz:</strong> {character.actor || 'N/A'}
                        </p>
                        <p>
                            <strong>Situação:</strong> {character.alive ? '🟢 Vivo' : '🔴 Morto'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
