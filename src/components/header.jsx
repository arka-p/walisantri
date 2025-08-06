import { Link } from "react-router-dom";
import { Heart } from 'lucide-react';
import { Tautan } from "./tautan";
import Logo from "/Logo.webp"

export function Header() {
    return (
        <div className="bg-gradient-to-r from-cyan-700 md:from-cyan-500 to-sky-950 h-full w-full md:py-2">
            <div className="md:p-4 mx-auto max-w-screen-xl">
                <div className="py-2 px-3 md:py-4 md:px-10 bg-gradient-to-r from-slate-800 to-stone-800 text-white md:rounded-t-xl">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-4">
                            <Link to="/">
                                <img
                                    src={Logo}
                                    className="h-10 md:h-14"
                                />
                            </Link>
                            <Link to="/">
                                <div className="text-2xl font-semibold hidden md:block">
                                    Mahad Tahfdiz Al-Fath
                                </div>
                            </Link>

                        </div>


                        <Link to="/formulir">
                        <div className="flex items-center h-full gap-1 rounded-xl md:rounded-2xl px-4 md:px-5 text-xs md:text-sm font-medium bg-pink-500 text-white hover:bg-cyan-500">
                                <div>Gabung Sekarang</div><Heart size={18} />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="py-2 px-8 bg-stone-600 rounded-b-xl hidden md:block">
                    <div className="flex gap-10 justify-center h-8">
                        <Tautan Text="Beranda" Url="/" />
                        <Tautan Text="Masjid Al-Fath" Url="https://masjidalfath.org/" />
                        <Tautan Text="BisaHafalQuran" Url="https://bisahafalquran.com/" />
                    </div>
                </div>
            </div>
        </div>
    )
}

