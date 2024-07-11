import React, {useState} from "react";
import GoalList from "./components/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

import './App.css';

const App = () => {
  const [courseGoals,setCourseGoals] = useState([
    { id: 'cg1', text: 'Clothes' },
    { id: 'cg2', text: 'Appliances' },
    { id: 'cg3', text: 'Shampoo' },
    { id: 'cg4', text: 'Soap' },
  ]);

  const addNewGoalHandler = newGoal => {
    //setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };

  return (
    <div className="course-goals">
      <h1>Product List</h1>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
