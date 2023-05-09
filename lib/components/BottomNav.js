import { CalendarDaysIcon, FireIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const BottomNav = ({ view, setView }) => {
  return (
    <nav className="flex justify-center items-end">
      <Link href={'/'} className={`flex flex-col items-center text-sm p-2`}>
        <FireIcon className="h-6 w-6" />
        Workout
      </Link>
      <Link href={'/history'} className="flex flex-col items-center text-sm p-2">
        <CalendarDaysIcon className="h-6 w-6" />
        History
      </Link>
    </nav>
  );
};

export default BottomNav;
