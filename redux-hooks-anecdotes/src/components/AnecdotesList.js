import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import { createMessage } from "../reducers/notificationReducer"

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => {
      
      return state.anecdotes.filter( anecdote => anecdote.content.includes(state.filter))
    })

    const vote = (id) => {
      const anecdoteVotedOn = anecdotes.find(anecdote => anecdote.id === id)
      dispatch(addVote(id, anecdoteVotedOn))
      dispatch(createMessage(`You Voted! ${anecdoteVotedOn.content}`, 20))
    }

    const sortAnecdotes = () => {
      let sortedAnecdotes = anecdotes.sort((a,b) => b.votes - a.votes )
      return sortedAnecdotes
    }

    return(
        <div>
        {sortAnecdotes().map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
              </div>
            </div>
          )}
        </div>
        )
}

export default AnecdoteList