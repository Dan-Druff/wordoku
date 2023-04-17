import styles from '../styles/Home.module.css';
import { useWordoku } from '@/context/WordokuContext';
import { dealWordoku, drawWordoku } from '@/util/WordokuHandlers';
const GameHeader = () => {
    const {wordokuDispatch,wordokuState,wordokuDeck} = useWordoku();
    const dealButton = () => {
        const popu = dealWordoku(wordokuState);
        wordokuDispatch({type:'deal',payload:{cards:popu}});
    }
    const drawButton = () => {
        wordokuDispatch({type:'draw',payload:{cards:drawWordoku(wordokuState)}})
    }
  return (
    <div className={styles.headerArea}>
    <h2>WORDOKU</h2>
    <div className={styles.headerAreaRow}>
        <button className={styles.butt} onClick={() => dealButton()}>DEAL</button><button className={styles.butt} onClick={drawButton}>DRAW</button><button className={styles.butt}>BUTTON 3</button><button className={styles.butt}>BUTTON 4</button>
    </div>
    </div>
  )
}

export default GameHeader