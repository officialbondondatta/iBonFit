import Table from "@/app/components/Table";
import { IExercise } from "@/app/types/types";
import Image from "next/image";

interface IExerciseProps {
    params: Promise<{ exerciseid: string }>
}
const page = async ({ params }: IExerciseProps) => {
    let exercise: IExercise;
    const { exerciseid } = await params
    try {
        const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${exerciseid}`)

        if (!res.ok) {
            throw new Error("Data Fetching Error")
        }
        exercise = await res.json()
    } catch (error: unknown) {
        throw new Error(`Data fecthing error: ${error}`)
    }

    return (
        <section className="container mx-auto mt-5">
            <div className="grid grid-cols-2 gap-5">
                <div className="w-full">
                    <Image src={exercise.image} alt={`${exercise.name}`} className="w-full rounded-xl" width={600} height={600}></Image>
                </div>
                <div>
                    <div>
                        <h2>BARBELL BENCH PRESS</h2>
                        <p>A compound press that builds chest thickness, triceps, and pressing power
                            from a stable bench.</p>
                        <ul>
                            {exercise.muscleGroups.map((ex, index) => (
                                <li key={index}>{ex}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <Table exercise={exercise}></Table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;