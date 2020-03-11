import * as THREE from "three";

let scene, camera, renderer, starsGeometry;

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.z = 1;
  camera.rotation.x = Math.PI / 2;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  starsGeometry = new THREE.Geometry();

  for (var i = 0; i < 10000; i++) {
    var star = new THREE.Vector3();
    star.x = THREE.Math.randFloatSpread(2000);
    star.y = THREE.Math.randFloatSpread(2000);
    star.z = THREE.Math.randFloatSpread(2000);

    starsGeometry.vertices.push(star);
  }

  var starsMaterial = new THREE.PointsMaterial({ color: 0x888888 });

  var starField = new THREE.Points(starsGeometry, starsMaterial);

  scene.add(starField);

  window.addEventListener("resize", onWindowResize, false);

  // animate();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// function animate() {
//   starsGeometry.vertices.forEach(p => {
//     p.velocity += p.acceleration;
//     p.y -= p.velocity;

//     if (p.y < -200) {
//       p.y = 200;
//       p.velocity = 0;
//     }
//   });
//   starsGeometry.verticesNeedUpdate = true;
//   // stars.rotation.y += 0.002;

//   renderer.render(scene, camera);
//   requestAnimationFrame(animate);
// }
