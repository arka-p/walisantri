import { Faq } from "../components/fax"

export function Section06() {
    return (
        <div className="bg-stone-100">
            <div className="mx-auto max-w-screen-xl p-6 xl:p-16">
                <div className="text-3xl md:text-5xl font-extrabold text-center py-8">
                    Pertanyaan Umum
                </div>
                <div className="p-1">
                    <div class="rounded-xl mx-auto max-w-screen-xl md:px-16">
                        <Faq
                            ask={"Berapa nominal sedekah per bulan untuk membiayai 1 santri?"}
                            question={"✅ Rp1.500.000 per bulan dibutuhkan untuk membiayai satu santri secara penuh. Namun, sahabat tidak harus menanggung sendiri. Sahabat bisa memilih opsi patungan bersama para muhsinin lainnya, agar kebaikan ini bisa dirasakan lebih luas."}
                            open={true}
                        />
                        <Faq
                            ask={"Berapa saja pilihan nominal jika ingin ikut patungan?"}
                            question={<>
                                ✅ Rp150.000 <br />
                                ✅ Rp300.000 <br />
                                ✅ Rp500.000 <br />
                                ✅ Rp1.000.000 <br />
                                Setiap kontribusi sahabat sangat berarti dan akan digabungkan dengan mukhsinin lain untuk membiayai kebutuhan santri.
                            </>}
                        />
                        <Faq
                            ask={"Bagaimana cara bergabung menjadi wali santri / orang tua asuh?"}
                            question={<>
                                Sangat mudah! <br />
                                ✅ Klik tombol BERGABUNG di atas. <br />
                                ✅ Isi data yang dibutuhkan. <br />
                                ✅ Transfer sesuai nominal yang sahabat pilih. <br />
                                ✅ Kirim dan tunggu balasan admin<br />
                                Kami akan mengirimkan update berkala tentang santri yang sahabat bantu.
                            </>}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}