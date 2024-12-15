import * as THREE from "three";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js"; // Import the RoundedBoxGeometry

// ----- Renderer and Tone Mapping -----
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
// More realistic color space and tone mapping
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // softer shadows
document.body.appendChild(renderer.domElement);

// ----- Scene Setup -----
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xaaaaaa);

// If you have an HDR environment map:
// const pmrem = new THREE.PMREMGenerator(renderer);
// textureLoader.load('/assets/envMap.hdr', (hdrTexture) => {
//   const envMap = pmrem.fromEquirectangular(hdrTexture).texture;
//   scene.environment = envMap;
//   scene.background = envMap;
//   hdrTexture.dispose();
// });

// ----- Camera Setup -----
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(-2, 1, -4);
camera.lookAt(0, 1, 0);

// ----- Lights -----
// Lower ambient and hemisphere lights for more contrast
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0xc1c1c1, 0.4);
scene.add(hemiLight);

// Add a directional light to simulate a main light source (like sunlight)
const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(2, 4, -2);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;
scene.add(dirLight);

// Reduced intensity point lights or remove them if not needed
// Here we can remove or drastically lower them since directional + hemisphere + ambient may suffice.
// If you keep them, make them very subtle:
const ceilingHeight = 2;
const rows = 2;
const cols = 3;
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const pointLight = new THREE.PointLight(0xffffff, 0.02, 1);
    const xPos = (c - (cols - 1) / 2) * 2;
    const zPos = (r - (rows - 1) / 2) * 3;
    pointLight.position.set(xPos, ceilingHeight - 0.075, zPos);
    pointLight.castShadow = true;
    scene.add(pointLight);
  }
}

// ----- Dimensions -----
const floorSize = 6;
const wallWidth = 6;
const wallHeight = 2;

// ----- Textures -----
const textureLoader = new THREE.TextureLoader();
const floorTexture = textureLoader.load("/assets/floor.jpeg");
floorTexture.wrapS = THREE.RepeatWrapping;
floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.repeat.set(2, 2);

// Create gradient texture for walls
function createGradientTexture(topColor, bottomColor, size = 256) {
  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 0, size);
  gradient.addColorStop(0, topColor);
  gradient.addColorStop(0.6, topColor);
  gradient.addColorStop(0.6, bottomColor);
  gradient.addColorStop(1, bottomColor);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  return texture;
}

const wallGradientTexture = createGradientTexture("#ffffff", "#3399ff");

// ----- Materials (Using MeshStandardMaterial for PBR) -----
const floorMaterial = new THREE.MeshStandardMaterial({
  map: floorTexture,
  side: THREE.DoubleSide,
  roughness: 0.8,
  metalness: 0.0,
});

const metalMaterial = new THREE.MeshStandardMaterial({
  color: 0xaaaaaa,
  side: THREE.DoubleSide,
  roughness: 0.4,
  metalness: 0.5,
});

const seatMaterial = new THREE.MeshStandardMaterial({
  color: 0x3399ff,
  side: THREE.DoubleSide,
  roughness: 0.5,
  metalness: 0.0,
});

const whiteboardMaterial = new THREE.MeshStandardMaterial({
  color: 0xe1e1e1,
  side: THREE.DoubleSide,
  roughness: 0.2,
  metalness: 0.0,
});

const wallMaterial = new THREE.MeshStandardMaterial({
  map: wallGradientTexture,
  side: THREE.DoubleSide,
  roughness: 0.9,
  metalness: 0.0,
});

// ----- Floor -----
const floorGeometry = new THREE.PlaneGeometry(floorSize, floorSize);
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
floorMesh.rotation.x = -Math.PI / 2;
floorMesh.position.set(0, 0.05, 0);
floorMesh.receiveShadow = true;
scene.add(floorMesh);

// ----- Walls -----
function createWall(geometry, material, x, y, z, rotY = 0) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  mesh.rotation.y = rotY;
  mesh.receiveShadow = true;
  scene.add(mesh);
  return mesh;
}

