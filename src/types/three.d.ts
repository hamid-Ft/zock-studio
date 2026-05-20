declare module 'three' {
	export class Color {
		constructor(color?: number | string);
	}

	export class Vector3 {
		x: number;
		y: number;
		z: number;
		constructor(x?: number, y?: number, z?: number);
		copy(vector: Vector3): this;
		sub(vector: Vector3): this;
		normalize(): this;
		add(vector: Vector3): this;
		multiplyScalar(scalar: number): this;
		distanceTo(vector: Vector3): number;
		lerp(vector: Vector3, alpha: number): this;
		set(x: number, y: number, z: number): this;
		unproject(camera: unknown): this;
	}

	export class CatmullRomCurve3 {
		points: Vector3[];
		curveType: string;
		constructor(points?: Vector3[]);
		getPoints(divisions?: number): Vector3[];
	}

	export const RepeatWrapping: number;
}
