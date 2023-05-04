import Link from "next/link";

const WorkoutCard = ({ workout }) => {
  return (
    <div>
      <Link href={`/workout/${workout.id}`}>
          <h2>{workout.name}</h2>
      </Link>
      {workout.exercises.map((exercise) => (
        <div key={exercise.id} className="flex justify-between">
            <h3>{exercise.name}</h3>
            <div>{exercise.sets}x{exercise.reps} {exercise.weight}{exercise.unit}</div>
        </div>
      ))}
    </div>
  );
};

export default WorkoutCard;
