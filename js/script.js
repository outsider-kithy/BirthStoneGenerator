var brilliant, sphere, mesh;
var size = {
    width: window.innerWidth,
    height: window.innerHeight
};

var scene, camera, renderer;

function init(){

    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({
        preserveDrawingBuffer: true,//これがtrueじゃないと画像が真っ黒になる！
        antialias:true,
        alpha:true,
    });
    renderer.setClearColor(0x000000);
    renderer.setSize(size.width, size.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;

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
    // var ambientLight = new THREE.AmbientLight(0xcccccc);
    // scene.add(ambientLight);

    //平行光源
    var directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(10, 100, 0);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    //スポットライト
    var lightTarget = new THREE.Object3D(0,0,0);
    var spotLight1 = new THREE.SpotLight(0xffffff);
    spotLight1.position.set(0,20,-5);
    spotLight1.target = lightTarget;
    spotLight1.castShadow = true;
    scene.add(spotLight1);

    var spotLight2 = new THREE.SpotLight(0xffffff);
    spotLight2.position.set(0,20,5);
    spotLight2.target = lightTarget;
    spotLight2.castShadow = true;
    scene.add(spotLight2);


    //brilliantとsphereにそれぞれモデルを読み込み、btn.idの値によってmeshへの代入を変える
    const loader01 = new THREE.OBJLoader();
    loader01.load("./models/ring.obj", function(loadMesh){
        jwellMaterial = garnet;
        loadMesh.children[0].material = jwellMaterial;
        loadMesh.children[1].material = goldMaterial;
        loadMesh.children[2].material = goldMaterial;

        brilliant = loadMesh;
        brilliant.traverse(function(child){
            if(child.type === "Mesh"){
                child.castShadow = true;
            }
        });

        brilliant.scale.set(1,1,1);
        brilliant.position.set(0,0.8,0);
        brilliant.rotation.x = degToRad(-90);
        mesh = brilliant;
        scene.add(mesh);
    });

    const loader02 = new THREE.OBJLoader();
    loader02.load("./models/ring_perl.obj", function(loadMesh){
        jwellMaterial = perl;
        loadMesh.children[0].material = jwellMaterial;
        loadMesh.children[1].material = silverMaterial;
        loadMesh.children[2].material = silverMaterial;

        sphere = loadMesh;
        sphere.traverse(function(child){
            if(child.type === "Mesh"){
                child.castShadow = true;
            }
        });

        sphere.scale.set(1,1,1);
        sphere.position.set(0,0.8,0);
        sphere.rotation.x = degToRad(-90);
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

//JSONファイルの読み込み
var text = [
    {
        "Stone" : "Garnet",
        "Japanese Name" : "ガーネット",
        "Attribute":{
            "Month" : "January",
            "Meaning" : "真実、友愛"
        }
    },
    {
        "Stone" : "Amethyst",
        "Japanese Name" : "アメジスト",
        "Attribute" :{
            "Month" : "Febrary",
            "Meaning" : "誠実、高貴"
        }
    },
    {
        "Stone" : "Aquamarine",
        "Japanese Name" : "アクアマリン",
        "Attribute": {
            "Month" :"March",
            "Meaning" : "聡明、勇敢"
        }
    },
    {
        "Stone" : "Diamond",
        "Japanese Name" : "ダイアモンド",
        "Attribute": {
            "Month" :"April",
            "Meaning" : "清純、無垢"
        }
    },
    {
        "Stone" : "Emerald",
        "Japanese Name" : "エメラルド",
        "Attribute": {
            "Month" :"May",
            "Meaning" : "清純、無垢"
        }
    },
    {
        "Stone" : "Perl",
        "Japanese Name" : "真珠",
        "Attribute": {
            "Month" :"June",
            "Meaning" : "健康、円満"
        }
    },
    {
        "Stone" : "Ruby",
        "Japanese Name" : "ルビー",
        "Attribute": {
            "Month" :"July",
            "Meaning" : "情熱、仁愛"
        }
    },
    {
        "Stone" : "Peridot",
        "Japanese Name" : "ペリドット",
        "Attribute": {
            "Month" :"August",
            "Meaning" : "幸せ、和合、平和"
        }
    },
    {
        "Stone" : "Sapphire",
        "Japanese Name" : "サファイア",
        "Attribute": {
            "Month" :"September",
            "Meaning" : "誠実、慈愛、徳望"
        }
    },
    {
        "Stone" : "Opal",
        "Japanese Name" : "オパール",
        "Attribute": {
            "Month" :"October",
            "Meaning" : "幸運、希望"
        }
    },
    {
        "Stone" : "Topaz",
        "Japanese Name" : "トパーズ",
        "Attribute": {
            "Month" :"November",
            "Meaning" : "友情、友愛、希望、潔白"
        }
    },
    {
        "Stone" : "Turquoise",
        "Japanese Name" : "ターコイズ",
        "Attribute": {
            "Month" :"December",
            "Meaning" : "成功、繁栄"
        }
    }
]

//ゴールドのマテリアル
const goldMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffe66b,
    metalness: 0.9,
    roughness: 0.6,
});

//シルバーのマテリアル
const silverMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0.9,
    roughness: 0.6,
});

 //宝石のマテリアル
 var jwellMaterial;

 //1月：ガーネット
 var garnet = new THREE.MeshPhysicalMaterial({
     color:0xff0000,
     metalness: 0.0,
     roughness: 0.3,
     transmission: 1.0,
     ior: 1.76,
     reflectivity: 0.9,
     thickness: 2.0,
     clearcoat: 2,
     clearcoatRoughness: 0.1,
     normalScale: new THREE.Vector2(0.3, 0.3),
     clearcoatNormalScale: new THREE.Vector2(0.2, 0.2),
 });

 //2月：アメシスト
 var amethyst = new THREE.MeshPhysicalMaterial({
    color:0x5900ff,
    metalness: 0.0,
    roughness: 0.2,
    transmission: 1.0,
    ior: 1.54,
    reflectivity: 0.9,
    thickness: 2.0,
    clearcoat: 2,
    clearcoatRoughness: 0.1,
    normalScale: new THREE.Vector2(0.3, 0.3),
    clearcoatNormalScale: new THREE.Vector2(0.2, 0.2),
});

