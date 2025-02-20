//生成从minNum到maxNum的随机数
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}

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


    //题目背景板
    var playgroundSize = 20;
    var background = BABYLON.Mesh.CreatePlane("background", playgroundSize, scene, false);
    background.material = new BABYLON.StandardMaterial("background", scene);
    background.scaling = new BABYLON.Vector3(2, 0.8, 1);
    background.position = new BABYLON.Vector3(0, 6, 20)

    var backgroundTexture = new BABYLON.DynamicTexture("dynamic texture", 512, scene, true);
    background.material.diffuseTexture = backgroundTexture;
    //  background.material.specularColor = new BABYLON.Color3(1, 0, 0);
    // background.material.backFaceCulling = false;

    backgroundTexture.drawText("三条边都相等", null, 100, " 50px Segoe UI", "black", "white");
    backgroundTexture.drawText("三个角也相等", null, 200, " 50px Segoe UI", "black", null);
    backgroundTexture.drawText("每个角60度", null, 300, " 50px Segoe UI", "black", null);
    backgroundTexture.drawText("小朋友，你知道这是什么形状吗？", null, 400, " 25px Segoe UI", "red", null);
    backgroundTexture.drawText("快站到你认为正确的图案上吧！", null, 450, " 25px Segoe UI", "red", null);


    background.material.alphaMode = 4;

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

    var tri = [
        new BABYLON.Vector3(0, 0.5, 0),
        new BABYLON.Vector3(0, 0.5, 2.3),
        new BABYLON.Vector3(2, 0.5, 1),
    ];
    var box = [
        new BABYLON.Vector3(0, 0.5, 0),
        new BABYLON.Vector3(1.4, 0.5, 0),
        new BABYLON.Vector3(1.4, 0.5, 1.4),
        new BABYLON.Vector3(0, 0.5, 1.4),

    ];
    var trap = [
        new BABYLON.Vector3(0, 0.5, 0),
        new BABYLON.Vector3(4, 0.5, 0),
        new BABYLON.Vector3(3, 0.5, 2),
        new BABYLON.Vector3(1, 0.5, 2),

    ];

    var para = [
        new BABYLON.Vector3(0, 0.5, 0),
        new BABYLON.Vector3(-2, 0.5, 0),
        new BABYLON.Vector3(-3, 0.5, 1),
        new BABYLON.Vector3(-1, 0.5, 1),

    ];


    var true_box = BABYLON.MeshBuilder.ExtrudePolygon("true_box", { shape: box, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    true_box.material = randMaterial;
    true_box.position = new BABYLON.Vector3(-10, 1, -8)
    var side = randomNum(3, 5);
    true_box.scaling = new BABYLON.Vector3(side, 1, side);
    true_box.rotation = new BABYLON.Vector3(0, Math.random() * Math.PI, 0);
    true_box.state = "true_box";



    var true_tri = BABYLON.MeshBuilder.ExtrudePolygon("true_tri", { shape: tri, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    true_tri.material = randMaterial;
    true_tri.position = new BABYLON.Vector3(0, 1, 0)
    true_tri.rotation = new BABYLON.Vector3(0, Math.random() * Math.PI, 0);
    true_tri.scaling = new BABYLON.Vector3(side * 0.5, 1, side * 0.8);
    true_tri.state = "true_tri";

    var true_trap = BABYLON.MeshBuilder.ExtrudePolygon("true_trap", { shape: trap, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    true_trap.material = randMaterial;
    true_trap.position = new BABYLON.Vector3(5, 1, -10)
    true_trap.scaling = new BABYLON.Vector3(side * 0.5, 1, side * 0.6);
    true_trap.rotation = new BABYLON.Vector3(0, Math.random() * Math.PI, 0);
    true_trap.state = "true_trap";


    var true_rec = BABYLON.MeshBuilder.ExtrudePolygon("true_rec", { shape: box, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    true_rec.material = randMaterial;
    true_rec.position = new BABYLON.Vector3(15, 1, 0)
    true_rec.scaling = new BABYLON.Vector3(side * 0.5, 1, side * 0.8);
    true_rec.rotation = new BABYLON.Vector3(0, Math.random() * Math.PI, 0);
    true_rec.state = "true_rec";

    var true_para = BABYLON.MeshBuilder.ExtrudePolygon("true_para", { shape: para, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    true_para.material = randMaterial;
    true_para.position = new BABYLON.Vector3(-10, 0.8, 2)
    true_para.scaling = new BABYLON.Vector3(side * 0.6, 1, side * 0.8);
    true_para.rotation = new BABYLON.Vector3(0, Math.random() * Math.PI, 0);
    true_para.state = "true_para";

    var music = new BABYLON.Sound("music", "/../audio/define_tri.mp3", scene, null, { loop: false, autoplay: true, spatialSound: true });




    return scene;
};

