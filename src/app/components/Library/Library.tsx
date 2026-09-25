import { IExercise } from "@/app/types/types";
import ExerciseCard from "./ExerciseCard";
import Link from "next/link";
import SectionHeader from "../shared/SectionHeader";

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
    const sectionDetails = {
        title: "THE LIBRARY",
        subTitle: "Twelve lifts covering every major muscle group."
    }
    return (
        <section id="library">
            <div className="mt-10 py-5 lg:py-0">
                <SectionHeader details={sectionDetails}></SectionHeader>
                <div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-5 lg:gap-8 gap-2 md:gap-5 mt-5">
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