//3月：アクアマリン
var aquamarine = new THREE.MeshPhysicalMaterial({
    color:0x29e1fa,
    metalness: 0.0,
    roughness: 0.2,
    transmission: 1.0,
    ior: 1.57,
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
    roughness: 0.0,
    transmission: 1.0,
    ior: 2.41,
    reflectivity: 0.9,
    thickness: 1.0,
    clearcoat: 2,
    clearcoatRoughness: 0.3,
    normalScale: new THREE.Vector2(0.3, 0.3),
    clearcoatNormalScale: new THREE.Vector2(0.2, 0.2),
});

//5月：エメラルド
var emerald = new THREE.MeshPhysicalMaterial({
    color:0x00a34f,
    metalness: 0.0,
    roughness: 0.2,
    transmission: 1.0,
    ior: 1.57,
    reflectivity: 0.9,
    thickness: 2.0,
    clearcoat: 2,
    clearcoatRoughness: 0.1,
    normalScale: new THREE.Vector2(0.3, 0.3),
    clearcoatNormalScale: new THREE.Vector2(0.2, 0.2),
});

//6月：パール
var perl = new THREE.MeshPhysicalMaterial({
    color: 0xffe5e5,
    emissive:0x897161,
    metalness: 0.8,
    roughness: 0.3,
    reflectivity: 1.0
});

//7月：ルビー
var ruby = new THREE.MeshPhysicalMaterial({
    color:0xff0088,
    metalness: 0.0,
    roughness: 0.2,
    transmission: 1.0,
    ior: 1.76,
    reflectivity: 0.9,
    thickness: 2.0,
    clearcoat: 2,
    clearcoatRoughness: 0.1,
    normalScale: new THREE.Vector2(0.3, 0.3),
    clearcoatNormalScale: new THREE.Vector2(0.2, 0.2),
});

