import { Heart } from 'lucide-react';
import { Button } from "../components/button"

export function Section07() {
    return (
        <div className="bg-pink-100 pt-8 pb-16">
            <div className="mx-auto max-w-screen-xl px-4 xl:p-16">
                <div className="text-3xl md:text-5xl font-extrabold text-center py-8">
                    Karena Kebaikan Harus Disegerakan
                </div>
                <div className="p-1 flex justify-center">
                    <div className="w-auto flex justify-center gap-2 rounded-xl md:rounded-2xl p-4 text-xs md:text-sm font-medium bg-pink-500 text-white hover:bg-cyan-500">
                        <Button
                            text="Klik Untuk Bergabung"
                            url='/formulir'
                        /><Heart size={18} />
                    </div>
                </div>


            </div>

        </div>
    )
}