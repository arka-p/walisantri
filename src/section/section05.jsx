import { Utensils, BookOpenText, House } from "lucide-react";
import { BigIcon, } from "../components/bigIcon";


export function Section05() {
    return (
        <div className="py-8 bg-white ">
            <div className="mx-auto max-w-screen-xl p-6 xl:p-16 space-y-4">
                <div className="text-3xl md:text-5xl font-extrabold text-center pb-8">
                    Transparansi Penyaluran
                </div>

                <div className="sm:grid sm:grid-cols-3 gap-3 bg-blue-50 py-8 rounded-xl sm:px-4">
                    <BigIcon
                        icon={Utensils}
                        sizeIcon={72}
                        Width={2}
                        title={"Kebutuhan Harian Santri"}
                        paragraph={<ul className="list-disc xl:list-inside">
                            <li>Makan 3x sehari</li>
                            <li>Air minum</li>
                            <li>Biaya Kebersihan</li>
                        </ul>}
                    />                    
                    <BigIcon
                        icon={BookOpenText}
                        sizeIcon={72}
                        Width={2}
                        title={"Pendidikan & Sarana Belajar"}
                        paragraph={<ul className="list-disc xl:list-inside">
                            <li>Buku pelajaran & alat tulis</li>
                            <li>Seragam santri</li>
                            <li>Insentif tenaga pendidik </li>
                        </ul>}
                    />                    
                    <BigIcon
                        icon={House}
                        sizeIcon={72}
                        Width={2}
                        title={"Biaya Operasional Pesantren"}
                        paragraph={<ul className="list-disc xl:list-inside">
                            <li>Listrik dan air</li>
                            <li>Perawatan fasilitas</li>
                            <li>Biaya kebersihan umum</li>
                        </ul>}
                    />
                </div>
            </div>
        </div>
    )
}
