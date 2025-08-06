export function Faq( {ask, question, open} ) {
    return (
        <div>
            <details class="group [&_summary::-webkit-details-marker]:hidden" open={open}>
                <summary
                    class="flex items-center justify-between gap-1.5 rounded-md border-b-2 border-stone-100 bg-gray-50 p-4 text-gray-900">
                    <div class="font-bold text-lg ">{ask}</div>

                    <svg class="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>

                <p class="text-sm md:text-base px-6 xl:px-8 rounded-md py-4 bg-white text-gray-500 border-b-2 border-stone-100 ">
                    {question}
                </p>
            </details>
        </div>
    )
}