var mesh;
var size = {
    width: window.innerWidth,
    height: window.innerHeight
};

var scene, camera, renderer;

 //宝石のマテリアル
 var jwellMaterial;

 //1月：ガーネット
 var garnet = new THREE.MeshPhysicalMaterial({
     color:0xff0000,
     metalness: 0.0,
     roughness: 0.2,
     transmission: 1.0,
     ior: 1.4,
     reflectivity: 0.9,
     thickness: 2.0,
     clearcoat: 2,
     clearcoatRoughness: 0.1,
     normalScale: new THREE.Vector2(0.3, 0.3),
     clearcoatNormalScale: new THREE.Vector2(0.2, 0.2),
 });

 //2月：アメシスト
 var amethyst = new THREE.MeshPhysicalMaterial({
    color:0xb34dff,
    metalness: 0.0,
    roughness: 0.2,
    transmission: 1.0,
    ior: 1.4,
    reflectivity: 0.9,
    thickness: 2.0,
    clearcoat: 2,
    clearcoatRoughness: 0.1,
    normalScale: new THREE.Vector2(0.3, 0.3),
    clearcoatNormalScale: new THREE.Vector2(0.2, 0.2),
});

//3月：アクアマリン
var aquamarine = new THREE.MeshPhysicalMaterial({
    color:0x6ed0fa,
    metalness: 0.0,
    roughness: 0.2,
    transmission: 1.0,
    ior: 1.4,
    reflectivity: 0.9,
    thickness: 2.0,
    clearcoat: 2,
    clearcoatRoughness: 0.1,
    normalScale: new THREE.Vector2(0.3, 0.3),
    clearcoatNormalScale: new THREE.Vector2(0.2, 0.2),
});

//4月：ダイヤモンド
var diamond = new THREE.MeshPhysicalMaterial({
    color:0xffffff,
    metalness: 0.0,
    roughness: 0.2,
    transmission: 1.0,
    ior: 1.4,
    reflectivity: 0.9,
    thickness: 2.0,
    clearcoat: 2,
    clearcoatRoughness: 0.1,
    normalScale: new THREE.Vector2(0.3, 0.3),
    clearcoatNormalScale: new THREE.Vector2(0.2, 0.2),
});

//5月：エメラルド
var emerald = new THREE.MeshPhysicalMaterial({
    color:0x02966c,
    metalness: 0.0,
    roughness: 0.2,
    transmission: 1.0,
    ior: 1.4,
    reflectivity: 0.9,
    thickness: 2.0,
    clearcoat: 2,
    clearcoatRoughness: 0.1,
    normalScale: new THREE.Vector2(0.3, 0.3),
    clearcoatNormalScale: new THREE.Vector2(0.2, 0.2),
});

//6月：ムーンストーン
var moonstone = new THREE.MeshPhysicalMaterial({
    color:0xe8e8e8,
    metalness: 0.0,
    roughness: 0.2,
    transmission: 1.0,
    ior: 1.4,
    reflectivity: 0.9,
    thickness: 2.0,
    clearcoat: 2,
    clearcoatRoughness: 0.1,
    normalScale: new THREE.Vector2(0.3, 0.3),
    clearcoatNormalScale: new THREE.Vector2(0.2, 0.2),
});

//7月：ルビー
var ruby = new THREE.MeshPhysicalMaterial({
    color:0xb8003a,
    metalness: 0.0,
    roughness: 0.2,
    transmission: 1.0,
    ior: 1.4,
    reflectivity: 0.9,
    thickness: 2.0,
    clearcoat: 2,
    clearcoatRoughness: 0.1,
    normalScale: new THREE.Vector2(0.3, 0.3),
    clearcoatNormalScale: new THREE.Vector2(0.2, 0.2),
});

//8月：ペリドット
var peridot = new THREE.MeshPhysicalMaterial({
    color:0x9ffa2f,
    metalness: 0.0,
    roughness: 0.2,
    transmission: 1.0,
    ior: 1.4,
    reflectivity: 0.9,
    thickness: 2.0,
    clearcoat: 2,
    clearcoatRoughness: 0.1,
    normalScale: new THREE.Vector2(0.3, 0.3),
    clearcoatNormalScale: new THREE.Vector2(0.2, 0.2),
});

//9月：サファイア
var sapphire = new THREE.MeshPhysicalMaterial({
    color:0x002e8a,
    metalness: 0.0,
    roughness: 0.2,
    transmission: 1.0,
    ior: 1.4,
    reflectivity: 0.9,
    thickness: 2.0,
    clearcoat: 2,
    clearcoatRoughness: 0.1,
    normalScale: new THREE.Vector2(0.3, 0.3),
    clearcoatNormalScale: new THREE.Vector2(0.2, 0.2),
});

//10月：トルマリン
var tourmarine = new THREE.MeshPhysicalMaterial({
    color:0x7ed5e0,
    metalness: 0.0,
    roughness: 0.2,
    transmission: 1.0,
    ior: 1.4,
    reflectivity: 0.9,
    thickness: 2.0,
    clearcoat: 2,
    clearcoatRoughness: 0.1,
    normalScale: new THREE.Vector2(0.3, 0.3),
    clearcoatNormalScale: new THREE.Vector2(0.2, 0.2),
});

