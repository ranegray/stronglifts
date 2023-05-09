import { useState } from "react";

const SetButton = (props) => {
  const { workoutDetails, setWorkoutDetails } = props
  const [reps, setReps] = useState(5);
  const [clicked, setClicked] = useState(false);

  const handleClick = (e, exerciseName) => {
    e.target.classList.add("bg-red-600");
    e.target.classList.add("text-white");
    if (clicked) {
      setReps(reps - 1);
      setWorkoutDetails({...workoutDetails, exercises: workoutDetails.exercises.map(exercise => {
        if (exerciseName == exercise.name) {
          return {...exercise, reps: reps}
        } else {
          return exercise
        }
      })})
    } else {
      props.setRest((prevState) => !prevState);
      props.setSets(props.sets + 1);
      setWorkoutDetails({...workoutDetails, exercises: workoutDetails.exercises.map(exercise => {
        if (exerciseName == exercise.name) {
          return {...exercise, reps: 5, sets: props.sets, weight: props.exercise.weight + 5 }
        } else {
          return exercise
        }
      })})
    }

    if (props.started) {
      props.setRest((prevState) => !prevState);
    }
    
    props.setStarted(true);
    
    setClicked(true);
  };
  return (
    <button
      className="h-12 w-12 m-1 rounded-full text-neutral-500 bg-neutral-800"
      onClick={(e) => handleClick(e, props.exercise.name)}
    >
      {reps}
    </button>
  );
};

export default SetButton;
