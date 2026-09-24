import Image from "next/image";
import Link from "next/link";
import Logo from "../../../assets/logo.png"
import PlanButton from "../NavButtons/PlanButton";
import SavedButton from "../NavButtons/SavedButton";

const Navbar = () => {
    const NavLinks = <>
        <li><Link href={"/"}>Workouts</Link></li>
        <li><Link href={"/my-plan"}>My Plan</Link></li>
    </>
    return (
        <nav className="bg-slate-600">
            <div className="container mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {NavLinks}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src={Logo} alt="ibonfit logo" className=""></Image>
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