//11月：シトリン
var citrine = new THREE.MeshPhysicalMaterial({
    color:0xf2e05a,
    metalness: 0.0,
    roughness: 0.2,
    transmission: 1.0,
    ior: 1.4,
    reflectivity: 0.9,
    thickness: 2.0,
    clearcoat: 2,
    clearcoatRoughness: 0.1,
    normalScale: new THREE.Vector2(0.3, 0.3),
    clearcoatNormalScale: new THREE.Vector2(0.2, 0.2),
});

//12月：タンザナイト
var tanzanite = new THREE.MeshPhysicalMaterial({
    color:0x2e69ff,
    metalness: 0.0,
    roughness: 0.2,
    transmission: 1.0,
    ior: 1.4,
    reflectivity: 0.9,
    thickness: 2.0,
    clearcoat: 2,
    clearcoatRoughness: 0.1,
    normalScale: new THREE.Vector2(0.3, 0.3),
    clearcoatNormalScale: new THREE.Vector2(0.2, 0.2),
});

function init(){

    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({
        antialias:true,
        alpha:true,
    });
    renderer.setClearColor(0x111111);
    renderer.setSize(size.width, size.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.outputEncoding = THREE.sRGBEncoding;

    camera = new THREE.PerspectiveCamera(45, size.width/size.height, 1, 1000);
    camera.position.set(0,4,1);
    camera.lookAt(0,0,0);

    //コントロール
    control = new THREE.OrbitControls(camera, renderer.domElement);

    //平面
    var planeGeometry = new THREE.PlaneGeometry(100,100,2);
    var planeMaterial = new THREE.MeshPhongMaterial({
        color:0x333333,
        side:THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
    });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = degToRad(90);
    plane.position.y = -0.3;
    plane.receiveShadow = true;
    scene.add(plane);

    //環境光
    // var ambientLight = new THREE.AmbientLight(0xcccccc,0.5);
    // scene.add(ambientLight);

    //平行光源
    var directionalLight = new THREE.DirectionalLight(0xffffff, 1.3);
    directionalLight.position.set(10, 100, 0);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    //スポットライト
    var lightTarget = new THREE.Object3D(0,0,0);
    var spotLight1 = new THREE.SpotLight(0xffffff);
    spotLight1.position.set(0,5,-5);
    spotLight1.target = lightTarget;
    spotLight1.castShadow = true;
    scene.add(spotLight1);

    var spotLight2 = new THREE.SpotLight(0xffffff);
    spotLight2.position.set(0,5,5);
    spotLight2.target = lightTarget;
    spotLight2.castShadow = true;
    scene.add(spotLight2);

   
    //ゴールドのマテリアル
    const goldMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xffd747,
        metalness: 0.9,
        roughness: 0.3,
    });

   

    //モデルの読み込み
    var loader = new THREE.OBJLoader();
    loader.load("./models/ring.obj", function(loadedMesh){
        // for(let i=0; i<loadedMesh.children.length; i++){
        //     console.log(loadedMesh.children[i]);
        // }  
        jwellMaterial = garnet;
        loadedMesh.children[0].material = jwellMaterial;
        loadedMesh.children[1].material = goldMaterial;
        loadedMesh.children[2].material = goldMaterial;
        
        mesh = loadedMesh;
        mesh.traverse(function(child){
            if(child.type === "Mesh"){
                child.castShadow = true;
            }
        });

        mesh.scale.set(1,1,1);
        mesh.position.set(0,0.8,0);
        mesh.rotation.x = degToRad(-90);
        scene.add(mesh);
    });
       
    document.getElementById('webgl').appendChild(renderer.domElement);

    render();

    function render(){
        control.update();
        requestAnimationFrame(render);
        renderer.render(scene, camera);
        if(mesh){
            mesh.rotation.z += 0.01;
        }  
    }

    //GUI
    const gui = new dat.GUI();

    class Parameters{
        constructor(){
            this.birthday = 'January'
            this.changeMaterial = function(){
                switch(this.birthday){
                    case 'January':
                        jwellMaterial = garnet;
                        break;
                    case 'February':
                        jwellMaterial = amethyst;
                        break;
                    case 'March':
                        jwellMaterial = aquamarine;
                        break;
                    case 'April':
                        jwellMaterial = diamond;
                        break;
                    case 'May':
                        jwellMaterial = emerald;
                        break;
                    case 'June':
                        jwellMaterial = moonstone;
                        break;
                    case 'July':
                        jwellMaterial = ruby;
                        break;
                    case 'August':
                        jwellMaterial = peridot;
                        break;
                    case 'September':
                        jwellMaterial = sapphire;
                        break;
                    case 'Octber':
                        jwellMaterial = tourmarine;
                        break;
                    case 'November':
                        jwellMaterial = citrine;
                        break;
                    case 'December':
                        jwellMaterial = tanzanite;
                        break;
                    default:
                        jwellMaterial = garnet;
                        break;
                    }
                }
            }
        }
    

    const param = new Parameters();

    //guiのbirthdayの値を変更したら、jwellMaterialを変更する
    gui.add(param, 'birthday', ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octber', 'November', 'December'], 'January').onChange(function(){
        param.changeMaterial();
        mesh.children[0].material = jwellMaterial;
    });
       
    //console.log(gui);
}

window.onload = init;

//リサイズ
window.addEventListener("resize",onResize, false);

function onResize(){
    size.width = window.innerWidth;
    size.height = window.innerHeight;
    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();
    renderer.setSize(size.width, size.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    //モデルをリサイズ
    mesh.scale.set(size.width / 1000, size.width / 1000, size.width / 1000);
}

//度〜ラジアン
function degToRad(deg){
    return deg * Math.PI / 180;
}

