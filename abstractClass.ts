// ! Abstract Classes

abstract class TakePhoto {
	constructor(public cameraMode: string, public filter: string) {
		this.cameraMode = cameraMode;
	}
	abstract getSepia(): void;
}

// ? Objects cannot be created from abstract classes
// const hammad = new TakePhoto("test", "test");

class Instagram extends TakePhoto {
	constructor(
		public cameraMode: string,
		public filter: string,
		public burst: number
	) {
		super(cameraMode, filter);
		// this.burst = burst;
	}

	getSepia(): void {}
	getReel(): number {
		// Some complex applications
		return 1;
	}
}
const hammad = new Instagram("test", "test", 3);
console.log(hammad.getReel()); // 1
