"use client"
import { useContext, useState } from "react";
import SectionHeader from "../components/shared/SectionHeader";
import { GymContext } from "../components/GymContext/GymContext";
import ExerciseStats from "../components/my-plan-helper/ExerciseStats";

const MyPlanPage = () => {
    const sectionDetails = {
        title: "MY PLAN",
        subTitle: "Cap of five lifts for today. Finish them, then load more."
    }
    const { plan, saved } = useContext(GymContext)
    const [selectedTab, setSelectedTab] = useState<"plan" | "saved">("plan")

    const [sortOption, setSortOption] = useState("duration")
    const sortedPlanData = [...plan].sort((a, b) => {
        switch (sortOption) {
            case "duration":
                return a.duration - b.duration
            case "calories":
                return a.caloriesBurned - b.caloriesBurned
            case "rating":
                return b.rating - a.rating

            default:
                return 0
        }
    })
    const sortedSavedData = [...saved].sort((a, b) => {
        switch (sortOption) {
            case "duration":
                return a.duration - b.duration
            case "calories":
                return a.duration - b.duration
            case "rating":
                return b.rating - a.rating

            default:
                return 0
        }
    })


    return (
        <section className="p-6 min-h-screen mt-10">
            <div className="max-w-300 mx-auto px-5">
                <div className="lg:mb-10 mb-5">
                    <SectionHeader details={sectionDetails}></SectionHeader>
                </div>
                <div>
                    <div>
                        <ExerciseStats selectedTab={selectedTab}></ExerciseStats>
                    </div>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-5 items-center justify-between">
                        <div className="flex gap-2 bg-slate-600 max-w-50 items-center justify-center py-2 rounded-xl">
                            <button onClick={() => setSelectedTab("plan")} className={` px-2 py-1 rounded-xl ${selectedTab === "plan" ? "text-lime-400 bg-slate-800 " : "text-slate-400 "}  font-semibold`}>Today&apos;s Plan</button>
                            <button onClick={() => setSelectedTab("saved")} className={` px-2 py-1 rounded-xl ${selectedTab === "saved" ? "text-lime-400 bg-slate-800 " : "text-slate-400 "}  font-semibold`}>Saved</button>
                        </div>
                        <div className="mt-2 flex lg:items-center md:items-center flex-col md:flex-row md:justify-end-safe lg:flex-row lg:gap-2  lg:justify-end-safe">
                            <h2 className="my-1 font-semibold md:text-xs xl:text-lg lg:text-lg">Sort By</h2>
                            <select onChange={(e) => setSortOption(e.target.value)} defaultValue="Duration" className="select max-w-80 rounded-xl">
                                <option value="duration">Duration</option>
                                <option value="calories">Calories</option>
                                <option value="rating">Rating</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className=" bg-slate-600 mt-10 rounded-2xl">
                    {
                        selectedTab === "plan" ?
                            sortedPlanData.map((plan) => (
                                <div key={plan.id}>
                                    <h1>{plan.name}</h1>
                                    <span>{plan.duration}</span>
                                    <span className="ml-5">{plan.caloriesBurned}</span>
                                    <span className="ml-5">{plan.rating}</span>
                                </div>
                            ))
                            :
                            sortedSavedData.map((saved) => (
                                <div key={saved.id}>
                                    <h1>{saved.name}</h1>
                                    <span>{saved.duration}</span>
                                </div>
                            ))
                    }
                </div>
            </div>
        </section>
    );
};

export default MyPlanPage;