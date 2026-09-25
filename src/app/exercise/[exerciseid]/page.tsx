import Table from "@/app/components/Table";
import { IExercise } from "@/app/types/types";
import Image from "next/image";
import { MdOutlineAddCard } from "react-icons/md";
import { RiBookmarkLine } from "react-icons/ri";

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
        <section className="container mx-auto mt-5 p-5 lg:p-0">
            <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-5">
                <div className="w-full">
                    <Image src={exercise.image} alt={`${exercise.name}`} className="w-full rounded-xl" width={600} height={600}></Image>
                </div>
                <div>
                    <div className="space-y-3">
                        <h2 className="text-4xl font-bold">BARBELL BENCH PRESS</h2>
                        <p className="text-slate-300">A compound press that builds chest thickness, triceps, and pressing power
                            from a stable bench.</p>
                        <ul className="flex gap-5">
                            {exercise.muscleGroups.map((ex, index) => (
                                <li className="bg-lime-400 text-slate-800 font-semibold px-3 py-1 rounded-full" key={index}>{ex}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <Table exercise={exercise}></Table>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mt-5">
                            INSTRUCTIONS
                        </h2>
                        <ol className="list-decimal list-outside ml-4 mt-3">
                            {exercise.instructions.map((ins, index) => (
                                <li className="font-semibold my-3" key={index}>{ins}</li>
                            ))}
                        </ol>
                    </div>
                    <div className="mt-4 flex gap-5">
                        <button className="flex  items-center gap-2 bg-lime-300 text-slate-800 font-semibold px-4 py-2 rounded-xl">
                            <MdOutlineAddCard className="text-xl" />
                            <span>
                                Add to today&apos;s plan
                            </span>
                        </button>
                        <button className="flex  items-center gap-2 border border-white text-white font-semibold px-4 py-2 rounded-xl">
                            <RiBookmarkLine className="text-xl" />
                            <span>
                                Save for later
                            </span>
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;