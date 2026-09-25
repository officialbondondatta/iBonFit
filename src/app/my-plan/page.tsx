"use client"
import { useContext, useState } from "react";
import SectionHeader from "../components/shared/SectionHeader";
import { GymContext } from "../components/GymContext/GymContext";
import ExerciseStats from "../components/my-plan-helper/ExerciseStats";
import NoDataYet from "../components/my-plan-helper/NoDataYet";
import Image from "next/image";
import { LuClock4 } from "react-icons/lu";
import { VscFlame } from "react-icons/vsc";
import { IoMdFlame } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import Link from "next/link";
import { MdOutlineAddCard, MdOutlineDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

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
            <div className="max-w-300 mx-auto lg:px-5">
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
                <div className="mt-10 grid grid-cols-1 gap-5 rounded-2xl">
                    {
                        selectedTab === "plan" ?
                            sortedPlanData.length === 0 ? <NoDataYet></NoDataYet> : sortedPlanData.map((plan) => (
                                <div key={plan.id} className=" bg-slate-600 rounded-xl grid lg:grid-cols-2 grid-cols-1 lg:items-center lg:justify-center lg:gap-5 gap-2">
                                    <div className="flex flex-col lg:flex-row lg:items-center">
                                        <div className="lg:p-5 py-2 place-self-center">
                                            <Image src={plan.image} alt={`${plan?.name} image`} width={200} height={50} className="max-h-30 lg:p-0 p-2 lg:w-50 w-90 object-cover rounded-2xl"></Image>
                                        </div>
                                        <div className="px-5">
                                            <h2 className="text-xl font-semibold">{plan.name}</h2>
                                            <span className="text-sm">{plan.equipment}</span>
                                            <ul className="flex lg:gap-5 gap-2 items-center mt-2 text-sm">
                                                <li className="flex items-center gap-2 text-slate-200 font-semibold"><LuClock4 className="text-lime-400" />{plan.duration} min</li>
                                                <li className="flex items-center gap-2 text-slate-200 font-semibold"><VscFlame className="text-lime-400" />{plan.caloriesBurned} kcal</li>
                                                <li className="flex items-center gap-2 text-slate-200 font-semibold"><CiStar className="text-lime-400 font-bold text-lg" />{plan.rating}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex gap-5  justify-self-start lg:justify-self-end lg:pr-5 p-5">
                                        <div>
                                            <Link href={`/exercise/${plan.id}`} className="flex  justify-center cursor-pointer  items-center gap-2 border border-white text-white font-semibold lg:px-4 px-2 py-2 rounded-2xl">
                                                <span className="text-xs">
                                                    View Details
                                                </span>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href={"/"} className="flex  justify-center cursor-pointer  items-center gap-2 bg-lime-300 text-slate-800 font-semibold lg:px-4 px-2 py-2 rounded-2xl">
                                                <MdOutlineDone className="text-xl" />
                                                <span className="text-xs">
                                                    Mark as Done
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="flex items-center justify-center font-bold text-lg">
                                            <button><RxCross1 /></button>
                                        </div>
                                    </div>
                                </div>
                            ))
                            :
                            sortedSavedData.length === 0 ? <NoDataYet></NoDataYet> : sortedSavedData.map((saved) => (
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