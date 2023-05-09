import Link from "next/link";

const WorkoutCard = ({ workout }) => {
  console.log(workout);

  return (
    <div
      className={`p-2 bg-neutral-900 m-2 rounded-md ${
        workout.today ? "border-l-2 border-l-red-600" : null
      }`}
    >
      <Link href={`/workout/${workout.workout.id}`}>
        <div className="flex justify-between text-neutral-500 text-sm">
          <h2>{workout.workout.name}</h2>
          {workout.today ? (
            <h2>Today, {workout.date}</h2>
          ) : (
            <h2>{workout.date}</h2>
          )}
        </div>
        {workout.workout.exercises.map((exercise) => (
          <div
            key={exercise.id}
            className="flex justify-between py-0.5 border-b-neutral-800 border-b"
          >
            <h3>{exercise.name}</h3>
            <div>
              3x5 {exercise.weight + 5}
              {exercise.unit}
            </div>
          </div>
        ))}
      </Link>
    </div>
  );
};

export default WorkoutCard;
