import React from "react";
import { connect } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import { createMessage } from "../reducers/notificationReducer"

const AnecdoteList = (props) => {

    const vote = (id) => {
      const anecdoteVotedOn = props.anecdotes.find(anecdote => anecdote.id === id)
      props.addVote(id, anecdoteVotedOn)
      props.createMessage(`You Voted! ${anecdoteVotedOn.content}`, 50)
    }

    const sortAnecdotes = () => {
      let sortedAnecdotes = props.anecdotes.sort((a,b) => b.votes - a.votes )
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

const mapStateToProps = (state) => {
  return { 
    anecdotes: state.anecdotes.filter( anecdote => anecdote.content.includes(state.filter)) 
  }
}

const mapDispatchToProps = {
  addVote, createMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)