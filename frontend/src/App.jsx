/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
 
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
  return (
    <>
       <div>
      {goals.map(goal => (
        <div key={goal._id}>
          <h1>{goal.text}</h1>
        </div>
      ))}
    </div>
    </>
  )
}

export default App
