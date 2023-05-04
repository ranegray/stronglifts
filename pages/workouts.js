import WorkoutCard from "../lib/components/workoutCard";

const Workouts = ({ workouts }) => {
  return (
    <>
      <header>
        <h1>STRONGLIFTS</h1>
      </header>
      <div>
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
      <nav></nav>
    </>
  );
};

export default Workouts;
