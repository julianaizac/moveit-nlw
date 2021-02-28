import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    const { challangesCompleted } = useContext(ChallengesContext)
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challangesCompleted}</span>
        </div>
    );
}