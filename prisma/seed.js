const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Create a sample user
  const user = await prisma.user.create({
    data: {
      email: "user@example.com",
      password: "password123",
      workouts: {
        create: [
          {
            name: "Workout A",
            exercises: {
              create: [
                {
                  name: "Squat",
                  sets: 5,
                  reps: 5,
                  weight: 135,
                  unit: "lbs",
                },
                {
                  name: "Bench",
                  sets: 5,
                  reps: 5,
                  weight: 135,
                  unit: "lbs",
                },
                {
                  name: "Deadlift",
                  sets: 5,
                  reps: 5,
                  weight: 135,
                  unit: "lbs",
                },
              ],
            },
          },
          {
            name: "Workout B",
            exercises: {
              create: [
                {
                  name: "Squat",
                  sets: 5,
                  reps: 5,
                  weight: 135,
                  unit: "lbs",
                },
                {
                  name: "Overhead Press",
                  sets: 5,
                  reps: 5,
                  weight: 95,
                  unit: "lbs",
                },
                {
                  name: "Barbell Row",
                  sets: 5,
                  reps: 5,
                  weight: 115,
                  unit: "lbs",
                },
              ],
            },
          },
        ],
      },
    },
  });

  console.log("Sample user and property created:");
  console.log(JSON.stringify(user, null, 2));
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
