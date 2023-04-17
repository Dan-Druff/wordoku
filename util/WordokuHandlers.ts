import { SquareType } from "./Constants";
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const freshDeck = (gameArray:SquareType[]) => {

}
export const dealWordoku = (gameArray:SquareType[]):SquareType[] => {
    const newArray = gameArray.map((s) => {
        if(s.inside){
            const rando = Math.floor(Math.random() * alphabet.length);
            s.letter = alphabet[rando];
            s.pic = `/wordokuImages/${alphabet[rando]}.png`;
            return s;
        }else{
            return s;
        }
 
    })
    return newArray;
}
export const drawWordoku = (gameArray:SquareType[]):SquareType[] => {
    return gameArray.map((s) => {
        if(s.inside === false || s.selected){
            return s;
        }else{
            const rando = Math.floor(Math.random() * alphabet.length);
            s.letter = alphabet[rando];
            s.pic = `/wordokuImages/${alphabet[rando]}.png`;
            return s;
        }
    })
}