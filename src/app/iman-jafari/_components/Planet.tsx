import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Planet(props: JSX.IntrinsicElements["group"]) {
	const shapeContainer = useRef<any>(null);
	const shperesContainer = useRef<any>(null);
	const ringContainer = useRef<any>(null);
	const { nodes, materials } = useGLTF("/iman-jafari/models/keyboard.glb");

	useGSAP(() => {
		const shape = shapeContainer.current;
		if (!shape) return;

		const tl = gsap.timeline();
		tl.from(shape.position, {
			y: 5,
			duration: 3,
			ease: "circ.out",
		});
		tl.from(
			shperesContainer?.current?.rotation,
			{
				x: 0,
				y: Math.PI,
				z: -Math.PI,
				duration: 10,
				ease: "power1.inOut",
			},
			"-=25%"
		);
		tl.from(
			ringContainer?.current?.rotation,
			{
				x: 0.8,
				y: 0,
				z: 0,
				duration: 10,
				ease: "power1.inOut",
			},
			"<"
		);
	}, []);

	return (
		<group {...props} ref={shapeContainer} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube024.geometry}
				material={materials["Material.003"]}
				position={[9.244, 3.447, 2.15]}
			/>
			<group position={[12.863, -0.313, -0.923]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Circle_1.geometry}
					material={materials["Material.005"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Circle_2.geometry}
					material={materials.Material}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Circle_3.geometry}
					material={materials["Material.004"]}
				/>
			</group>
			<group position={[-12.124, 3.472, -3.787]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube002_1.geometry}
					material={materials["Material.025"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube002_2.geometry}
					material={materials["Material.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube002_3.geometry}
					material={materials["Material.021"]}
				/>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Text054.geometry}
				material={materials["Material.006"]}
				position={[8.963, 1.64, -2.006]}
				scale={0.26}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Text078.geometry}
				material={materials["Material.002"]}
				position={[8.054, 0.827, -1.349]}
				scale={0.169}
			/>
		</group>
	);
}

useGLTF.preload("/iman-jafari/models/keyboard.glb");
