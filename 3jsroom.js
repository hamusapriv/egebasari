import * as THREE from "three";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

// ----- Renderer and Tone Mapping -----
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

// ----- Scene Setup -----
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xaaaaaa);

// ----- Camera Setup -----
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(0, 0, -10);
camera.lookAt(0, 0.75, 0);

// ----- Lights -----
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0xc1c1c1, 0.4);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(2, 4, -2);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;
scene.add(dirLight);

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

const textureLoader = new THREE.TextureLoader();
const floorTexture = textureLoader.load("assets/floor.jpeg");
floorTexture.wrapS = THREE.RepeatWrapping;
floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.repeat.set(2, 2);

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

// ----- Ceiling -----
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

const obstacles = [];
const obstacleBoxes = [];

// ----- Whiteboard Mesh & 3D Interactive UI -----
// Create the whiteboard mesh.
const whiteboardGeometry = new THREE.BoxGeometry(2, 1, 0.05);
const whiteboardMesh = new THREE.Mesh(whiteboardGeometry, whiteboardMaterial);
whiteboardMesh.position.set(0, wallHeight / 2, floorSize / 2 - 0.05);
whiteboardMesh.rotation.y = Math.PI;
whiteboardMesh.userData.isObstacle = true;
whiteboardMesh.castShadow = true;
whiteboardMesh.receiveShadow = true;
scene.add(whiteboardMesh);
obstacles.push(whiteboardMesh);

// Create a UI group to attach to the whiteboard.
const whiteboardUIGroup = new THREE.Group();
// Position the UI slightly in front of the whiteboard.
whiteboardUIGroup.position.set(0, 0, 0.026);

// --- Create 3D Input Fields (ID and Password) ---
function createInputField(placeholder) {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#000000";
  ctx.font = "24px Arial";
  ctx.fillText(placeholder, 10, 40);
  const texture = new THREE.CanvasTexture(canvas);
  const geometry = new THREE.PlaneGeometry(1.5, 0.4);
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.userData.type = "inputField";
  mesh.userData.value = "";
  mesh.userData.placeholder = placeholder;
  mesh.userData.canvas = canvas;
  mesh.userData.ctx = ctx;
  mesh.userData.texture = texture;
  return mesh;
}
const idFieldMesh = createInputField("ID");
idFieldMesh.position.set(0, 0.6, 0);
const passwordFieldMesh = createInputField("Password");
passwordFieldMesh.position.set(0, 0.1, 0);
whiteboardUIGroup.add(idFieldMesh, passwordFieldMesh);

// --- Create 3D Buttons ---
// Reuse a generic createButton function.
function createButton(label, pos) {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#dddddd";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#000000";
  ctx.font = "20px Arial";
  ctx.fillText(label, 10, 40);
  const texture = new THREE.CanvasTexture(canvas);
  const geometry = new THREE.PlaneGeometry(0.7, 0.35);
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.copy(pos);
  mesh.userData.type = "button";
  mesh.userData.label = label;
  return mesh;
}
const loginButton = createButton("Login", new THREE.Vector3(0, -0.4, 0));
whiteboardUIGroup.add(loginButton);

// Create extra buttons for finishing typing.
const enterButton = createButton("Enter", new THREE.Vector3(-0.5, -0.9, 0));
const cancelButton = createButton("Cancel", new THREE.Vector3(0.5, -0.9, 0));
enterButton.visible = false;
cancelButton.visible = false;
whiteboardUIGroup.add(enterButton, cancelButton);

// Attach the UI group to the whiteboard.
whiteboardMesh.add(whiteboardUIGroup);

// Global variables for input handling.
let activeInputField = null;
let typingMode = false;

