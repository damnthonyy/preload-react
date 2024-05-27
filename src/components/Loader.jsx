import { useRef } from 'react';
import '../scss/loader.scss';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);

export default function Loader({ isLoading, setIsLoading }) {

    const wrapper = useRef();
    const title = useRef();



    useGSAP(() => {
        let tl = gsap.timeline({
            onComplete: () => setIsLoading(false)
        });

        tl.to(title.current, { opacity: '1', duration: 1, delay: 1 })
            .to(title.current, { opacity: '0', duration: 1, delay: 3 })
            .to(wrapper.current, { x: '-100vw', });


    }, { scope: wrapper.current })


    return (
        <>
            <div className="wrapper" ref={wrapper}>
                <h1 ref={title} className="title">
                    Glense.<span className="span-s">stutio</span>
                </h1>


            </div>
        </>
    )
}