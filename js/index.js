let boy = document.getElementById('Boy');
let bg = document.getElementById('content');

var arr = [];
var walk = [];

let kit = 0;

let fly = 7090;

let slowwalk = true;
let opition = 1;
let initcounts = -180;
let mm = 0;
let isGo = true;

let toX = 0;
let toY = 0;
let boytoX = 0;
let boytoY = 0;
let speed = 20;

let is_walk_leftX = true;
let is_walk_topY = false;
let is_walk_bottomY = false;

let si_walk_topY = false;
let si_walk_rightX = true;
let si_walk_bottomY = false;

let kite_run = () => {
    kit += 4;
    document.getElementById('kite3').style.webkitTransform = "rotate(" + kit.toString() + "deg)";
    document.getElementById('kite4').style.webkitTransform = "rotate(" + kit.toString() + "deg)";
    document.getElementById('kite5').style.webkitTransform = "rotate(" + kit.toString() + "deg)";
    document.getElementById('kite6').style.webkitTransform = "rotate(" + kit.toString() + "deg)";
};

let ki = setInterval("kite_run()", 5);
school();

$("#click_plane").click(function () {
    document.getElementById("Boy").style.display = "none"
    $("#click_mask").addClass("app")
    $("#jinali_click").addClass("app")
})
$("#click_mask").click(function () {
    $("#click_mask").removeClass("app")
    $("#jinali_click").removeClass("app")
    document.getElementById("Boy").style.display = "block"
})

let ff = setInterval("bird_fly()", 50);
function bird_fly() {
    fly -= 10;
    document.getElementById("birdfly").style.left = fly.toString() + "px";
    if (fly < -100 ) {
        fly = 7090;
    }
}

function job() {
    $("#kkk1").addClass("kiteRun1");
    let r1 = setTimeout("$(\"#kkk2\").addClass(\"kiteRun2\");document.getElementById('kkk1').style.bottom = '488px';", 400);
    let r2 = setTimeout("$(\"#kkk3\").addClass(\"kiteRun2\");document.getElementById('kkk2').style.bottom = '390px';", 800);
    let r3 = setTimeout("$(\"#kkk4\").addClass(\"kiteRun3\");document.getElementById('kkk3').style.bottom = '390px';", 1200);
    let r4 = setTimeout("document.getElementById('kkk4').style.bottom = '292px';", 1600);
}
function school() {
    $("#school1").addClass("schoolRun");
    let r1 = setTimeout("$(\"#school2\").addClass(\"schoolRun\");", 1000);
    let r2 = setTimeout("$(\"#school3\").addClass(\"schoolRun\");", 2000);
    let r3 = setTimeout("$(\"#school4\").addClass(\"schoolRun\");", 3000);
    let r4 = setTimeout("$(\"#school5\").addClass(\"schoolRun\");", 4000);
    let r5 = setTimeout("$(\"#school6\").addClass(\"schoolRun\");", 5000);
    let r6 = setTimeout("$(\"#school7\").addClass(\"schoolRun\");", 6000);
    let r7 = setTimeout("$(\"#school8\").addClass(\"schoolRun\");", 7000);
}

