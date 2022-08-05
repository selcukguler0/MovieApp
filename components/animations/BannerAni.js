import { useEffect, useRef, useState } from "react";
import EFFECT from "vanta/dist/vanta.waves.min.js";
import * as THREE from "three";

export default function Home() {
	const [vantaEffect, setVantaEffect] = useState(0);
	const vantaRef = useRef(null);
	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				EFFECT({
					el: vantaRef.current,
					THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 657.0,
					minWidth: 200.0,
					color: 0xb141e,
				})
			);
		}
		// return () => {
		// 	if (vantaEffect) vantaEffect.destory();
		// };
	}, [vantaEffect]);
	return <main style={{zIndex: "-1"}} ref={vantaRef}></main>;
}