// Raycaster for UI interaction.
const uiRaycaster = new THREE.Raycaster();
function onUIRaycast(event) {
  if (!controls.isLocked) return;
  uiRaycaster.setFromCamera(mouse, camera);
  const intersects = uiRaycaster.intersectObjects(whiteboardUIGroup.children);
  if (intersects.length > 0) {
    const obj = intersects[0].object;
    if (obj.userData.type === "inputField") {
      activeInputField = obj;
      typingMode = true;
      // Show focus indicator.
      const ctx = obj.userData.ctx;
      ctx.strokeStyle = "#ff0000";
      ctx.lineWidth = 4;
      ctx.strokeRect(
        0,
        0,
        obj.userData.canvas.width,
        obj.userData.canvas.height
      );
      obj.userData.texture.needsUpdate = true;
      // Show enter/cancel buttons.
      enterButton.visible = true;
      cancelButton.visible = true;
    } else if (obj.userData.type === "button") {
      if (obj.userData.label === "Login") {
        // Check credentials.
        if (
          idFieldMesh.userData.value === "student" &&
          passwordFieldMesh.userData.value === "password123"
        ) {
          console.log("Login successful");
        } else {
          console.log("Invalid credentials");
        }
      } else if (obj.userData.label === "Enter") {
        // Commit the active input field.
        activeInputField = null;
        typingMode = false;
        enterButton.visible = false;
        cancelButton.visible = false;
      } else if (obj.userData.label === "Cancel") {
        // Clear the active field and exit typing mode.
        if (activeInputField) {
          activeInputField.userData.value = "";
          const ctx = activeInputField.userData.ctx;
          const canvas = activeInputField.userData.canvas;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = "#000000";
          ctx.font = "24px Arial";
          ctx.fillText(activeInputField.userData.placeholder, 10, 40);
          activeInputField.userData.texture.needsUpdate = true;
        }
        activeInputField = null;
        typingMode = false;
        enterButton.visible = false;
        cancelButton.visible = false;
      }
    }
  }
}
document.addEventListener(
  "mousedown",
  (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    onUIRaycast(event);
  },
  false
);

// Update active input field via keyboard.
document.addEventListener("keydown", (e) => {
  if (activeInputField && typingMode) {
    // Do not use Escape to exit; instead use the Cancel button.
    if (e.key === "Backspace") {
      activeInputField.userData.value = activeInputField.userData.value.slice(
        0,
        -1
      );
    } else if (e.key === "Enter") {
      // Optionally, you could treat Enter as a commit, or ignore it if you want the Enter button to be used.
      // Here we simply exit typing mode.
      activeInputField = null;
      typingMode = false;
      enterButton.visible = false;
      cancelButton.visible = false;
      return;
    } else if (e.key.length === 1) {
      activeInputField.userData.value += e.key;
    }
    const ctx = activeInputField.userData.ctx;
    const canvas = activeInputField.userData.canvas;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000000";
    ctx.font = "24px Arial";
    ctx.fillText(
      activeInputField.userData.value || activeInputField.userData.placeholder,
      10,
      40
    );
    activeInputField.userData.texture.needsUpdate = true;
  }
});

// ----- Desks, Chairs, and Other Classroom Objects -----
const seatButtons = [];
function createDesk() {
  const desk = new THREE.Group();
  const deskWidth = 1.0;
  const deskDepth = 0.6;
  const deskHeight = 0.75;

  const deskTopGeometry = new RoundedBoxGeometry(
    deskWidth + 0.01,
    0.02,
    deskDepth + 0.01,
    6,
    0.01
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
    const legGeom = new RoundedBoxGeometry(
      legWidth,
      deskHeight,
      legDepth,
      4,
      0.01
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

  const basketWidth = deskWidth * 0.95;
  const basketDepth = deskDepth * 0.95;
  const basketFrameThickness = 0.01;
  function createBar(width, height, depth) {
    const barGeom = new RoundedBoxGeometry(width, height, depth, 4, 0.002);
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

let originalPosition = new THREE.Vector3();
let originalRotation = new THREE.Euler();
let isSitting = false;

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
      // Create a seat button (if needed)
      const buttonGeom = new THREE.BoxGeometry(0.1, 0.001, 0.1);
      const buttonMat = new THREE.MeshStandardMaterial({ color: 0xf3a2d0 });
      const button = new THREE.Mesh(buttonGeom, buttonMat);
      button.position.set(xPos - 0.43, 0.81, zPos + 0.26);
      button.userData.isButton = true;
      button.userData.seatPos = new THREE.Vector3(xPos, 0.05, zPos + 0.1);
      button.userData.lookAtPos = new THREE.Vector3(0, -20, zPos + 20);
      scene.add(button);
      seatButtons.push(button);
    }
  }
}

const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);
placeClassroomRows(3, 2, -1.5, 1.6, 1.2);

const posterTexture = textureLoader.load("assets/world-map.jpg");
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

obstacles.forEach((obj) => {
  obj.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(obj);
  obstacleBoxes.push(box);
});

// ----- User Movement -----
const player = new THREE.Object3D();
scene.add(player);
const normalSpeed = 0.01;
const sprintSpeed = 0.03;
let moveSpeed = normalSpeed;
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

// ----- Pointer Lock -----
const controls = new PointerLockControls(camera, document.body);
document.body.addEventListener("click", () => {
  controls.lock();
});