function refreshLeft() {
    if (is_walk_leftX) {
        if (toX === -5040 && toY === 0) {
            // 准备下海
            is_walk_leftX = false;
            is_walk_bottomY = true;
            si_walk_rightX = false;
            si_walk_bottomY = false;
            si_walk_topY = true;
            refreshLeft();
        }else if (toX === -18140 && toY === -1240) {
            // 上电梯
            is_walk_leftX = false;
            is_walk_topY = true;
            si_walk_rightX = false;
            si_walk_bottomY = true;
            si_walk_topY = false;
            refreshLeft();
        }else if (toX === -21920 && toY === 80){
            // 终点
            $("#Boy").removeClass("slowWalk");
            $("#pplane").addClass("planeRun");
            var gg1 = setTimeout("$(\"#jjianshu\").addClass(\"conchange\");", 3000);
            var gg2 = setTimeout("$(\"#ggithub\").addClass(\"conchange\");", 3000);
            var gg3 = setTimeout("$(\"#aarrow\").addClass(\"otherchange\");", 3000);
            var gg4 = setTimeout("$(\"#ccheckjianli\").addClass(\"otherchange\");", 3000);
            return ;
        }else {
            toX -= speed;
            bg.style.transform = "translate3d(" + toX.toString() + 'px' + ',' + toY.toString() + 'px' + ', 0' + ')';
        }
    }else if(is_walk_topY) {
        if (toX === -18140 && toY === 80) {
            // 出电梯
            is_walk_leftX = true;
            is_walk_topY = false;
            si_walk_rightX = true;
            si_walk_bottomY = false;
            si_walk_topY = false;
            refreshLeft();
        }else {
            if (toY === 60) {
                boytoY = -80;
                liftF()
            }else {
                boytoY -= 3;
            }
            boy.style.transform = "translate3d(" + boytoX.toString() + 'px' + ',' + boytoY.toString() + 'px' + ', 0' + ')';
            toY += speed;
            bg.style.transform = "translate3d(" + toX.toString() + 'px' + ',' + toY.toString() + 'px' + ', 0' + ')';
        }
    }else if(is_walk_bottomY) {
        $("#Boy").removeClass("slowWalk");
    }
}
function refreshRight() {
    if(si_walk_rightX) {
        if (toX === -18140 && toY === 80) {
            // 进电梯
            si_walk_rightX = false;
            si_walk_bottomY = true;
            is_walk_leftX = false;
            is_walk_topY = true;
            is_walk_bottomY = false;
            refreshRight()
        }else if (toX === -5800 && toY === -1240) {
            // 准备出海
            si_walk_rightX = false;
            si_walk_topY = true;
            is_walk_leftX = false;
            is_walk_topY = false;
            is_walk_bottomY = true;
            refreshRight()
        }else if (toX === 0 && toY === 0) {
            // 起点
            $("#Boy").removeClass("slowWalk");
            return ;
        }else {
            toX += speed;
            bg.style.transform = "translate3d(" + toX.toString() + 'px' + ',' + toY.toString() + 'px' + ', 0' + ')';
        }
    }else if(si_walk_topY) {
        $("#Boy").removeClass("slowWalk");
    }else if(si_walk_bottomY) {
        if (toX === -18140 && toY === -1240) {
            // 出电梯
            si_walk_rightX = true;
            si_walk_bottomY = false;
            is_walk_leftX = true;
            is_walk_topY = false;
            is_walk_bottomY = false;
            refreshRight()
        }else {
            if (toY === -1220) {
                boytoY = 140;
                liftR();
            }else {
                boytoY += 3;
            }
            boy.style.transform = "translate3d(" + boytoX.toString() + 'px' + ',' + boytoY.toString() + 'px' + ', 0' + ')';
            toY -= speed;
            bg.style.transform = "translate3d(" + toX.toString() + 'px' + ',' + toY.toString() + 'px' + ', 0' + ')';
        }
    }
}

