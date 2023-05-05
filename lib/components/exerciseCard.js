const ExerciseCard = ({ exercise }) => {
  return (
    <div className="pt-2 flex flex-col">
      <div className="flex justify-between mx-4">
        <h3>{exercise.name}</h3>
        <div>
          {exercise.sets}x{exercise.reps} {exercise.weight}
          {exercise.unit}
        </div>
      </div>
      <div className="mx-3">
        {[...Array(exercise.sets)].map((_, index) => (
          <button
            key={index}
            className="h-16 w-16 m-1 rounded-full bg-neutral-700"
          >
            {exercise.reps}
          </button>
        ))}
        <button className="h-16 w-16 m-1 rounded-full bg-neutral-700">+</button>
      </div>
    </div>
  );
};

export default ExerciseCard;
