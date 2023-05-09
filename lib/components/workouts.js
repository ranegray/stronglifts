import WorkoutCard from "./workoutCard";
import { v4 as uuidv4 } from "uuid";

const Workouts = ({ workouts }) => {
  const options = { weekday: "short", month: "long", day: "numeric" };

  const today = new Date();

  const nextWorkout = new Date();
  nextWorkout.setDate(today.getDate() + 2);

  const nextNextWorkout = new Date();
  nextNextWorkout.setDate(today.getDate() + 4);

  const upcomingWorkouts = [
    {
      id: uuidv4(),
      today: true,
      date: today.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
      }),
      workout: workouts[workouts.length - 1],
    },
    {
      id: uuidv4(),
      date: nextWorkout.toLocaleDateString("en-US", options),
      workout: workouts[workouts.length - 2],
    },
    {
      id: uuidv4(),
      date: nextNextWorkout.toLocaleDateString("en-US", options),
      workout: workouts[workouts.length - 1],
    },
  ];

  return (
    <>
      <header>
        <h1 className="text-lg text-center font-bold m-2">STRONGLIFTS</h1>
      </header>
      <div className="flex-1">
        {upcomingWorkouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </>
  );
};

export default Workouts;