function openDoor(tag) {
    let door = "";
    let doorbut = "";
    if (tag) {
        door = document.getElementById('leftdoor');
        doorbut = document.getElementById('doorbut1');
    }
    else {
        door = document.getElementById('rightdoor');
        doorbut = document.getElementById('doorbut2');
    }
    let styleDoor = window.getComputedStyle(door ,null).transform;
    let styleDoorbut = window.getComputedStyle(doorbut ,null).webkitTransform;

    let y = parseInt((styleDoor.split('(')[1].split(')')[0].split(','))[5]) - 2;
    let butValue = (styleDoorbut.split('(')[1].split(')')[0].split(','));
    let a1 = butValue[0];
    let a2 = butValue[1];
    let angle = Math.round(Math.atan2(a2, a1) * (180 / Math.PI)) + 3;

    if (y >= -299) {
        door.style.transform = "translate3d(" + '0px' + ',' + y.toString() + 'px' + ', 0' + ')';
        doorbut.style.webkitTransform = "rotate(" + angle.toString() + "deg)";
    }else {
        clearInterval(arr[arr.length - 1]);
    }
}
function closeDoor(tag) {
    let door = "";
    let doorbut = "";
    if (tag) {
        door = document.getElementById('leftdoor');
        doorbut = document.getElementById('doorbut1');
    }
    else {
        door = document.getElementById('rightdoor');
        doorbut = document.getElementById('doorbut2');
    }
    let styleDoor = window.getComputedStyle(door ,null).transform;
    let styleDoorbut = window.getComputedStyle(doorbut ,null).webkitTransform;

    let y = parseInt((styleDoor.split('(')[1].split(')')[0].split(','))[5]) + 2;
    let butValue = (styleDoorbut.split('(')[1].split(')')[0].split(','));
    let a1 = butValue[0];
    let a2 = butValue[1];
    let angle = Math.round(Math.atan2(a2, a1) * (180 / Math.PI)) - 3;

    if (y <= 0) {
        door.style.transform = "translate3d(" + '0px' + ',' + y.toString() + 'px' + ', 0' + ')';
        doorbut.style.webkitTransform = "rotate(" + angle.toString() + "deg)";
    }else {
        clearInterval(arr[arr.length - 1]);
    }
}

function liftF() {
    $("#Boy").removeClass("slowWalk");
    let count = speed + 3;
    // if (toY === 60 || toY=== -1240){
    //     count = speed +2;
    // }

    let stylelift = document.getElementById('Lift');
    // let stylediaoxian = document.getElementById('xianxian');
    // let heightdiaoxian = parseInt(getComputedStyle(stylediaoxian, null).height) - count;
    // let bottomdiaoxian = parseInt(getComputedStyle(stylediaoxian, null).bottom) + count;
    let styleLeft = window.getComputedStyle(stylelift ,null).transform;
    let y = parseInt((styleLeft.split('(')[1].split(')')[0].split(','))[5]) - count;
    if (y >= -1545) {
        // stylediaoxian.style.height = heightdiaoxian.toString() + "px";
        // stylediaoxian.style.bottom = bottomdiaoxian.toString() + "px";
        stylelift.style.transform = "translate3d(" + '0px' + ',' + y.toString() + 'px' + ', 0' + ')';
    }
}
function liftR() {
    $("#Boy").removeClass("slowWalk");
    let count = speed + 3;
    // if (toY === -1220 || toY === 80){
    //     count = speed +2;
    // }

    let stylelift = document.getElementById('Lift');
    // let stylediaoxian = document.getElementById('xianxian');
    // let heightdiaoxian = parseInt(getComputedStyle(stylediaoxian, null).height) + count;
    // let bottomdiaoxian = parseInt(getComputedStyle(stylediaoxian, null).bottom) - count;
    let styleLeft = window.getComputedStyle(stylelift ,null).transform;
    let y = parseInt((styleLeft.split('(')[1].split(')')[0].split(','))[5]) + count;
    if (y <= 0) {
        // stylediaoxian.style.height = heightdiaoxian.toString() + "px";
        // stylediaoxian.style.bottom = bottomdiaoxian.toString() + "px";
        stylelift.style.transform = "translate3d(" + '0px' + ',' + y.toString() + 'px' + ', 0' + ')';
    }
}

