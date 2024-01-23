import React, { useEffect } from "react"
import Glide from "@glidejs/glide"

const HeightLi = () => {
    useEffect(() => {
        const slider = new Glide(".glide-01", {
            type: "carousel",
            focusAt: "center",
            perView: 3,
            autoplay: 3000,
            animationDuration: 700,
            gap: 24,
            classNames: {
                nav: {
                    active: "[&>*]:bg-wuiSlate-700",
                },
            },
            breakpoints: {
                1024: {
                    perView: 2,
                },
                640: {
                    perView: 1,
                },
            },
        }).mount()

        return () => {
            slider.destroy()
        }
    }, [])
    return (
        <>
            {/*<!-- Component: Carousel with controls inside --> */}
            <div className="glide-01 flex justify-center relative w-full">
                {/*    <!-- Slides --> */}
                <div className="overflow-hidden " style={{ width: "80%" }} data-glide-el="track">
                    <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                        <li>
                            <img
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702457451/Croma%20Assets/CMS/Redmi%2013C%2C%20C67/Mobile%20PCP%202%20Split/Redmi%2013C%205G/PCP_2Split_Mobile_13C5G_11dec2023_r9egej.png?tr=w-720"
                                className="m-auto max-h-full w-full h-56 max-w-full"
                            />
                        </li>
                        <li>
                            <img
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683800225/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/HP%20Bugs/HP_Highlights_EMIStore_22Feb2023_qvegoj.jpg?tr=w-480"
                                className="m-auto max-h-full w-full h-56 max-w-full"
                            />
                        </li>
                        <li>
                            <img
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1691126309/Croma%20Assets/CMS/LP%20Page%20Banners/2023/Deals%20Corner/HP_Highlight_DOTW_2Aug2023_2_mdna8l.jpg?tr=w-480"
                                className="m-auto max-h-full w-full h-56 max-w-full"
                            />
                        </li>
                        <li>
                            <img
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1705814427/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Jan/21012024/HP_BigTile_NewAtCroma_Firebollt_21Jan2024_xoevym.png?tr=w-720"
                                className="m-auto max-h-full w-full h-56 max-w-full"
                            />
                        </li>
                        <li>
                            <img
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1695299299/Croma%20Assets/CMS/PCP/21-09-2023/PCP_2split_camera_21Sep2023_tglods.png?tr=w-720"
                                className="m-auto max-h-full w-full h-56 max-w-full"
                            />
                        </li>
                    </ul>
                </div>
                {/*    <!-- Controls --> */}
                {/* <div
                    className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
                    data-glide-el="controls"
                >
                    <button
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                        data-glide-dir="<"
                        aria-label="prev slide"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <title>prev slide</title>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                            />
                        </svg>
                    </button>
                    <button
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                        data-glide-dir=">"
                        aria-label="next slide"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <title>next slide</title>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </button>
                </div> */}
            </div>
            

            <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
            {/*<!-- End Carousel with controls inside --> */}

        </>
    )
}

export default HeightLi