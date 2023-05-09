import { useState } from "react";
import SetButton from "./setButton";

const ExerciseCard = ({
  exercise,
  setRest,
  rest,
  setStarted,
  started,
  workoutDetails,
  setWorkoutDetails,
}) => {
  const [sets, setSets] = useState(0);

  return (
    <div className="pt-2 flex flex-col">
      <div className="flex justify-between mx-4">
        <h3>{exercise.name}</h3>
        <div>
          3x5 {exercise.weight + 5}
          {exercise.unit}
        </div>
      </div>
      <div className="mx-3 flex">
        {[...Array(3)].map((_, index) => (
          <SetButton
            key={index}
            exercise={exercise}
            reps={exercise.reps}
            sets={sets}
            rest={rest}
            setSets={setSets}
            setRest={setRest}
            setStarted={setStarted}
            started={started}
            workoutDetails={workoutDetails}
            setWorkoutDetails={setWorkoutDetails}
          />
        ))}
        <button
      className="h-12 w-12 m-1 rounded-full text-neutral-500 bg-neutral-900"
    >
      +
    </button>
      </div>
    </div>
  );
};

export default ExerciseCard;