function jiazirunleft() {
    document.getElementById('robot').style.bottom = 1340 + "px";
    $("Boy").removeClass("slowWalk");

    let rotleft = document.getElementById('rot1');
    let rotright = document.getElementById('rot2');
    let rotmid = document.getElementById('rot3');
    let styleleft = window.getComputedStyle(rotleft ,null).webkitTransform;
    let styleright = window.getComputedStyle(rotright ,null).webkitTransform;
    let stylemid = parseInt(getComputedStyle(rotmid, null).bottom) + 2;

    let leftValue = (styleleft.split('(')[1].split(')')[0].split(','));
    let a1 = leftValue[0];
    let a2 = leftValue[1];
    let angleleft = Math.round(Math.atan2(a2, a1) * (180 / Math.PI)) - 2;

    let rightValue = (styleright.split('(')[1].split(')')[0].split(','));
    a1 = rightValue[0];
    a2 = rightValue[1];
    let angleright = Math.round(Math.atan2(a2, a1) * (180 / Math.PI)) + 2;

    if (angleleft === -37) {
        clearInterval(arr[arr.length - 1]);
        arr.push(setInterval(sendDown, 20));
    }else {
        rotleft.style.webkitTransform = "rotate(" + angleleft.toString() + "deg)";
        rotright.style.webkitTransform = "rotate(" + angleright.toString() + "deg)";
        rotmid.style.bottom = stylemid + "px";
    }
}
function sendDown() {
    let stylerobot = document.getElementById('robot');
    let boot = window.getComputedStyle(stylerobot ,null).webkitTransform;
    let y = parseInt((boot.split('(')[1].split(')')[0].split(','))[5]);
    let x = parseInt((boot.split('(')[1].split(')')[0].split(','))[4]);
    if (toX === -5800){
        toY -= 20;
        boytoY += 3;
        y +=  23;
    }else {
        toX -= 20;
        x += 20;
    }
    boy.style.transform = "translate3d(" + '0px' + ',' + boytoY.toString() + 'px' + ', 0' + ')';
    stylerobot.style.transform = "translate3d(" + x.toString() + 'px' + ',' + y.toString() + 'px' + ', 0' + ')';
    bg.style.transform = "translate3d(" + toX.toString() + 'px' + ',' + toY.toString() + 'px' + ', 0' + ')';
    if (toY === -1240){
        clearInterval(arr[arr.length - 1]);
        sendUp();
    }
}
function sendUp() {
    boytoY = 200;
    boy.style.transform = "translate3d(" + '0px' + ',' + boytoY.toString() + 'px' + ', 0' + ')';

    $("#robot").removeClass("raremiss1");
    $("#robot").addClass("rareappeace1");

    let rotleft = document.getElementById('rot1');
    let rotright = document.getElementById('rot2');
    let rotmid = document.getElementById('rot3');

    rotleft.style.webkitTransform = "rotate(-15deg)";
    rotright.style.webkitTransform = "rotate(15deg)";
    rotmid.style.bottom = "340px";

    let tt = setTimeout("document.getElementById('robot').style.bottom = 2880 + \"px\";", 1000);

    si_walk_rightX = true;
    is_walk_leftX = true;
    is_walk_bottomY = false;

    isGo = true;
}

