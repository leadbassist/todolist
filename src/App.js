import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { FormControl, Input, InputLabel } from '@mui/material';
import Todo from './Todo';
import './App.css';
import db from './firebase';
import firebase from 'firebase/compat/app';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  // useEffect(() => {function}, dependencies);
  useEffect(() => {
    // this code here... fires when the app.js loads
    db.collection('todos').onSnapshot(snapshot => {
      // get ALL the values under the key ".todo" which comes inside DATA, 
      // convert these values into an ARRAY,
      // then SET that array with "todos" state so that its FILLED.
      // essentially, we just got all the info from firestore and loaded them onto our app
      setTodos(snapshot.docs.map(doc => doc.data().todo))
      
    })

  }, []);

  const addToDo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); // will stop the auto-page-refresh
    
    // adding thingsd to firebase db
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput(''); // will blank the input box after clicking button
  }

  return (
    <div className="App">
      <h1>Testing</h1>
      <form>
        {/* replacing the default <input> with the dynamic and sexier <input> label using FormControl. taken from MUI docs */}
        <FormControl>
          <InputLabel>write a todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>

        <Button disabled={!input} type="submit" onClick={addToDo} variant="contained">Add To-do</Button>
        {/* disabled={!input} will disable the button IF input field is BLANK */}
      </form>
      
      <ul>
        {todos.map(todo => (
          <Todo text={todo} />
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
