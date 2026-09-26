"use client"
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../assets/logo.png"

import { RxHamburgerMenu } from "react-icons/rx";
import PlanButton from "../Buttons/NavButtons/PlanButton";
import SavedButton from "../Buttons/NavButtons/SavedButton";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname()
    const NavLinks = <>
        <ul className="flex gap-2">
            <li><Link href={"/"} className={`${pathName === "/" ? "bg-lime-400 text-slate-700 font-semibold" : ""}`}>Workout</Link></li>
            <li><Link href={"/my-plan"} className={`${pathName === "/my-plan" ? "bg-lime-400 text-slate-700 font-semibold" : ""}`} >My Plan</Link></li>
        </ul>
    </>
    return (
        <nav className="bg-slate-800">
            <div className="w-full max-w-300 mx-auto navbar px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <RxHamburgerMenu className="-ml-5 text-2xl text-lime-300" />
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-lime-200 z-50 font-semibold text-slate-600 mt-3 -ml-5 w-screen">
                            {NavLinks}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src={Logo} alt="ibonfit logo" className="h-6 w-6"></Image>
                        <Link href={"/"} className=" font-bold text-xl">
                            iBonFit
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end flex gap-5">
                    <PlanButton></PlanButton>
                    <SavedButton></SavedButton>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
