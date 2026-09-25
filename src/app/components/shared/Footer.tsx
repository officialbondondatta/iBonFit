import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png"
const Footer = () => {
    return (
        <footer className="bg-slate-700 p-5 mt-15">
            <div className="max-w-300 mx-auto flex items-center space-y-3 lg:flex-row flex-col justify-center lg:justify-between">
                <div className="flex items-center gap-1">
                    <Image src={Logo} alt="ibonfit logo" className="h-5 w-5"></Image>
                    <Link href={"/"} className=" font-bold text-lg">
                        iBonFit
                    </Link>
                </div>
                <div>
                    <h2 className="text-slate-200 text-sm lg:text-center">© 2026 FitLog — Workout Library. Train hard, log honest.</h2>
                </div>
            </div>
        </footer>
    );
};

export default Footer;