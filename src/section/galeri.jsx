import React from "react";

export function Galeri() {
    const images1 = [
        "/img10.webp",
        "/img12.webp",
        "/img13.webp",
        "/img14.webp",
        "/img15.webp",
        "/img16.webp",
        "/img17.webp",
        "/img18.webp",
    ];
    const images2 = [
        "/img19.webp",
        "/img20.webp",
        "/img21.webp",
        "/img22.webp",
        "/img23.webp",
        "/img24.webp",
        "/img25.webp",
        "/img26.webp",
    ];

    return (
        <div className="bg-purple-100 py-14 md:py-24">
                    <div className="mx-auto max-w-screen-3xl space-y-6 overflow-hidden">
            {/* Baris ke-1 (ke kiri) */}
            <div className="overflow-hidden">
                <div className="flex animate-marquee gap-3 w-max">
                    {[...images1, ...images1].map((src, i) => (
                        <div key={`row1-${i}`} className="shrink-0 w-3xs md:w-md">
                            <img src={src} className="w-full h-auto object-cover" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Baris ke-2 (ke kanan) */}
            <div className="overflow-hidden">
                <div className="flex animate-marquee-reverse gap-3 w-max">
                    {[...images2, ...images2].map((src, i) => (
                        <div key={`row2-${i}`} className="shrink-0 w-3xs md:w-md">
                            <img src={src} className="w-full h-auto object-cover" />
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS Keyframes */}
            <style>
                {`
                @keyframes marquee {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                @keyframes marquee-reverse {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0%);
                    }
                }

                .animate-marquee {
                    animation: marquee 250s linear infinite;
                }

                .animate-marquee-reverse {
                    animation: marquee-reverse 250s linear infinite;
                }
                `}
            </style>
        </div>
        </div>
    );
}