const frontWallMesh = createWall(
  new THREE.PlaneGeometry(wallWidth, wallHeight),
  wallMaterial,
  0,
  wallHeight / 2,
  floorSize / 2
);
const backWallMesh = createWall(
  new THREE.PlaneGeometry(wallWidth, wallHeight),
  wallMaterial,
  0,
  wallHeight / 2,
  -floorSize / 2,
  Math.PI
);
const leftWallMesh = createWall(
  new THREE.PlaneGeometry(wallWidth, wallHeight),
  wallMaterial,
  -floorSize / 2,
  wallHeight / 2,
  0,
  Math.PI / 2
);
const rightWallMesh = createWall(
  new THREE.PlaneGeometry(wallWidth, wallHeight),
  wallMaterial,
  floorSize / 2,
  wallHeight / 2,
  0,
  -Math.PI / 2
);

// Ceiling
const ceilingGeometry = new THREE.PlaneGeometry(floorSize, floorSize);
const ceilingMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
  roughness: 0.9,
  metalness: 0.0,
});
const ceilingMesh = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
ceilingMesh.position.y = ceilingHeight;
ceilingMesh.rotation.x = Math.PI / 2;
ceilingMesh.receiveShadow = true;
scene.add(ceilingMesh);

// Arrays for obstacles
const obstacles = [];
const obstacleBoxes = [];

// Whiteboard
const whiteboardGeometry = new THREE.BoxGeometry(2, 1, 0.05);
const whiteboardMesh = new THREE.Mesh(whiteboardGeometry, whiteboardMaterial);
whiteboardMesh.position.set(0, wallHeight / 2, floorSize / 2 - 0.05);
whiteboardMesh.rotation.y = Math.PI;
whiteboardMesh.userData.isObstacle = true;
whiteboardMesh.castShadow = true;
whiteboardMesh.receiveShadow = true;
scene.add(whiteboardMesh);
obstacles.push(whiteboardMesh);

// Desk and Chair
function createDesk() {
  const desk = new THREE.Group();
  const deskWidth = 1.0;
  const deskDepth = 0.6;
  const deskHeight = 0.75;

  // Use RoundedBoxGeometry for the desktop
  const deskTopGeometry = new RoundedBoxGeometry(
    deskWidth + 0.01,
    0.02,
    deskDepth + 0.01,
    6, // segments for smoothness
    0.01 // radius for rounded corners
  );
  const deskTopMaterial = new THREE.MeshStandardMaterial({
    color: 0xe1e1e1,
    roughness: 0.2,
    metalness: 0.1,
    side: THREE.DoubleSide,
  });
  const deskTop = new THREE.Mesh(deskTopGeometry, deskTopMaterial);
  deskTop.position.y = deskHeight;
  deskTop.castShadow = true;
  deskTop.receiveShadow = true;
  desk.add(deskTop);

  const legWidth = 0.05;
  const legDepth = 0.05;

  function createLeg(x, z) {
    // RoundedBoxGeometry for legs
    const legGeom = new RoundedBoxGeometry(
      legWidth,
      deskHeight,
      legDepth,
      4, // fewer segments since legs are small
      0.01 // small radius for slight rounding
    );
    const leg = new THREE.Mesh(legGeom, metalMaterial);
    leg.position.set(x, deskHeight / 2, z);
    leg.castShadow = true;
    leg.receiveShadow = true;
    return leg;
  }

  desk.add(
    createLeg(-deskWidth / 2 + legWidth / 2, deskDepth / 2 - legDepth / 2),
    createLeg(deskWidth / 2 - legWidth / 2, deskDepth / 2 - legDepth / 2),
    createLeg(-deskWidth / 2 + legWidth / 2, -deskDepth / 2 + legDepth / 2),
    createLeg(deskWidth / 2 - legWidth / 2, -deskDepth / 2 + legDepth / 2)
  );

  // Support bar
  const supportBarGeometry = new RoundedBoxGeometry(
    deskWidth,
    0.03,
    0.03,
    4,
    0.005
  );
  const supportBar = new THREE.Mesh(supportBarGeometry, metalMaterial);
  supportBar.position.set(0, deskHeight / 2, deskDepth / 2);
  supportBar.castShadow = true;
  supportBar.receiveShadow = true;
  desk.add(supportBar);

  // Wire basket (still can be rounded)
  const basketWidth = deskWidth * 0.95;
  const basketDepth = deskDepth * 0.95;
  const basketFrameThickness = 0.01;

  function createBar(width, height, depth) {
    const barGeom = new RoundedBoxGeometry(
      width,
      height,
      depth,
      4,
      0.002 // very small radius for wires
    );
    const bar = new THREE.Mesh(barGeom, metalMaterial);
    bar.castShadow = true;
    bar.receiveShadow = true;
    return bar;
  }

  const basketGroup = new THREE.Group();
  const basketFront = createBar(
    basketWidth,
    basketFrameThickness,
    basketFrameThickness
  );
  basketFront.position.z = basketDepth / 2;
  const basketBack = basketFront.clone();
  basketBack.position.z = -basketDepth / 2;
  const basketLeft = createBar(
    basketFrameThickness,
    basketFrameThickness,
    basketDepth
  );
  basketLeft.position.x = -basketWidth / 2;
  const basketRight = basketLeft.clone();
  basketRight.position.x = basketWidth / 2;
  basketGroup.add(basketFront, basketBack, basketLeft, basketRight);

  const wireCount = 6;
  for (let i = 1; i < wireCount; i++) {
    const spacing = basketWidth / wireCount;
    const wire = createBar(
      basketFrameThickness,
      basketFrameThickness,
      basketDepth
    );
    wire.position.x = -basketWidth / 2 + spacing * i;
    basketGroup.add(wire);
  }

  basketGroup.position.y = deskHeight - 0.2;
  desk.add(basketGroup);

  desk.userData.isObstacle = true;
  return desk;
}

