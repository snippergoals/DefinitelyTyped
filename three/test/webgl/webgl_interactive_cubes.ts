/// <reference types="three" />
/// <reference path="../three-tests-setup.ts" />

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_interactive_cubes.html

() => {
    var container: HTMLDivElement, stats: Stats;
    var camera: THREE.PerspectiveCamera, scene: THREE.Scene, raycaster: THREE.Raycaster, renderer: THREE.WebGLRenderer;

    var mouse = new THREE.Vector2(), INTERSECTED: THREE.Mesh | null;
    var radius = 100, theta = 0;

    init();
    animate();

    function init() {

        container = document.createElement('div');
        document.body.appendChild(container);

        var info = document.createElement('div');
        info.style.position = 'absolute';
        info.style.top = '10px';
        info.style.width = '100%';
        info.style.textAlign = 'center';
        info.innerHTML = '<a href="http://threejs.org" target="_blank">three.js</a> webgl - interactive cubes';
        container.appendChild(info);

        camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);

        scene = new THREE.Scene();

        var light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(1, 1, 1).normalize();
        scene.add(light);

        var geometry = new THREE.BoxGeometry(20, 20, 20);

        for (var i = 0; i < 2000; i++) {

            var object = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff }));

            object.position.x = Math.random() * 800 - 400;
            object.position.y = Math.random() * 800 - 400;
            object.position.z = Math.random() * 800 - 400;

            object.rotation.x = Math.random() * 2 * Math.PI;
            object.rotation.y = Math.random() * 2 * Math.PI;
            object.rotation.z = Math.random() * 2 * Math.PI;

            object.scale.x = Math.random() + 0.5;
            object.scale.y = Math.random() + 0.5;
            object.scale.z = Math.random() + 0.5;

            scene.add(object);

        }

        raycaster = new THREE.Raycaster();

        renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(0xf0f0f0);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.sortObjects = false;
        container.appendChild(renderer.domElement);

        stats = new Stats();
        stats.dom.style.position = 'absolute';
        stats.dom.style.top = '0px';
        container.appendChild(stats.dom);

        document.addEventListener('mousemove', onDocumentMouseMove, false);

        //

        window.addEventListener('resize', onWindowResize, false);

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

    }

    function onDocumentMouseMove(event: MouseEvent) {

        event.preventDefault();

        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    }

    //

    function animate() {

        requestAnimationFrame(animate);

        render();
        stats.update();

    }

    let INTERSECTED_currentHex = 0;

    function render() {

        theta += 0.1;

        camera.position.x = radius * Math.sin(THREE.Math.degToRad(theta));
        camera.position.y = radius * Math.sin(THREE.Math.degToRad(theta));
        camera.position.z = radius * Math.cos(THREE.Math.degToRad(theta));
        camera.lookAt(scene.position);

        camera.updateMatrixWorld(false);

        // find intersections

        raycaster.setFromCamera(mouse, camera);

        var intersects = raycaster.intersectObjects(scene.children);

        if (intersects.length > 0) {

            if (INTERSECTED != intersects[0].object) {

                if (INTERSECTED) (INTERSECTED.material as THREE.MeshLambertMaterial).emissive.setHex(INTERSECTED_currentHex);

                INTERSECTED = intersects[0].object as THREE.Mesh;
                INTERSECTED_currentHex = (INTERSECTED.material as THREE.MeshLambertMaterial).emissive.getHex();
                (INTERSECTED.material as THREE.MeshLambertMaterial).emissive.setHex(0xff0000);

            }

        } else {

            if (INTERSECTED) (INTERSECTED.material as THREE.MeshLambertMaterial).emissive.setHex(INTERSECTED_currentHex);

            INTERSECTED = null;

        }

        renderer.render(scene, camera);

    }
}