/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [goals, setGoals] = useState([]);
  useEffect(() => {
    // axios.get('http://localhost:5000/api/goals')
    //   .then(res => {
    //     setGoals(res.data.goals);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    axios.get('http://localhost:5000/api/goals')
      .then(res => {
        // console.log(res.data.goals);
        setGoals(res.data.goals);
      })
      .catch(err => {console.log(err);})
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/goals', { text: inputValue })
      .then(res => {
        setGoals([...goals, res.data.goal]);
        setInputValue('');
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <>
       <div>
      {goals.map(goal => (
        <div key={goal._id}>
          <h1>{goal.text}</h1>
        </div>
      ))}
    </div>
    <form onSubmit={handleSubmit}>
    <input type="text" name="" id="" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <input type="submit" value="Add" />
    </form>
    </>
  )
}

export default App
