var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c4e310e0-8174-4127-a46e-0cbcc94b488b","9d7aab1e-4c8e-4560-91b3-e7912c5630de","00e9a6c4-62a5-497a-8085-7ecfe38effe2","97db6a1f-8004-4137-80ab-1ec3339f4dc3","c2a629fd-040f-424a-81a4-71f6d8d38e9d","dd21b5f7-6113-409a-bd8c-61154b418707","38041cbd-99c8-4a14-b9a7-feef9c34f76e","40d06733-c987-4c9f-8bb2-410d0a219e45","a4156e3d-141e-4f81-8c56-895294144684","bc523ffd-8828-42d9-a0db-1eb13152ecc5","1b605f68-1a76-4328-9cbc-faea736d4514","f401b7a9-25d0-4e5c-a7a5-45c3e049faaf"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"jGb2xyGC1Bs9fGBx3jwV9_2K_eOkSnQC","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"hczr3TScwDSZx5xjdf29il7A2n75ZD98","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"eFy9qG0EGX5P2hvA0i02Ne9rE7_BagjU","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"9d7aab1e-4c8e-4560-91b3-e7912c5630de":{"name":"lamasus","sourceUrl":null,"frameSize":{"x":355,"y":341},"frameCount":1,"looping":true,"frameDelay":12,"version":"af8mN_ifAmUvHHwhRv9u1OqQEBTBT5os","loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":341},"rootRelativePath":"assets/9d7aab1e-4c8e-4560-91b3-e7912c5630de.png"},"00e9a6c4-62a5-497a-8085-7ecfe38effe2":{"name":"lamasus_copy_1","sourceUrl":null,"frameSize":{"x":355,"y":327},"frameCount":1,"looping":true,"frameDelay":12,"version":"SYdOfFh.Wtp.461qvHkNjFhp7OiTKF76","loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":327},"rootRelativePath":"assets/00e9a6c4-62a5-497a-8085-7ecfe38effe2.png"},"97db6a1f-8004-4137-80ab-1ec3339f4dc3":{"name":"lamasus_copy_1_copy_1","sourceUrl":null,"frameSize":{"x":355,"y":370},"frameCount":1,"looping":true,"frameDelay":12,"version":"qLK2emHrcRuGy_JVeclp3cbqAjURGS9i","loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":370},"rootRelativePath":"assets/97db6a1f-8004-4137-80ab-1ec3339f4dc3.png"},"c2a629fd-040f-424a-81a4-71f6d8d38e9d":{"name":"lamasus_copy_1_copy_1_copy_1","sourceUrl":null,"frameSize":{"x":355,"y":370},"frameCount":1,"looping":true,"frameDelay":12,"version":"Si3mrT_utgpqnImyN.7zfVKAoKqJWAEB","loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":370},"rootRelativePath":"assets/c2a629fd-040f-424a-81a4-71f6d8d38e9d.png"},"dd21b5f7-6113-409a-bd8c-61154b418707":{"name":"puasus","sourceUrl":null,"frameSize":{"x":320,"y":225},"frameCount":1,"looping":true,"frameDelay":12,"version":"Bs1bw1pq33tooleKFidyJ6lC2A7upikn","loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":225},"rootRelativePath":"assets/dd21b5f7-6113-409a-bd8c-61154b418707.png"},"38041cbd-99c8-4a14-b9a7-feef9c34f76e":{"name":"puasus_copy_1","sourceUrl":null,"frameSize":{"x":320,"y":225},"frameCount":1,"looping":true,"frameDelay":12,"version":"oZaZJK8P79k5MK7OLuPQQKgbm68cT7im","loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":225},"rootRelativePath":"assets/38041cbd-99c8-4a14-b9a7-feef9c34f76e.png"},"40d06733-c987-4c9f-8bb2-410d0a219e45":{"name":"metasus","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"VHPbf63udluK55RlQj0dRJ_Xhes6Qxc.","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/40d06733-c987-4c9f-8bb2-410d0a219e45.png"},"a4156e3d-141e-4f81-8c56-895294144684":{"name":"cacsus","sourceUrl":null,"frameSize":{"x":320,"y":524},"frameCount":1,"looping":true,"frameDelay":12,"version":"0CUllrwBHBS6yOz46FLaZ5fk5nKaEFiE","loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":524},"rootRelativePath":"assets/a4156e3d-141e-4f81-8c56-895294144684.png"},"bc523ffd-8828-42d9-a0db-1eb13152ecc5":{"name":"dirt","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"3mhkzStGvSH8YX8NEaQ7e2XZbvg_XbGL","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/bc523ffd-8828-42d9-a0db-1eb13152ecc5.png"},"1b605f68-1a76-4328-9cbc-faea736d4514":{"name":"serpesus","sourceUrl":null,"frameSize":{"x":400,"y":165},"frameCount":1,"looping":true,"frameDelay":12,"version":"NpnEvlFUwnAfETZVS3BBngYa9DRNx69Z","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":165},"rootRelativePath":"assets/1b605f68-1a76-4328-9cbc-faea736d4514.png"},"f401b7a9-25d0-4e5c-a7a5-45c3e049faaf":{"name":"serpesus_copy_1","sourceUrl":null,"frameSize":{"x":400,"y":165},"frameCount":1,"looping":true,"frameDelay":12,"version":"fCRA6LAjWly8nB_JKHnuVD.Tm6AOvcem","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":165},"rootRelativePath":"assets/f401b7a9-25d0-4e5c-a7a5-45c3e049faaf.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var dirt = createSprite(200,200);
 dirt.setAnimation("dirt");
 dirt.scale=4;
