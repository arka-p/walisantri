import { Button } from "../components/button"
import { ArrowDown } from "lucide-react"


export function Section01({ scrollToSection03 }) {
    return (
        <div className="flex flex-col items-center gap-4 xl:gap-8 justify-center px-6 md:px-8 mx-auto max-w-screen-xl text-white pt-8 pb-20 md:pt-16 md:pb-36 xl:pb-72">
            <div className="text-2xl md:text-5xl xl:text-7xl md:px-24 xl:px-36 text-center font-bold">
                Kita dipertemukan oleh Allah untuk berkolaborasi
            </div>
            <div className="text-sm md:text-base text-center md:px-22 xl:px-48">
                Bersama, kita ingin memastikan tak ada satu pun anak muda yang kehilangan haknya untuk mencintai Al-Qur’an hanya karena keterbatasan biaya. Anda bisa jadi bagian penting dalam perjuangan ini.
            </div>
            <div className="flex gap-2 rounded-2xl px-5 py-3 md:py-4 mt-4 text-sm font-medium bg-white text-slate-900 hover:bg-slate-700 hover:text-white">
                <Button
                    onClick={scrollToSection03}
                    text="Mulai Sekarang" /><ArrowDown size={18} />
            </div>
        </div>
    )
}