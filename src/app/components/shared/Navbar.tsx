import Image from "next/image";
import Link from "next/link";
import Logo from "../../../assets/logo.png"
import PlanButton from "../NavButtons/PlanButton";
import SavedButton from "../NavButtons/SavedButton";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const NavLinks = <>
        <li><Link href={"/"}>Workouts</Link></li>
        <li><Link href={"/my-plan"}>My Plan</Link></li>
    </>
    return (
        <nav className="bg-slate-600">
            <div className="w-full max-w-300 mx-auto navbar px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <RxHamburgerMenu className="text-2xl text-lime-300" />
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-lime-200 z-50 font-semibold text-slate-600 mt-3 -ml-2 w-screen">
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
