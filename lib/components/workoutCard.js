import Link from "next/link";

const WorkoutCard = ({ workout }) => {
  console.log(workout);
  return (
    <div className="pt-2">
        <Link href={`/workout/${workout.id}`}>
          <div>
            <h2>{workout.name}</h2>
          </div>
          {workout.exercises.map((exercise) => (
            <div key={exercise.id} className="flex justify-between">
              <h3>{exercise.name}</h3>
              <div>
                {exercise.sets}x{exercise.reps} {exercise.weight}
                {exercise.unit}
              </div>
            </div>
          ))}
        </Link>
    </div>
  );
};

export default WorkoutCard;
