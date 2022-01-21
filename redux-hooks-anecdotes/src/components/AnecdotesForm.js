import React from "react";
import { useDispatch } from 'react-redux';
import { createAnecdote } from "../reducers/anecdoteReducer";
import { createMessage } from "../reducers/notificationReducer"


const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const anecdoteContent = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(anecdoteContent))
        dispatch(createMessage(`New Anecdote Created! ${anecdoteContent}`), 20)
    }


    return(
      <div>
        <h2>Create new</h2>
        <form onSubmit={handleSubmit}>
            <div><input name="anecdote" /></div>
            <button type="submit">create</button>
        </form>
      </div>
    )
}

export default AnecdoteForm