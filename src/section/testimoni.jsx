import { Users } from "lucide-react"
import { Gift } from "lucide-react"

export function Testimoni() {
    return (
        <div className="py-8 bg-white ">
            <div className="mx-auto max-w-screen-xl p-6 xl:p-16 space-y-4">
                <div className="text-3xl md:text-5xl font-extrabold text-center pb-8">
                    Jejak Kebaikan
                </div>
                <div className="bg-pink-100 py-8 rounded-xl sm:px-12">
                    <div className="space-y-4 xl:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2 gap-4 md:gap-0 xl:gap-4">
                        <div className="mx-4 xl:mx-0 rounded-xl md:col-span-2 xl:row-span-2">
                            <video
                                className="w-full aspect-video rounded-xl"
                                src="/Testimoni.webm"
                                poster="/thumbnail.jpg"
                                preload="metadata"
                                playsInline
                                //autoPlay
                                controls
                            />
                        </div>
                        <div className="grid justify-items-center bg-white rounded-xl text-center p-8 xl:p-6 mx-4 xl:mx-0 md:h-full">
                            <Users
                                className="bg-pink-500 p-3 h-auto w-12 rounded-xl mb-2"
                                size={36}
                                color="white" />
                            <div className="font-semibold">
                                Sebanyak 140 santri dari 10 provinsi telah merasakan Manfaatnya
                            </div>
                        </div>
                        <div className="grid justify-items-center bg-white rounded-xl text-center p-8 xl:p-6 mx-4 xl:mx-0 md:h-full">
                            <Gift
                                className="bg-pink-500 p-3 h-auto w-12 rounded-xl mb-2"
                                size={36}
                                color="white" />
                            <div className="font-semibold">
                                8 tahun berkiprah untuk pendidikan Al-Qur’an, bantu kami untuk terus bertahan
                            </div>
                        </div>                    
                    </div>
                </div>

            </div>
        </div>
    )
}