// Raycasting for seat buttons (UI is entirely 3D)
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
function onMouseDown(event) {
  if (!controls.isLocked) return;
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects([...seatButtons]);
  if (intersects.length > 0) {
    const obj = intersects[0].object;
    if (obj.userData.isButton) {
      sitDown(obj.userData.seatPos, obj.userData.lookAtPos);
    }
  }
}
document.addEventListener("mousedown", onMouseDown, false);

function sitDown(seatPos, lookAtPos) {
  originalPosition.copy(player.position);
  originalRotation.copy(camera.rotation);
  player.position.copy(seatPos);
  camera.lookAt(lookAtPos);
  isSitting = true;
}

function standUp() {
  player.position.copy(originalPosition);
  camera.rotation.copy(originalRotation);
  isSitting = false;
}

// ----- Mobile Controls & Rotation Disk -----
// Use arrow buttons for movement.
const mobileControls = {
  move: { up: false, down: false, left: false, right: false },
};

function addMobileButtonEvents(id, direction) {
  const btn = document.getElementById(id);
  btn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    mobileControls.move[direction] = true;
  });
  btn.addEventListener("touchend", (e) => {
    e.preventDefault();
    mobileControls.move[direction] = false;
  });
  btn.addEventListener(
    "mousedown",
    () => (mobileControls.move[direction] = true)
  );
  btn.addEventListener(
    "mouseup",
    () => (mobileControls.move[direction] = false)
  );
}
addMobileButtonEvents("move-up", "up");
addMobileButtonEvents("move-down", "down");
addMobileButtonEvents("move-left", "left");
addMobileButtonEvents("move-right", "right");

// Improved rotation disk handling using stored initial yaw/pitch.
let rotationStart = {
  x: 0,
  y: 0,
  initialYaw: 0,
  initialPitch: 0,
  active: false,
};
const rotationDisk = document.getElementById("rotation-disk");

rotationDisk.addEventListener("touchstart", (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  rotationStart.x = touch.clientX;
  rotationStart.y = touch.clientY;
  rotationStart.initialYaw = controls.object.rotation.y;
  rotationStart.initialPitch = camera.rotation.x; // store current pitch
  rotationStart.active = true;
});

rotationDisk.addEventListener("touchmove", (e) => {
  if (!rotationStart.active) return;
  e.preventDefault();
  const touch = e.touches[0];
  const deltaX = touch.clientX - rotationStart.x;
  const deltaY = touch.clientY - rotationStart.y;
  const sensitivity = 0.005;
  // Update yaw relative to the initial stored yaw.
  controls.object.rotation.y = rotationStart.initialYaw - deltaX * sensitivity;
  // Update pitch relative to the stored initial pitch.
  let newPitch = rotationStart.initialPitch - deltaY * sensitivity;
  // Clamp the pitch between roughly -80° and 80°.
  newPitch = THREE.MathUtils.clamp(
    newPitch,
    (-3 * Math.PI) / 2 + 0.1,
    (3 * Math.PI) / 2 - 0.1
  );
  camera.rotation.x = newPitch;
});

rotationDisk.addEventListener("touchend", () => {
  rotationStart.active = false;
});

// Disable movement while typing.
function handleMovement() {
  if (typingMode) return;
  const forwardVector = new THREE.Vector3();
  const sideVector = new THREE.Vector3();
  camera.getWorldDirection(forwardVector);
  forwardVector.y = 0;
  forwardVector.normalize();
  sideVector.crossVectors(camera.up, forwardVector).normalize();

  let directionX = 0;
  let directionZ = 0;
  if (!isSitting) {
    if (keys["KeyW"]) directionZ += 0.5;
    if (keys["KeyS"]) directionZ -= 0.5;
    if (keys["KeyA"]) directionX += 0.5;
    if (keys["KeyD"]) directionX -= 0.5;
  }
  if (mobileControls.move.up) directionZ += 0.5;
  if (mobileControls.move.down) directionZ -= 0.5;
  if (mobileControls.move.left) directionX += 0.5;
  if (mobileControls.move.right) directionX -= 0.5;

  if (keys["ShiftLeft"] || keys["ShiftRight"]) {
    moveSpeed = sprintSpeed;
  } else {
    moveSpeed = normalSpeed;
  }
  const moveDir = new THREE.Vector3();
  moveDir.addScaledVector(forwardVector, directionZ);
  moveDir.addScaledVector(sideVector, directionX);
  if (moveDir.length() > 0) {
    moveDir.normalize().multiplyScalar(moveSpeed);
  }
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
  // While typing, ignore movement key events.
  if (typingMode) return;
  keys[event.code] = true;
  if ((event.code === "Escape" || event.code === "Space") && isSitting) {
    standUp();
  }
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

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
