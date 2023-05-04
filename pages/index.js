import { Inter } from "next/font/google";
import Workouts from "./workouts";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  const workouts = await prisma.workout.findMany({
    include: {
      exercises: true,
    },
  });

  return {
    props: { workouts: workouts },
  };
}

export default function Home({ workouts }) {
  return (
    <main>
      <Workouts workouts={workouts} />
    </main>
  );
}
