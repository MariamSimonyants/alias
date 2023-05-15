import { useDispatch, useSelector } from 'react-redux';
import styles from './wordsList.module.css'
import  CheckIcon from '@mui/icons-material/Check';
import { Button } from '@mui/material';
import { shuffleArray } from '../../../helpers/functions';
import { setCorrectAnswers, setCorrectWords, setUndoCorrectWords } from '../../../store/actionCreator';
import { useEffect, useMemo, useState } from 'react';

function WordsList(){
    const dispatch = useDispatch();
    const currentTurn = useSelector(state => state.currentTurn);
    const shuffledList = useSelector(state => shuffleArray(state.wordsLeft));
    const list = useMemo(() => shuffledList, []);
    const [page, setPage] = useState(0)
    const [correctWords, setCorrectWords] = useState([])
    
    const toggleWord = (e) => {
        const { name }= e.target
        if(correctWords.includes(name)) {
            setCorrectWords(prev => prev.filter(word => word !== name))
            return;
        }
       setCorrectWords(prev => ([...prev, name]))
    
    } 
    useEffect(() => {
        if(correctWords.length === 5){
            setPage(prev => prev +1)
        }
    }, [correctWords])

    useEffect (() => {
        const action = setCorrectAnswers(correctWords)
        dispatch(action)
    }, [currentTurn])

    return (
        <div className={styles.list}>
           {
           list.slice (page * 5, page * 5 + 5).map(word => {
            return (
            <Button
            key={word}
            variant='contained'
            color={correctWords.includes(word) ? "success" : "info"}
            endIcon={correctWords.includes(word) ? <CheckIcon/> : null}
            name={word}
            onClick={toggleWord}
            >
                {word}
            </Button>
           )})}
        </div>
    )
}

export default WordsList;