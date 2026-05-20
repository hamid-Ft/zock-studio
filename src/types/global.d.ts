/// <reference types="next" />
/// <reference types="next/image-types" />
/// <reference types="react-dom" />

export {};

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
	export const MeshLineGeometry: any;
	export const MeshLineMaterial: any;
}

declare module 'react' {
	namespace JSX {
		interface IntrinsicElements {
			ambientLight: any;
			group: any;
			mesh: any;
			meshLineGeometry: any;
			meshLineMaterial: any;
			meshPhysicalMaterial: any;
		}
	}
}

declare global {
	namespace JSX {
		interface IntrinsicElements {
			ambientLight: any;
			group: any;
			mesh: any;
			meshLineGeometry: any;
			meshLineMaterial: any;
			meshPhysicalMaterial: any;
		}
	}
}