//8月：ペリドット
var peridot = new THREE.MeshPhysicalMaterial({
    color:0x73ff00,
    metalness: 0.0,
    roughness: 0.3,
    transmission: 1.0,
    ior: 1.65,
    reflectivity: 0.9,
    thickness: 2.0,
    clearcoat: 2,
    clearcoatRoughness: 0.1,
    normalScale: new THREE.Vector2(0.3, 0.3),
    clearcoatNormalScale: new THREE.Vector2(0.2, 0.2),
});

//9月：サファイア
var sapphire = new THREE.MeshPhysicalMaterial({
    color:0x0008ff,
    metalness: 0.0,
    roughness: 0.2,
    transmission: 1.0,
    ior: 1.76,
    reflectivity: 0.9,
    thickness: 2.0,
    clearcoat: 2,
    clearcoatRoughness: 0.1,
    normalScale: new THREE.Vector2(0.3, 0.3),
    clearcoatNormalScale: new THREE.Vector2(0.2, 0.2),
});

//10月：オパール
var textureLoader01 = new THREE.TextureLoader();
var opalTexture = textureLoader01.load('./textures/opal.jpg');
var opal = new THREE.MeshBasicMaterial({
    map:opalTexture,
});


//11月：トパーズ
var topaz = new THREE.MeshPhysicalMaterial({
    color:0xff7b00,
    metalness: 0.0,
    roughness: 0.2,
    transmission: 1.0,
    ior: 1.63,
    reflectivity: 0.9,
    thickness: 2.0,
    clearcoat: 2,
    clearcoatRoughness: 0.1,
    normalScale: new THREE.Vector2(0.3, 0.3),
    clearcoatNormalScale: new THREE.Vector2(0.2, 0.2),
});

//12月：ターコイズ
var textureLoader02 = new THREE.TextureLoader();
var turquoiseTexture = textureLoader02.load('./textures/turquoise.jpg')

var turquoise = new THREE.MeshPhongMaterial({
   map:turquoiseTexture,
   specular: 0x111111,
   shininess: 100,
});


//月毎にデータを変更
var stone = document.getElementById("stone");
stone.innerHTML = text[0]["Stone"];

var japaneseName = document.getElementById("japaneseName");
japaneseName.innerHTML = text[0]["Japanese Name"];

var month = document.getElementById("month");
month.innerHTML = text[0]["Attribute"]["Month"];

var meaning = document.getElementById("meaning");
meaning.innerHTML = "石言葉：" + text[0]["Attribute"]["Meaning"];


