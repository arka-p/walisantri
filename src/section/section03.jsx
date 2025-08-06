import { ChecklistIcon } from "../components/checlistIcon"
import React, { forwardRef } from "react";
import { CardIcon } from "../components/cardIcon"

export const Section03 = forwardRef((props, ref) => {
    return (
        <div className="bg-white pb-16 px-3">
            <div ref={ref} className="px-4 py-8 md:p-12 mx-auto max-w-screen-xl bg-pink-100 rounded-xl md:rounded-2xl">
                <div className="flex items-center gap-2 pb-4 md:pb-8">
                    <div className="border-l-8 border-pink-500 h-8"></div>
                    <div className="text-sm text-stone-400 font-semibold">Apa itu Orang Tua Asuh?</div>
                </div>
                <div className="grid xl:grid-cols-3 gap-12">
                    <div className="xl:col-span-1 space-y-4">

                        <div className="text-3xl md:text-5xl font-extrabold">Kontribusi Kepada Pendidikan</div>
                        <div className="text-sm md:text-base text-stone-500">Program ini menjadi jembatan antara dua golongan mulia yang dipuji Rasulullah: Ahli Al-Qur’an dan Ahli Sedekah. Para santri berjuang dengan waktu dan tenaga mereka demi menghafal firman Allah. Anda bisa membersamai jihad mereka—dengan menafkahkan sebagian dari harta yang Allah titipkan.</div>
                    </div>
                    <div className="xl:col-span-2 space-y-6">
                        <div className="text-3xl md:text-5xl  font-extrabold">Manfaat Bergabung</div>

                        <div className="grid md:grid-cols-3 gap-3">
                            <div>
                                <CardIcon title={"Mendapatkan Pahala Jariyyah"} Content={"Pahala terus mengalir setiap kali para santri membaca, menghafal, dan mengamalkan Al-Qur’an."} />
                            </div>
                            <div>
                                <CardIcon title={"Didoakan Penghafal Qur’an"} Content={"InsyaAllah, doa para penghafal Qur’an menjadi wasilah terkabulnya hajat dan dimudahkan segala urusan."} />
                            </div>
                            <div>
                                <CardIcon title={"Mengundang Keberkahan Hidup"} Content={"Bergabung dalam kebaikan Insya Allah membuka pintu keberkahan untuk harta, keluarga, dan kehidupan."} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
});