import { useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Workout = ({ workout }) => {
  const router = useRouter();
  const { id } = router.query;

  console.log(workout[0].exercises);

  return (
    <>
      <div>Workout {id}</div>
    </>
  );
};

export async function getServerSideProps() {
  const workout = await prisma.workout.findMany({
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
