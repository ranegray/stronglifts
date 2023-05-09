import Workouts from "../lib/components/workouts";
import BottomNav from "@/lib/components/BottomNav";
import { useState, useEffect } from "react";

export default function Home() {
  const [view, setView] = useState(0);
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setWorkouts([...workouts, ...data]));
  }, []);

  return (
    <main className="h-screen flex flex-col">
      {workouts.length > 0 ? <Workouts workouts={workouts} /> : <h1 className="text-xl flex justify-center">Loading...</h1>}

      <BottomNav view={view} setView={setView} />
    </main>
  );
}
