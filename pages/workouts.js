import WorkoutCard from "../lib/components/workoutCard";

const Workouts = ({ workouts }) => {
  return (
    <>
      <header>
        <h1>STRONGLIFTS</h1>
      </header>
      <div className="h-full">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
      <nav>
        <buttton type="button" className="text-red-600">Edit</buttton>
      </nav>
    </>
  );
};

export default Workouts;
