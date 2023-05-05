import { useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";
import ExerciseCard from "@/lib/components/exerciseCard";

const prisma = new PrismaClient();

const Workout = ({ workout }) => {
  const router = useRouter();
  const { id } = router.query;
  const [data] = workout;

  console.log(data);

  return (
    <>
      <h1 className="font-semibold text-center mb-5">{data.name}</h1>
      {data.exercises.map((exercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
    </>
  );
};

export async function getServerSideProps(context) {
  const workout = await prisma.workout.findMany({
    where: {
      id: Number(context.params.id),
    },
    include: {
      exercises: true,
    },
  });

  return {
    props: {
      workout: workout,
    },
  };
}

export default Workout;