var btns = document.querySelectorAll('.btn');
for (var btn of btns){
    //btnのidで処理を変更
    if(btn.id === "January")
        btn.addEventListener('click', function(){
            //sceneにbrlliantを追加
            mesh = brilliant;
            scene.add(mesh);
            //既にsphereがあれば削除
            if(sphere){
                scene.remove(sphere);
            }
            jwellMaterial = garnet;
            mesh.children[0].material = jwellMaterial;
            mesh.children[1].material = goldMaterial;
            mesh.children[2].material = goldMaterial;
            stone.innerHTML = text[0]["Stone"];
            japaneseName.innerHTML = text[0]["Japanese Name"];
            month.innerHTML = text[0]["Attribute"]["Month"];
            meaning.innerHTML = "石言葉：" + text[0]["Attribute"]["Meaning"];
        });
    else if(btn.id === "Febrary")
        btn.addEventListener('click', function(){
            //sceneにbrlliantを追加
            mesh = brilliant;
            scene.add(mesh);
            //既にsphereがあれば削除
            if(sphere){
                scene.remove(sphere);
            }
            jwellMaterial = amethyst;
            mesh.children[0].material = jwellMaterial;
            mesh.children[1].material = goldMaterial;
            mesh.children[2].material = goldMaterial;
            stone.innerHTML = text[1]["Stone"];
            japaneseName.innerHTML = text[1]["Japanese Name"];
            month.innerHTML = text[1]["Attribute"]["Month"];
            meaning.innerHTML = "石言葉：" + text[1]["Attribute"]["Meaning"];
        });
    else if(btn.id === "March")
        btn.addEventListener('click', function(){
            //sceneにbrlliantを追加
            mesh = brilliant;
            scene.add(mesh);
            //既にsphereがあれば削除
            if(sphere){
                scene.remove(sphere);
            }
            jwellMaterial = aquamarine;
            mesh.children[0].material = jwellMaterial;
            mesh.children[1].material = goldMaterial;
            mesh.children[2].material = goldMaterial;
            stone.innerHTML = text[2]["Stone"];
            japaneseName.innerHTML = text[2]["Japanese Name"];
            month.innerHTML = text[2]["Attribute"]["Month"];
            meaning.innerHTML = "石言葉：" + text[2]["Attribute"]["Meaning"];
        });
    else if(btn.id === "April")
        btn.addEventListener('click', function(){
            //sceneにbrilliantを追加
            mesh = brilliant;
            scene.add(mesh);
            //既にsphereがあれば削除
            if(sphere){
                scene.remove(sphere);
            }
            jwellMaterial = diamond;
            mesh.children[0].material = jwellMaterial;
            mesh.children[1].material = silverMaterial;
            mesh.children[2].material = silverMaterial;
            stone.innerHTML = text[3]["Stone"];
            japaneseName.innerHTML = text[3]["Japanese Name"];
            month.innerHTML = text[3]["Attribute"]["Month"];
            meaning.innerHTML = "石言葉：" + text[3]["Attribute"]["Meaning"];
        });
    else if(btn.id === "May")
        btn.addEventListener('click', function(){
            //sceneにbrlliantを追加
            mesh = brilliant;
            scene.add(mesh);
            //既にsphereがあれば削除
            if(sphere){
                scene.remove(sphere);
            }
            jwellMaterial = emerald;
            mesh.children[0].material = jwellMaterial;
            mesh.children[1].material = goldMaterial;
            mesh.children[2].material = goldMaterial;
            stone.innerHTML = text[4]["Stone"];
            japaneseName.innerHTML = text[4]["Japanese Name"];
            month.innerHTML = text[4]["Attribute"]["Month"];
            meaning.innerHTML = "石言葉：" + text[4]["Attribute"]["Meaning"];
        });
    else if(btn.id === "June")
        btn.addEventListener('click', function(){
           //sceneにbrlliantを追加
           mesh = sphere;
           scene.add(mesh);
           //既にbrilliantがあれば削除
           if(brilliant){
               scene.remove(brilliant);
           }
            jwellMaterial = perl;
            mesh.children[0].material = silverMaterial;
            mesh.children[1].material = silverMaterial;
            mesh.children[2].material = jwellMaterial;
            stone.innerHTML = text[5]["Stone"];
            japaneseName.innerHTML = text[5]["Japanese Name"];
            month.innerHTML = text[5]["Attribute"]["Month"];
            meaning.innerHTML = "石言葉：" + text[5]["Attribute"]["Meaning"];
        });
    else if(btn.id === "July")
        btn.addEventListener('click', function(){
            //sceneにbrlliantを追加
            mesh = brilliant;
            scene.add(mesh);
            //既にsphereがあれば削除
            if(sphere){
                scene.remove(sphere);
            }
            jwellMaterial = ruby;
            mesh.children[0].material = jwellMaterial;
            mesh.children[1].material = goldMaterial;
            mesh.children[2].material = goldMaterial;
            stone.innerHTML = text[6]["Stone"];
            japaneseName.innerHTML = text[6]["Japanese Name"];
            month.innerHTML = text[6]["Attribute"]["Month"];
            meaning.innerHTML = "石言葉：" + text[6]["Attribute"]["Meaning"];
        });
    else if(btn.id === "August")
        btn.addEventListener('click', function(){
            //sceneにbrlliantを追加
            mesh = brilliant;
            scene.add(mesh);
            //既にsphereがあれば削除
            if(sphere){
                scene.remove(sphere);
            }
            jwellMaterial = peridot;
            mesh.children[0].material = jwellMaterial;
            mesh.children[1].material = goldMaterial;
            mesh.children[2].material = goldMaterial;
            stone.innerHTML = text[7]["Stone"];
            japaneseName.innerHTML = text[7]["Japanese Name"];
            month.innerHTML = text[7]["Attribute"]["Month"];
            meaning.innerHTML = "石言葉：" + text[7]["Attribute"]["Meaning"];
        });
    else if(btn.id === "September")
        btn.addEventListener('click', function(){
            //sceneにbrlliantを追加
            mesh = brilliant;
            scene.add(mesh);
            //既にsphereがあれば削除
            if(sphere){
                scene.remove(sphere);
            }
            jwellMaterial = sapphire;
            mesh.children[0].material = jwellMaterial;
            mesh.children[1].material = goldMaterial;
            mesh.children[2].material = goldMaterial;
            stone.innerHTML = text[8]["Stone"];
            japaneseName.innerHTML = text[8]["Japanese Name"];
            month.innerHTML = text[8]["Attribute"]["Month"];
            meaning.innerHTML = "石言葉：" + text[8]["Attribute"]["Meaning"];
        });
    else if(btn.id === "October")
        btn.addEventListener('click', function(){
            //sceneにsphereを追加
            mesh = sphere;
            scene.add(mesh);
            //既にbrilliantがあれば削除
            if(brilliant){
                scene.remove(brilliant);
            }
            jwellMaterial = opal;
            mesh.children[0].material = goldMaterial;
            mesh.children[1].material = goldMaterial;
            mesh.children[2].material = jwellMaterial;
            stone.innerHTML = text[9]["Stone"];
            japaneseName.innerHTML = text[9]["Japanese Name"];
            month.innerHTML = text[9]["Attribute"]["Month"];
            meaning.innerHTML = "石言葉：" + text[9]["Attribute"]["Meaning"];
        });
    else if(btn.id === "November")
        btn.addEventListener('click', function(){
            //sceneにbrlliantを追加
            mesh = brilliant;
            scene.add(mesh);
            //既にsphereがあれば削除
            if(sphere){
                scene.remove(sphere);
            }
            jwellMaterial = topaz;
            mesh.children[0].material = jwellMaterial;
            mesh.children[1].material = goldMaterial;
            mesh.children[2].material = goldMaterial;
            stone.innerHTML = text[10]["Stone"];
            japaneseName.innerHTML = text[10]["Japanese Name"];
            month.innerHTML = text[10]["Attribute"]["Month"];
            meaning.innerHTML = "石言葉：" + text[10]["Attribute"]["Meaning"];
        });
    else if(btn.id === "December")
        btn.addEventListener('click', function(){
            //sceneにsphereを追加
            mesh = sphere;
            scene.add(mesh);
            //既にbrilliantがあれば削除
            if(brilliant){
                scene.remove(brilliant);
            }
            jwellMaterial = turquoise;
            mesh.children[0].material = goldMaterial;
            mesh.children[1].material = goldMaterial;
            mesh.children[2].material = jwellMaterial;
            stone.innerHTML = text[11]["Stone"];
            japaneseName.innerHTML = text[11]["Japanese Name"];
            month.innerHTML = text[11]["Attribute"]["Month"];
            meaning.innerHTML = "石言葉：" + text[11]["Attribute"]["Meaning"];
        });
}



var ss = document.getElementById("ss");
ss.addEventListener("click",function(){
    //renderer.domElementに描画された内容をJPG形式で保存
    var output = document.getElementById("webgl").children[0];
    var dataURL = output.toDataURL("image/jpeg");
    //console.log(dataURL);
    //保存した画像をダウンロードするaタグを生成
    var a = document.createElement("a");
    a.download = 'birthstone.jpg';
    a.href = dataURL;
    a.click();
});
    


