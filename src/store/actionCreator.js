import { SET_STAGE, SET_STATE, SET_UNDO_CORRECT_WORDS, SET_USER_NAME, SET_CORRECT_WORDS, SET_CORRECT_ANSWERS } from "./actionTypes"

export const setUserData= (pair)=> {
    return {
        type: SET_USER_NAME,
        payload: pair
    }
}

export const setStage= (stage)=> {
    return {
        type: SET_STAGE,
        payload: stage
    }
}
export const setCorrectWords= (word)=> {
    return {
        type: SET_CORRECT_WORDS,
        payload: word
    }
}
export const setState= (state)=> {
    return {
        type: SET_STATE,
        payload: state
    }
}
export const setUndoCorrectWords= (word)=> {
    return {
        type: SET_UNDO_CORRECT_WORDS,
        payload: word
    }
}

export const setCorrectAnswers= (answers)=> {
    return {
        type: SET_CORRECT_ANSWERS,
        payload: answers
    }
}