function createChair() {
  const chair = new THREE.Group();
  const seatWidth = 0.4;
  const seatDepth = 0.4;
  const seatHeight = 0.03;

  // Rounded seat
  const seatGeom = new RoundedBoxGeometry(
    seatWidth,
    seatHeight,
    seatDepth,
    6,
    0.01
  );
  const seat = new THREE.Mesh(seatGeom, seatMaterial);
  seat.position.y = 0.35;
  seat.castShadow = true;
  seat.receiveShadow = true;
  chair.add(seat);

  const backrestHeight = 0.5;
  const backrestThickness = 0.02;
  // Rounded backrest
  const backrestGeom = new RoundedBoxGeometry(
    seatWidth,
    backrestHeight,
    backrestThickness,
    6,
    0.01
  );
  const backrest = new THREE.Mesh(backrestGeom, seatMaterial);
  backrest.position.y = 0.35 + backrestHeight / 2;
  backrest.position.z = -seatDepth / 2 + backrestThickness / 2;
  backrest.castShadow = true;
  backrest.receiveShadow = true;
  chair.add(backrest);

  const chairLegHeight = 0.35;

  function createLeg(x, z) {
    const legGeom = new RoundedBoxGeometry(
      0.02,
      chairLegHeight,
      0.02,
      4,
      0.005
    );
    const leg = new THREE.Mesh(legGeom, metalMaterial);
    leg.position.set(x, chairLegHeight / 2, z);
    leg.castShadow = true;
    leg.receiveShadow = true;
    return leg;
  }

  chair.add(
    createLeg(-seatWidth / 2 + 0.02, seatDepth / 2 - 0.02),
    createLeg(seatWidth / 2 - 0.02, seatDepth / 2 - 0.02),
    createLeg(-seatWidth / 2 + 0.02, -seatDepth / 2 + 0.02),
    createLeg(seatWidth / 2 - 0.02, -seatDepth / 2 + 0.02)
  );

  chair.userData.isObstacle = true;
  return chair;
}

