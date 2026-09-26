import AddToTodaysPlanButton from "@/app/components/Buttons/ExcerciseDetailsButtons/AddToTodaysPlanButton";
import SaveForLaterButton from "@/app/components/Buttons/ExcerciseDetailsButtons/SaveForLaterButton";
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
        <section className=" mt-5 max-w-300 mx-auto lg:p-0 min-h-screen">
            <div className="grid  lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-20 gap-5 p-5">
                <div className="">
                    <Image src={exercise.image} alt={`${exercise.name}`} className="w-full object-cover lg:max-w-300  lg:min-h-screen md:min-h-screen rounded-xl" width={600} height={600}></Image>
                </div>
                <div className="">
                    <div className="space-y-5">
                        <h2 className="lg:text-4xl text-2xl font-bold">BARBELL BENCH PRESS</h2>
                        <p className="text-slate-300">A compound press that builds chest thickness, triceps, and pressing power
                            from a stable bench.</p>
                        <ul className="flex gap-5 mt-10">
                            {exercise.muscleGroups.map((ex, index) => (
                                <li className="bg-lime-400 text-slate-800 font-semibold px-3 py-1 rounded-full" key={index}>{ex}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="my-10">
                        <Table exercise={exercise}></Table>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mt-3">
                            INSTRUCTIONS
                        </h2>
                        <ol className="list-decimal list-outside ml-4 mt-3">
                            {exercise.instructions.map((ins, index) => (
                                <li className="font-semibold my-5 ml-1" key={index}>{ins}</li>
                            ))}
                        </ol>
                    </div>
                    <div className="mt-5 flex flex-col items-center lg:justify-start  justify-center lg:flex-row gap-5">
                        <AddToTodaysPlanButton excercise={exercise}></AddToTodaysPlanButton>
                        <SaveForLaterButton excercise={exercise}></SaveForLaterButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;