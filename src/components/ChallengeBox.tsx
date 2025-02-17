import styles from '../styles/components/ChallengeBox.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

export function ChallengeBox() {

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceded() {
        completeChallenge();
        resetCountdown();
    }

    function hasdleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={ styles.challengeBoxContainer }>
            { activeChallenge ? (
                <div className={styles.challangeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={ `icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p>{ activeChallenge.description }</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={hasdleChallengeFailed}>
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handleChallengeSucceded}>
                            Completei
                        </button>
                    </footer>
                </div>
            ): (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafios</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                        Avance de level completando desafios.
                    </p>
                </div>
            )}
        </div>
    );
}