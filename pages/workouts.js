import WorkoutCard from "./workoutCard";

const Workouts = ({workouts}) => {
  return (
    <>
      <header>
        <h1>STRONGLIFTS</h1>
      </header>
      {workouts.map(workout => <WorkoutCard key={workout.id} workout={workout} />)}
      <nav></nav>
    </>
  );
};

export default Workouts;
