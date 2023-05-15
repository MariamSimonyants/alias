import { useDispatch, useSelector } from "react-redux"
import styles from "./transitionpage.module.css"
import { Button } from "@mui/material"
import { setStage } from "../../store/actionCreator"
import { STAGES } from "../../helpers/constants/pages"


export const TransitionPage = () => {
     const dispatch = useDispatch ()
     const state = useSelector(state => state)
    const handleNextRoundClick = () => {
        const action = setStage(STAGES.game)
        dispatch(action)
    }
    
    return (
        <div className={styles.TransitionPage}>
            <p><b>{state.team1.name}</b>:{state.team1.correctWords.length}</p>
            <p><b>{state.team2.name}</b> : {state.team2.correctWords.length}</p>
            <p><b>Next turn: {state.turn}</b></p>
            <Button
                variant="contained"
                onClick={handleNextRoundClick}
            >
                Play
            </Button>
        </div>
        
    )

}
