import React, { useState } from 'react';

export default function Login({ websocket }) {
  const [queryMessage, setQueryMessage] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    const message = { type: "message", message: JSON.stringify(queryMessage) }
    const string = JSON.stringify(message)
    console.log(string);
    websocket.send(string)
  };

  return (
    <div className='message-container'>
      <img className='logo' src='/assets/images/logo.svg' />
      <form className='login' onSubmit={onSubmit}>
        <div className='input'>
          <input
            id='message'
            name='message'
            className='message-input'
            value={queryMessage}
            onChange={e => setQueryMessage(e.target.value)}
            type='text'></input>
        </div>
      </form>
    </div>
  );
}
