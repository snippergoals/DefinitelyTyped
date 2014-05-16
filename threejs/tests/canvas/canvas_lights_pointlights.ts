﻿/// <reference path="../../three.d.ts" />
/// <reference path="../three-tests-setup.ts" />

// https://github.com/mrdoob/three.js/blob/master/examples/canvas_lights_pointlights.html

() => {
    // ------- variable definitions that does not exist in the original code. These are for typescript.
    // -------
    var camera, scene, renderer,
        particle1, particle2, particle3,
        light1, light2, light3,
        loader, mesh;

    init();
    animate();

    function init() {

        var container = document.getElementById('container');

        camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.set(0, - 6, 100);

        scene = new THREE.Scene();

        scene.add(new THREE.AmbientLight(0x00020));

        light1 = new THREE.PointLight(0xff0040, 1, 50);
        scene.add(light1);

        light2 = new THREE.PointLight(0x0040ff, 1, 50);
        scene.add(light2);

        light3 = new THREE.PointLight(0x80ff80, 1, 50);
        scene.add(light3);

        var PI2 = Math.PI * 2;
        var program = function (context) {

            context.beginPath();
            context.arc(0, 0, 0.5, 0, PI2, true);
            context.fill();

        }

				particle1 = new THREE.Sprite(new THREE.SpriteCanvasMaterial({ color: 0xff0040, program: program }));
        scene.add(particle1);

        particle2 = new THREE.Sprite(new THREE.SpriteCanvasMaterial({ color: 0x0040ff, program: program }));
        scene.add(particle2);

        particle3 = new THREE.Sprite(new THREE.SpriteCanvasMaterial({ color: 0x80ff80, program: program }));
        scene.add(particle3);

        loader = new THREE.JSONLoader();
        loader.load('obj/WaltHeadLo.js', function (geometry) {

            mesh = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0xffffff, shading: THREE.FlatShading, overdraw: 0.5 }));
            scene.add(mesh);

        });

        renderer = new THREE.CanvasRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        //

        window.addEventListener('resize', onWindowResize, false);

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

    }

    //

    function animate() {

        requestAnimationFrame(animate);
        render();

    }

    function render() {

        var time = Date.now() * 0.0005;

        if (mesh) mesh.rotation.y -= 0.01;

        particle1.position.x = Math.sin(time * 0.7) * 30;
        particle1.position.y = Math.cos(time * 0.5) * 40;
        particle1.position.z = Math.cos(time * 0.3) * 30;

        light1.position.x = particle1.position.x;
        light1.position.y = particle1.position.y;
        light1.position.z = particle1.position.z;

        particle2.position.x = Math.cos(time * 0.3) * 30;
        particle2.position.y = Math.sin(time * 0.5) * 40;
        particle2.position.z = Math.sin(time * 0.7) * 30;

        light2.position.x = particle2.position.x;
        light2.position.y = particle2.position.y;
        light2.position.z = particle2.position.z;

        particle3.position.x = Math.sin(time * 0.7) * 30;
        particle3.position.y = Math.cos(time * 0.3) * 40;
        particle3.position.z = Math.sin(time * 0.5) * 30;

        light3.position.x = particle3.position.x;
        light3.position.y = particle3.position.y;
        light3.position.z = particle3.position.z;

        renderer.render(scene, camera);

    }
}