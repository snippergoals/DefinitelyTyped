import { Camera, Object3D, Scene } from "./three-core";

export class CSS3DObject extends Object3D {
    constructor(element: any);

    element: any;
}

export class CSS3DSprite extends CSS3DObject {
    constructor(element: any);

}

export class CSS3DRenderer {
    constructor();

    domElement: HTMLElement;

    setSize(width: number, height: number): void;

    render(scene: Scene, camera: Camera): void;
}