var lamasus = createSprite(200,345,200,345);
lamasus.shapeColor="red";

var enemy1 = createSprite(200,250,10,10);
enemy1.shapeColor="red";

var enemy2 = createSprite(200,150,10,10);
enemy2.shapeColor="red";

var enemy3 = createSprite(200,50,10,10);
enemy3.shapeColor="red";

var net = createSprite(200,5,200,20);
net.shapeColor="red";

var goal =0;
var death = 0;

lamasus.setAnimation("lamasus");
lamasus.scale=0.2;
enemy1.setAnimation("serpesus_copy_1");
enemy1.scale=0.1;
enemy2.setAnimation("puasus_copy_1");
enemy2.scale=0.1;
enemy3.setAnimation("cacsus");
enemy3.scale=0.1;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);


function draw() {
  

createEdgeSprites();


enemy3.bounceOff(edges);

if(enemy1.bounceOff(leftEdge)){
  enemy1.setAnimation("serpesus");
}
if(enemy1.bounceOff(rightEdge)){
  enemy1.setAnimation("serpesus_copy_1");
}
if(enemy2.bounceOff(leftEdge)){
  enemy2.setAnimation("puasus_copy_1");
}
if(enemy2.bounceOff(rightEdge)){
  enemy2.setAnimation("puasus");
}

if(keyDown(UP_ARROW)){
  lamasus.y=lamasus.y-3;
  lamasus.setAnimation("lamasus_copy_1_copy_1");
}

if(keyDown(DOWN_ARROW)){
  lamasus.y=lamasus.y+3;
  lamasus.setAnimation("lamasus_copy_1_copy_1_copy_1");
}

if(keyDown(LEFT_ARROW)){
  lamasus.x=lamasus.x-3;
  lamasus.setAnimation("lamasus");
}

if(keyDown(RIGHT_ARROW)){
  lamasus.x=lamasus.x+3;
  lamasus.setAnimation("lamasus_copy_1");
}

if(lamasus.isTouching(enemy1)|| lamasus.isTouching(enemy2)|| lamasus.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3");
  lamasus.x=200;
  lamasus.y=350;
  death = death+1;
}
if(lamasus.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  lamasus.x=200;
  lamasus.y=345;
  goal=goal+1;
}
textSize(20);
  fill("blue");
  text("Goals:"+goal,320,350);
  

textSize(20);
  fill("blue");
  text("death:"+death,20,350);
  
drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
