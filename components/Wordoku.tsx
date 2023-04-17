import { useWordoku } from "@/context/WordokuContext"
import Square from "./Square"
import styles from '../styles/Home.module.css';

const Wordoku = () => {
    const {wordokuDispatch,wordokuState} = useWordoku();
    const squareClick = (sqr:string) => {
        console.log(`Square ${sqr} clicked`);
        const huh = wordokuState.map((sq) => {
            if(sq.id === sqr){
                if(sq.selected){
                    sq.selected = false;
                    sq.pic = `/wordokuImages/${sq.letter}.png`;
                    return sq;
                }else{
                    sq.selected = true;
                    sq.pic = `/wordokuImages/${sq.letter}Check.png`;
                    return sq;
                }
                
            }else{
                return sq;
            }
        });
        wordokuDispatch({type:'selectSquare',payload:{cards:huh}});
    }
  return (
    <div className={styles.gameBoard}>
        {wordokuState.map((sqr) => {
            return (
                <Square card={sqr} key={sqr.id} squareClick={squareClick}/>
            )
        })}
    </div>
  )
}

export default Wordoku