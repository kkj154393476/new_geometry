var createScene = function () {


  var scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color3(0.5, 0.5, 0.5);

  // camera
  var camera = new BABYLON.ArcRotateCamera("camera1", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), scene);
  camera.setPosition(new BABYLON.Vector3(0, 22, -32));
  camera.attachControl(canvas, true);
  // lights
  var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 30, 0), scene);
  var light2 = new BABYLON.HemisphericLight("light2", new BABYLON.Vector3(10, 10, 0), scene);



  // Skybox
  var skybox = BABYLON.Mesh.CreateBox("skyBox", 5000.0, scene);
  var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
  skyboxMaterial.backFaceCulling = false;
  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("/img/TropicalSunnyDay/TropicalSunnyDay", scene);
  skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
  skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
  skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
  skyboxMaterial.disableLighting = true;
  skybox.material = skyboxMaterial;


  // Water material
  var waterMaterial = new BABYLON.WaterMaterial("waterMaterial", scene, new BABYLON.Vector2(512, 512));
  waterMaterial.bumpTexture = new BABYLON.Texture("/img/waterbump.png", scene);
  waterMaterial.windForce = -10;
  waterMaterial.waveHeight = 0.5;
  waterMaterial.bumpHeight = 0.1;
  waterMaterial.waveLength = 0.1;
  waterMaterial.waveSpeed = 50.0;
  waterMaterial.colorBlendFactor = 0;
  waterMaterial.windDirection = new BABYLON.Vector2(1, 1);
  waterMaterial.colorBlendFactor = 0;

  // Water mesh
  var waterMesh = BABYLON.Mesh.CreateGround("waterMesh", 512, 512, 32, scene, false);
  waterMesh.material = waterMaterial;
  waterMesh.position.y = -4;
  // Configure water material
  waterMaterial.addToRenderList(skybox);

  //设置背景环境
  //   BABYLON.SceneLoader.ImportMesh("","/img/","cloud.glb",scene,function(newMeshes/*,particleSysterms,skeletons*/){

  //     var ocloud = newMeshes[0];

  //     //seagulf.position = new BABYLON.Vector3(0,3,0);
  //     ocloud.scaling = new BABYLON.Vector3(15,15,15);        
  //     //shadowGenerator.getShadowMap().renderList.push(seagulf);
  //     //scene.beginAnimation(skeletons[0],0,100,true,0.8);
  //     //scene.createCmeraOrLight(true,ture,ture);
  // } );

  var randMaterial = new BABYLON.StandardMaterial('redMat', scene);
  randMaterial.diffuseColor = BABYLON.Color3.Random();

  var greenMaterial = new BABYLON.StandardMaterial('greenMat', scene);
  greenMaterial.diffuseColor = BABYLON.Color3.FromInts(0, 255, 0);

  var yellowMaterial = new BABYLON.StandardMaterial('yellowMat', scene);
  yellowMaterial.diffuseColor = BABYLON.Color3.FromInts(255, 255, 0);

  var blueMaterial = new BABYLON.StandardMaterial('blueMat', scene);
  blueMaterial.diffuseColor = BABYLON.Color3.FromInts(0, 0, 255);

  var blue1Material = new BABYLON.StandardMaterial('blueMat', scene);
  blue1Material.diffuseColor = BABYLON.Color3.FromInts(0, 0, 128);

  var redMaterial = new BABYLON.StandardMaterial('blueMat', scene);
  redMaterial.diffuseColor = BABYLON.Color3.FromInts(255, 0, 0);

  var cyanMaterial = new BABYLON.StandardMaterial('blueMat', scene);
  cyanMaterial.diffuseColor = BABYLON.Color3.FromInts(0, 255, 255);

  var pinkMaterial = new BABYLON.StandardMaterial('blueMat', scene);
  pinkMaterial.diffuseColor = BABYLON.Color3.FromInts(255, 20, 147);

  var blankMaterial = new BABYLON.StandardMaterial('blkMat', scene);
  blankMaterial.alpha = 0;


  var box = [
    new BABYLON.Vector3(0, 0.5, 0),
    new BABYLON.Vector3(40, 0.5, 0),
    new BABYLON.Vector3(36.54, 0.5, 2),
    new BABYLON.Vector3(3.46, 0.5, 2),

  ];


  // var true_box_top = BABYLON.MeshBuilder.ExtrudePolygon("truebox_top1", { shape: box, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
  // true_box_top.material = blankMaterial;
  // true_box_top.position = new BABYLON.Vector3(-20, 1, -10)
  // true_box_top.scaling = new BABYLON.Vector3(1, 1, 1);
  // true_box_top.rotation = new BABYLON.Vector3(0, Math.PI / 4, 0);
  // true_box_top.state = "truebox_top";
  // true_box_top.enableEdgesRendering();
  // true_box_top.edgesWidth = 20.0;
  // true_box_top.edgesColor = new BABYLON.Color4(0, 0, 1, 0.5);

  var true_box_bottom = BABYLON.MeshBuilder.ExtrudePolygon("truebox_bottom2", { shape: box, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
  true_box_bottom.material = blankMaterial;
  true_box_bottom.position = new BABYLON.Vector3(-20, 1, -10)
  // true_box_bottom.scaling = new BABYLON.Vector3(20, 1, 1);
  // true_box.rotation = new BABYLON.Vector3(0, -Math.PI / 4, 0);
  true_box_bottom.state = "truebox_bottom";
  true_box_bottom.enableEdgesRendering();
  true_box_bottom.edgesWidth = 20.0;
  true_box_bottom.edgesColor = new BABYLON.Color4(1, 0, 0, 1);


  var true_box_left = BABYLON.MeshBuilder.ExtrudePolygon("truebox_left3", { shape: box, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
  true_box_left.material = blankMaterial;
  true_box_left.position = new BABYLON.Vector3(-20, 0.8, -10)
  // true_box_left.scaling = new BABYLON.Vector3(13, 1, 1);
  true_box_left.rotation = new BABYLON.Vector3(Math.PI, -Math.PI * 5.32 / 16, 0);
  true_box_left.state = "truebox_left";
  true_box_left.enableEdgesRendering();
  true_box_left.edgesWidth = 20.0;
  true_box_left.edgesColor = new BABYLON.Color4(0, 1, 0, 1);

  var true_box_right = BABYLON.MeshBuilder.ExtrudePolygon("truebox_right4", { shape: box, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
  true_box_right.material = blankMaterial;
  true_box_right.position = new BABYLON.Vector3(20, 1, -10)
  // true_box_right.scaling = new BABYLON.Vector3(13, 1, 1);
  true_box_right.rotation = new BABYLON.Vector3(0, -Math.PI * 5.32 / 8, 0);
  true_box_right.state = "truebox_right";
  true_box_right.enableEdgesRendering();
  true_box_right.edgesWidth = 20.0;
  true_box_right.edgesColor = new BABYLON.Color4(1, 1, 0, 1);


  return scene;
};

