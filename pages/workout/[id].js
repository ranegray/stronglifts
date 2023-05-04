import { useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Workout = ({ workout }) => {
  const router = useRouter();
  const { id } = router.query;
  const [data] = workout;

  console.log(data)

  return (
    <>
      <div>
        {data.name}
      </div>
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
