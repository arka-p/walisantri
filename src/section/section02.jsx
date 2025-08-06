import Foto from "/Wisuda.webp"

export function Section02() {
    return (
        <div className="bg-white flex justify-center relative">
            <img src={Foto}
                alt="Foto Wisuda"
                className="w-xs md:w-3xl xl:w-4xl rounded-xl absolute -top-10 md:-top-24 xl:-top-56" />
        </div>
    )
}