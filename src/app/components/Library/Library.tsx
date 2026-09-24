import { IExercise } from "@/app/types/types";
import ExerciseCard from "./ExerciseCard";
import Link from "next/link";

const Library = async () => {
    let exerciseData: IExercise[] = []
    try {
        const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
        if (!res.ok) {
            throw new Error("Found error while fetching data")
        }
        exerciseData = await res.json()
    } catch (error: unknown) {
        throw new Error(`Data Fetching Error:  ${error}`)
    }
    return (
        <section id="library">
            <div className="container mx-auto mt-10 p-5 lg:p-0">
                <div className="flex flex-col space-y-2">
                    <h2 className="text-2xl font-semibold">THE LIBRARY</h2>
                    <p>Twelve lifts covering every major muscle group.</p>
                </div>
                <div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                        {exerciseData.map(exercise => (
                            <Link key={exercise.id} href={`/exercise/${exercise.id}`}>
                                <ExerciseCard exercise={exercise}></ExerciseCard>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Library;