function jiazirunright() {
    document.getElementById('robot').style.bottom = 1328 + "px";
    $("Boy").removeClass("slowWalk");

    let rotleft = document.getElementById('rot1');
    let rotright = document.getElementById('rot2');
    let rotmid = document.getElementById('rot3');
    let styleleft = window.getComputedStyle(rotleft ,null).webkitTransform;
    let styleright = window.getComputedStyle(rotright ,null).webkitTransform;
    let stylemid = parseInt(getComputedStyle(rotmid, null).bottom) + 2;

    let leftValue = (styleleft.split('(')[1].split(')')[0].split(','));
    let a1 = leftValue[0];
    let a2 = leftValue[1];
    let angleleft = Math.round(Math.atan2(a2, a1) * (180 / Math.PI)) - 2;

    let rightValue = (styleright.split('(')[1].split(')')[0].split(','));
    a1 = rightValue[0];
    a2 = rightValue[1];
    let angleright = Math.round(Math.atan2(a2, a1) * (180 / Math.PI)) + 2;

    if (angleleft === -37) {
        clearInterval(arr[arr.length - 1]);
        arr.push(setInterval(sendDownright, 20));
    }else {
        rotleft.style.webkitTransform = "rotate(" + angleleft.toString() + "deg)";
        rotright.style.webkitTransform = "rotate(" + angleright.toString() + "deg)";
        rotmid.style.bottom = stylemid + "px";
    }
}
function sendDownright() {
    let stylerobot = document.getElementById('robot');
    let boot = window.getComputedStyle(stylerobot ,null).webkitTransform;
    let y = parseInt((boot.split('(')[1].split(')')[0].split(','))[5]);
    let x = parseInt((boot.split('(')[1].split(')')[0].split(','))[4]);
    if (toY === 0){
        toX += 20;
        x -= 20;
    }else {
        toY += 20;
        boytoY -= 4;
        y -=  24;
    }
    boy.style.transform = "translate3d(" + '0px' + ',' + boytoY.toString() + 'px' + ', 0' + ')';
    stylerobot.style.transform = "translate3d(" + x.toString() + 'px' + ',' + y.toString() + 'px' + ', 0' + ')';
    bg.style.transform = "translate3d(" + toX.toString() + 'px' + ',' + toY.toString() + 'px' + ', 0' + ')';
    if (toX === -5040){
        clearInterval(arr[arr.length - 1]);
        sendUpright();
    }
}
function sendUpright() {
    boytoY = 0;
    boy.style.transform = "translate3d(" + '0px' + ',' + boytoY.toString() + 'px' + ', 0' + ')';
    let stylerobot = document.getElementById('robot');
    stylerobot.style.transform = "translate3d(0,0,0)";

    $("#robot").removeClass("raremiss2");
    $("#robot").addClass("rareappeace2");

    let rotleft = document.getElementById('rot1');
    let rotright = document.getElementById('rot2');
    let rotmid = document.getElementById('rot3');

    rotleft.style.webkitTransform = "rotate(-15deg)";
    rotright.style.webkitTransform = "rotate(15deg)";
    rotmid.style.bottom = "340px";

    let tt = setTimeout("document.getElementById('robot').style.bottom = 2880 + \"px\";", 1000);

    si_walk_rightX = true;
    si_walk_topY = false;
    is_walk_leftX = true;

    isGo = true;
}

