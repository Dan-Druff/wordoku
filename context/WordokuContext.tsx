import React, { ReactNode, createContext, useContext, useReducer, useState } from 'react';
import {SquareType, DefaultSquares} from '../util/Constants';

export type WordokuActionType = 
{type:'clear'} | 
{type:'deal', payload:{cards:SquareType[]}} | 
{type:'draw',payload:{cards:SquareType[]}} |
{type:'selectSquare',payload:{cards:SquareType[]}}

type WordokuStateType = SquareType[];
type DispatchType = (action:WordokuActionType) => void;


export interface WordokuContextType {
    wordokuState:SquareType[],
    wordokuDispatch:DispatchType,
    wordokuDeck:string[]
}
const WordokuContext = createContext<WordokuContextType>({
    wordokuDeck:[],
    wordokuDispatch:() => null,
    wordokuState:[]
})
export const WordokuContextProvider = ({children}:{children:ReactNode}) => {
    const [wordokuDeck,setWordokuDeck] = useState<string[]>([]);
    const wordokuReducer = (state:WordokuStateType,action:WordokuActionType):WordokuStateType => {
        switch (action.type) {
            case 'selectSquare':
                return action.payload.cards;
            case 'clear':
                
                return state;
            case 'deal':
                return action.payload.cards;
            case 'draw':
                return action.payload.cards;    
            default:
                return state;
        }
    }
    const [wordokuState,wordokuDispatch] = useReducer(wordokuReducer,DefaultSquares);
    return (
        <WordokuContext.Provider value={{
            wordokuDeck:wordokuDeck,
            wordokuDispatch:wordokuDispatch,
            wordokuState:wordokuState
        }}>
            {children}
        </WordokuContext.Provider>
    )
}
export const useWordoku = () => {
    return useContext(WordokuContext);
}