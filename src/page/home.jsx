import { useRef } from "react";
import { Section01 } from "../section/section01"
import { Section02 } from "../section/section02"
import { Section03 } from "../section/section03"
import { Section04 } from "../section/section04"
import { Section05 } from "../section/section05"
import { Section06 } from "../section/section06"
import { Section07 } from "../section/section07"
import { Galeri } from "../section/galeri";

export function Home() {
    const section03Ref = useRef(null);

    // Fungsi scroll
    const scrollToSection03 = () => {
        section03Ref.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <>
            <div className="bg-gradient-to-r from-cyan-700 md:from-cyan-500 to-sky-950 h-full w-full">
                <Section01 scrollToSection03={scrollToSection03} />
            </div>
            <div className="h-42 md:h-92">
                <Section02 />
            </div>
            <Section03 ref={section03Ref} />
            <Section04 />
            <Section05 />
            <Galeri />
            <Section07 />
            <Section06 />

        </>
    )
}
