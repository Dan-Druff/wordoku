import styles from '../styles/Home.module.css';
import { SquareType } from '@/util/Constants';
const Square = ({card,squareClick}:{card:SquareType, squareClick:(id:string) => void}) => {
  return (
    <div className={styles.squareDiv} onClick={() => squareClick(card.id)}>
        <img src={card.pic} className={styles.imageDiv}/>
    </div>
  )
}

export default Square