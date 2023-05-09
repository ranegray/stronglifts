import { useEffect, useState } from "react";
import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/router";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import ExerciseCard from "@/lib/components/exerciseCard";
import Timer from "@/lib/components/timer";

const prisma = new PrismaClient();

export async function getServerSideProps(context) {
  const workout = await prisma.workout.findMany({
    where: {
      id: Number(context.params.id),
    },
    include: {
      exercises: true,
    },
  });

  console.log(context.query.exercise);

  return {
    props: {
      workout: workout,
    },
  };
}

const Workout = ({ workout }) => {
  const router = useRouter();
  const [data] = workout;
  const [started, setStarted] = useState(false);
  const [rest, setRest] = useState(false);
  const [workoutDetails, setWorkoutDetails] = useState({});

  useEffect(() => {
    if (data.name === "Workout A") {
      setWorkoutDetails({
        name: "Workout A",
        exercises: [
          {
            name: "Squat",
            sets: 0,
            reps: 0,
            weight: 0,
          },
          {
            name: "Bench",
            sets: 0,
            reps: 0,
            weight: 0,
          },
          {
            name: "Deadlift",
            sets: 0,
            reps: 0,
            weight: 0,
          },
        ],
      });
    } else {
      setWorkoutDetails({
        name: "Workout B",
        exercises: [
          {
            name: "Squat",
            sets: 0,
            reps: 0,
            weight: 0,
          },
          {
            name: "Overhead Press",
            sets: 0,
            reps: 0,
            weight: 0,
          },
          {
            name: "Barbell Row",
            sets: 0,
            reps: 0,
            weight: 0,
          },
        ],
      });
    }
  }, []);

  const handleFinish = () => {
    fetch("/api/hello", {
      method: "POST",
      body: JSON.stringify(workoutDetails),
      headers: { "Content-Type": "application/json" },
    });

    router.push("/");
  };

  return (
    <>
      <div className="flex justify-between items-center m-4">
        <button type="button" onClick={() => router.back()}>
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <h1 className="font-semibold">{data.name}</h1>
        <button className="text-red-600 font-semibold" onClick={handleFinish}>
          Finish
        </button>
      </div>
      {data.exercises.map((exercise) => (
        <ExerciseCard
          key={exercise.id}
          exercise={exercise}
          setStarted={setStarted}
          started={started}
          setRest={setRest}
          rest={rest}
          workoutDetails={workoutDetails}
          setWorkoutDetails={setWorkoutDetails}
        />
      ))}
      {started ?
        (rest ? (
          <Timer key={Date.now()} setRest={setRest} />
        ) : (
          null
        )) : null}
    </>
  );
};

export default Workout;
