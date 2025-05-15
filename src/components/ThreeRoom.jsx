import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

export default function ThreeRoom() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const w = () => mount.clientWidth;
    const h = () => mount.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w(), h());
    renderer.shadowMap.enabled = true;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xaaaaaa);
    const camera = new THREE.PerspectiveCamera(75, w() / h(), 0.1, 100);
    camera.position.set(0, 0, -10);
    camera.lookAt(0, 0.75, 0);

    // Controls
    const controls = new PointerLockControls(camera, mount);
    mount.addEventListener("click", () => {
      if (!controls.isLocked) controls.lock();
    });

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 1));
    scene.add(new THREE.HemisphereLight(0xffffff, 0xc1c1c1, 0.4));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(2, 4, -2);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.set(2048, 2048);
    scene.add(dirLight);

    // Textures & Materials
    const loader = new THREE.TextureLoader();
    const floorTex = loader.load("./assets/floor.jpeg");
    floorTex.wrapS = floorTex.wrapT = THREE.RepeatWrapping;
    floorTex.repeat.set(2, 2);

    // Gradient for walls
    const wallGradient = (() => {
      const canvas = document.createElement("canvas");
      canvas.width = 1;
      canvas.height = 256;
      const ctx = canvas.getContext("2d");
      const grad = ctx.createLinearGradient(0, 0, 0, 256);
      grad.addColorStop(0, "#ffffff");
      grad.addColorStop(0.6, "#ffffff");
      grad.addColorStop(0.6, "#3399ff");
      grad.addColorStop(1, "#3399ff");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1, 256);
      const tex = new THREE.CanvasTexture(canvas);
      tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      return tex;
    })();

    const floorMat = new THREE.MeshStandardMaterial({
      map: floorTex,
      roughness: 0.8,
      metalness: 0,
      side: THREE.DoubleSide,
    });
    const wallMat = new THREE.MeshStandardMaterial({
      map: wallGradient,
      roughness: 0.9,
      metalness: 0,
      side: THREE.DoubleSide,
    });
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0xaaaaaa,
      roughness: 0.4,
      metalness: 0.5,
      side: THREE.DoubleSide,
    });
    const seatMat = new THREE.MeshStandardMaterial({
      color: 0x3399ff,
      roughness: 0.5,
      metalness: 0,
      side: THREE.DoubleSide,
    });
    const whiteboardMat = new THREE.MeshStandardMaterial({
      color: 0xe1e1e1,
      roughness: 0.2,
      metalness: 0,
      side: THREE.DoubleSide,
    });

    // Floor
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(6, 6), floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0.05;
    floor.receiveShadow = true;
    scene.add(floor);

    // Walls & Ceiling
    const makeWall = (w, h, x, y, z, ry = 0) => {
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), wallMat);
      mesh.position.set(x, y, z);
      mesh.rotation.y = ry;
      mesh.receiveShadow = true;
      scene.add(mesh);
    };
    makeWall(6, 2, 0, 1, 3); // front
    makeWall(6, 2, 0, 1, -3, Math.PI); // back
    makeWall(6, 2, -3, 1, 0, Math.PI / 2); // left
    makeWall(6, 2, 3, 1, 0, -Math.PI / 2); // right

    const ceiling = new THREE.Mesh(
      new THREE.PlaneGeometry(6, 6),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
        roughness: 0.9,
      })
    );
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.y = 2;
    ceiling.receiveShadow = true;
    scene.add(ceiling);

    // Whiteboard
    const whiteboard = new THREE.Mesh(
      new THREE.BoxGeometry(2, 1, 0.05),
      whiteboardMat
    );
    whiteboard.position.set(0, 1, 2.95);
    whiteboard.rotation.y = Math.PI;
    whiteboard.castShadow = true;
    whiteboard.receiveShadow = true;
    scene.add(whiteboard);
    const uiGroup = new THREE.Group();
    uiGroup.position.z = 0.026;
    whiteboard.add(uiGroup);

    // (Port over your UI helper functions here:
    //   createTextLabel, createInputField, createButton,
    //   showLoginUI, showQuizUI, updateInputFieldAppearance,
    //   handleCenterRaycast…)

    // Desks & Chairs
    const obstacles = [];
    const obstacleBoxes = [];
    function createDesk() {
      // …port your desk code…
    }
    function createChair() {
      // …port your chair code…
    }
    function placeRows(rows, cols) {
      // …port placeClassroomRows logic…
    }
    placeRows(3, 2);

    // Poster
    const poster = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 1),
      new THREE.MeshStandardMaterial({
        map: loader.load("./assets/world-map.jpg"),
        roughness: 0.8,
        metalness: 0,
      })
    );
    poster.position.set(2.85, 1.3, -1.8);
    poster.rotation.y = -Math.PI / 2;
    poster.castShadow = poster.receiveShadow = true;
    scene.add(poster);

    // Collision boxes
    obstacles.forEach((o) => {
      o.updateMatrixWorld(true);
      obstacleBoxes.push(new THREE.Box3().setFromObject(o));
    });

    // Player & movement (port your movement + collision + sit/stand code)
    const player = new THREE.Object3D();
    scene.add(player);

    // Animate
    window.addEventListener("resize", () => {
      camera.aspect = w() / h();
      camera.updateProjectionMatrix();
      renderer.setSize(w(), h());
    });

    function animate() {
      requestAnimationFrame(animate);
      // …your handleMovement() here…
      renderer.render(scene, camera);
    }
    animate();

    // Cleanup
    return () => {
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
}