function placeClassroomRows(
  rows,
  cols,
  startZ = -1.5,
  spacingX = 1.0,
  spacingZ = 1.0
) {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const d = createDesk();
      const ch = createChair();
      const xPos = (c - (cols - 1) / 2) * spacingX * 1.3;
      const zPos = startZ - r * spacingZ + 2;

      d.position.set(xPos, 0.05, zPos + 0.5);
      ch.position.set(xPos, 0.05, zPos);

      scene.add(d);
      scene.add(ch);
      obstacles.push(d, ch);
    }
  }
}

placeClassroomRows(3, 2, -1.5, 1.6, 1.2);

// Poster
const posterTexture = textureLoader.load("/assets/world-map.jpg");
const posterWidth = 2;
const posterHeight = 1;
const posterGeometry = new THREE.PlaneGeometry(posterWidth, posterHeight);
const posterMaterial = new THREE.MeshStandardMaterial({
  map: posterTexture,
  side: THREE.DoubleSide,
  roughness: 0.8,
  metalness: 0.0,
});
const posterMesh = new THREE.Mesh(posterGeometry, posterMaterial);
posterMesh.position.set(floorSize / 2 - 0.15, 1.3, -1.8);
posterMesh.rotation.y = -Math.PI / 2;
posterMesh.castShadow = true;
posterMesh.receiveShadow = true;
scene.add(posterMesh);

// Compute bounding boxes
obstacles.forEach((obj) => {
  obj.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(obj);
  obstacleBoxes.push(box);
});

// User Movement
const player = new THREE.Object3D();
scene.add(player);

const moveSpeed = 0.01;
const keys = {};

function playerBox() {
  return new THREE.Box3().setFromCenterAndSize(
    new THREE.Vector3(
      player.position.x,
      player.position.y + 0.75,
      player.position.z
    ),
    new THREE.Vector3(0.4, 1.5, 0.4)
  );
}

function checkCollisions(newPosition) {
  const tempBox = new THREE.Box3().setFromCenterAndSize(
    new THREE.Vector3(newPosition.x, newPosition.y + 0.75, newPosition.z),
    new THREE.Vector3(0.4, 1.5, 0.4)
  );

  for (const box of obstacleBoxes) {
    if (tempBox.intersectsBox(box)) {
      return true;
    }
  }
  return false;
}

// Pointer Lock Controls
const controls = new PointerLockControls(camera, document.body);
document.body.addEventListener("click", () => {
  controls.lock();
});

// Movement direction vectors
const forwardVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

function handleMovement() {
  camera.getWorldDirection(forwardVector);
  forwardVector.y = 0;
  forwardVector.normalize();

  sideVector.crossVectors(camera.up, forwardVector).normalize();

  let directionX = 0;
  let directionZ = 0;

  if (keys["KeyW"]) directionZ += 0.5;
  if (keys["KeyS"]) directionZ -= 0.5;
  if (keys["KeyA"]) directionX += 0.5;
  if (keys["KeyD"]) directionX -= 0.5;

  const moveDir = new THREE.Vector3();
  moveDir.addScaledVector(forwardVector, directionZ);
  moveDir.addScaledVector(sideVector, directionX);
  moveDir.normalize().multiplyScalar(moveSpeed);

  const newPosition = player.position.clone().add(moveDir);

  if (!checkCollisions(newPosition)) {
    player.position.copy(newPosition);
  }

  const halfFloor = floorSize / 2;
  player.position.x = Math.min(
    Math.max(player.position.x, -halfFloor + 0.2),
    halfFloor - 0.2
  );
  player.position.z = Math.min(
    Math.max(player.position.z, -halfFloor + 0.2),
    halfFloor - 0.2
  );

  player.position.y = 0;
  camera.position.copy(
    player.position.clone().add(new THREE.Vector3(0, 1.2, 0))
  );
}

window.addEventListener("keydown", (event) => {
  keys[event.code] = true;
});

window.addEventListener("keyup", (event) => {
  keys[event.code] = false;
});

// ----- Animation Loop -----
function animate() {
  requestAnimationFrame(animate);
  handleMovement();
  renderer.render(scene, camera);
}
animate();

// ----- Handle Resize -----
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
