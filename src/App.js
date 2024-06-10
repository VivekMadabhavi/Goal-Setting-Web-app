import React, {useState} from "react";
import GoalList from "./components/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

import './App.css';

const App = () => {
  const [courseGoals,setCourseGoals] = useState([
    { id: 'cg1', text: 'MongoDB' },
    { id: 'cg2', text: 'Express.js' },
    { id: 'cg3', text: 'React.js' },
    { id: 'cg4', text: 'Node.js' },
  ]);

  const addNewGoalHandler = newGoal => {
    //setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };

  return (
    <div className="course-goals">
      <h1>Course Goals</h1>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
