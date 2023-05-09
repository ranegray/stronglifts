// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function workout(req, res) {
  console.log(req.body);

  if (req.method === "POST") {
    try {
      const { name, exercises } = req.body;

      const workout = await prisma.workout.create({
        data: {
          userId: 1,
          name: name,
          exercises: {
            create: [
              {
                name: exercises[0].name,
                sets: exercises[0].sets,
                reps: exercises[0].reps,
                weight: exercises[0].weight,
                unit: "lbs",
              },
              {
                name: exercises[1].name,
                sets: exercises[1].sets,
                reps: exercises[1].reps,
                weight: exercises[1].weight,
                unit: "lbs",
              },
              {
                name: exercises[2].name,
                sets: exercises[2].sets,
                reps: exercises[2].reps,
                weight: exercises[2].weight,
                unit: "lbs",
              },
            ],
          },
        },
      });
      res.status(200).json(workout);
    } catch (error) {
      res.status(500).json({ message: `Something went wrong: ${error}` });
    }
  } else if (req.method === "DELETE") {
    try {
      const deleteWorkout = await prisma.workout.delete({
        where: {
          id: req.body.id,
        },
      });
      res.json(200).json(deleteWorkout);
    } catch (error) {
      res.status(500).json({ message: `Something went wrong: ${error}` });
    }
  } else if (req.method === "GET") {
    try {
      const getWorkouts = await prisma.workout.findMany({
        include: {
          exercises: true,
        },
      });
      res.status(200).json(getWorkouts);
    } catch (error) {
      res.status(500).json({ message: `Something went wrong: ${error}` });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} not supported` });
  }
}
