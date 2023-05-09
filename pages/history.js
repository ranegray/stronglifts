import BottomNav from "@/lib/components/BottomNav";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function Home() {
  const [view, setView] = useState(0);
  const [workouts, setWorkouts] = useState([])

  const handleDelete = (workoutId) => {
    setWorkouts(workouts.filter(workout => workout.id != workoutId))

    fetch("/api/hello", {
      method: "DELETE",
      body: JSON.stringify({id: workoutId}),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    fetch('/api/hello').then(res => res.json()).then(data => setWorkouts([...workouts, ...data]))
  }, [])

  console.log(workouts);
  return (
    <main className="h-screen">
      {workouts.map((workout) => {
        return (
          <div key={workout.id}>
            <h2>{workout.name}</h2>
            {workout.exercises.map((exercise) => (
              <div key={exercise.id} className="flex justify-between">
                <p>{exercise.name}</p>
                <p>
                  {exercise.sets}x{exercise.reps} {exercise.weight}
                  {exercise.unit}
                </p>
              </div>
            ))}
            <button type="button" onClick={() => handleDelete(workout.id)}>
              <TrashIcon className="h-6 w-6" />
            </button>
          </div>
        );
      })}
      <BottomNav view={view} setView={setView} />
    </main>
  );
}