function fishGGGo1() {
    let fishfo = [];
    $("#ff1").addClass("fishRun_shanchang");

    fishfo.push(setTimeout("$(\"#ff2\").addClass(\"fishRun_shanchang\");", 300));
    fishfo.push(setTimeout("$(\"#ff3\").addClass(\"fishRun_zhangwo\");", 600));
    fishfo.push(setTimeout("$(\"#ff4\").addClass(\"fishRun_shuxi\");", 1200));

    fishfo.push(setTimeout("$(\"#ff5\").addClass(\"fishRun_shanchang\");", 200));
    fishfo.push(setTimeout("$(\"#ff6\").addClass(\"fishRun_shanchang\");", 500));
    fishfo.push(setTimeout("$(\"#ff7\").addClass(\"fishRun_zhangwo\");", 800));
    fishfo.push(setTimeout("$(\"#ff8\").addClass(\"fishRun_shuxi\");", 1100));

    fishfo.push(setTimeout("$(\"#ff9\").addClass(\"fishRun_jingtong\");", 400));
    fishfo.push(setTimeout("$(\"#ff10\").addClass(\"fishRun_shanchang\");", 700));
    fishfo.push(setTimeout("$(\"#ff11\").addClass(\"fishRun_zhangwo\");", 1000));
    fishfo.push(setTimeout("$(\"#ff12\").addClass(\"fishRun_shuxi\");", 1300));

    fishfo.push(setTimeout("$(\"#ff13\").addClass(\"fishRun_jingtong\");", 600));
    fishfo.push(setTimeout("$(\"#ff14\").addClass(\"fishRun_shanchang\");", 900));
    fishfo.push(setTimeout("$(\"#ff15\").addClass(\"fishRun_zhangwo\");", 1200));
    fishfo.push(setTimeout("$(\"#ff16\").addClass(\"fishRun_shuxi\");", 1500));
}
function fishGGGo2() {
    let fishfo = [];
    $("#fa1").addClass("fishRun_jingtong");

    fishfo.push(setTimeout("$(\"#fa2\").addClass(\"fishRun_shanchang\");", 300));
    fishfo.push(setTimeout("$(\"#fa3\").addClass(\"fishRun_zhangwo\");", 600));
    fishfo.push(setTimeout("$(\"#fa4\").addClass(\"fishRun_shuxi\");", 1200));

    fishfo.push(setTimeout("$(\"#fa5\").addClass(\"fishRun_jingtong\");", 200));
    fishfo.push(setTimeout("$(\"#fa6\").addClass(\"fishRun_shanchang\");", 500));
    fishfo.push(setTimeout("$(\"#fa7\").addClass(\"fishRun_zhangwo\");", 800));
    fishfo.push(setTimeout("$(\"#fa8\").addClass(\"fishRun_shuxi\");", 1100));

    fishfo.push(setTimeout("$(\"#fa9\").addClass(\"fishRun_jingtong\");", 400));
    fishfo.push(setTimeout("$(\"#fa10\").addClass(\"fishRun_shanchang\");", 700));
    fishfo.push(setTimeout("$(\"#fa11\").addClass(\"fishRun_zhangwo\");", 1000));
    fishfo.push(setTimeout("$(\"#fa12\").addClass(\"fishRun_shuxi\");", 1300));

    fishfo.push(setTimeout("$(\"#fa13\").addClass(\"fishRun_shanchang\");", 600));
    fishfo.push(setTimeout("$(\"#fa14\").addClass(\"fishRun_shanchang\");", 900));
    fishfo.push(setTimeout("$(\"#fa15\").addClass(\"fishRun_zhangwo\");", 1200));
    fishfo.push(setTimeout("$(\"#fa16\").addClass(\"fishRun_shuxi\");", 1500));
}
function fishGGGo3() {
    let fishfo = [];
    $("#f1").addClass("fishRun_jingtong");

    fishfo.push(setTimeout("$(\"#f2\").addClass(\"fishRun_shanchang\");", 300));
    fishfo.push(setTimeout("$(\"#f3\").addClass(\"fishRun_zhangwo\");", 600));
    fishfo.push(setTimeout("$(\"#f4\").addClass(\"fishRun_shuxi\");", 1200));

    fishfo.push(setTimeout("$(\"#f5\").addClass(\"fishRun_shanchang\");", 200));
    fishfo.push(setTimeout("$(\"#f6\").addClass(\"fishRun_shanchang\");", 500));
    fishfo.push(setTimeout("$(\"#f7\").addClass(\"fishRun_zhangwo\");", 800));
    fishfo.push(setTimeout("$(\"#f8\").addClass(\"fishRun_shuxi\");", 1100));

    fishfo.push(setTimeout("$(\"#f9\").addClass(\"fishRun_shanchang\");", 400));
    fishfo.push(setTimeout("$(\"#f10\").addClass(\"fishRun_shanchang\");", 700));
    fishfo.push(setTimeout("$(\"#f11\").addClass(\"fishRun_zhangwo\");", 1000));
    fishfo.push(setTimeout("$(\"#f12\").addClass(\"fishRun_shuxi\");", 1300));

    fishfo.push(setTimeout("$(\"#f13\").addClass(\"fishRun_jingtong\");", 600));
    fishfo.push(setTimeout("$(\"#f14\").addClass(\"fishRun_shanchang\");", 900));
    fishfo.push(setTimeout("$(\"#f15\").addClass(\"fishRun_zhangwo\");", 1200));
    fishfo.push(setTimeout("$(\"#f16\").addClass(\"fishRun_shuxi\");", 1500));
}

