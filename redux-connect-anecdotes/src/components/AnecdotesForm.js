import React from "react";
import { connect } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { createMessage } from "../reducers/notificationReducer"


const AnecdoteForm = (props) => {

    const handleSubmit = async (event) => {
        event.preventDefault()
        const anecdoteContent = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.createAnecdote(anecdoteContent)
        props.createMessage(`New Anecdote Created! ${anecdoteContent}`, 50)
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

const mapDispatchToProps = {
  createAnecdote, createMessage
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)