var boxes= document.querySelectorAll(".box");
var box1move =0;
var box2move =0;
var box3move =0;
var box4move =0;
var box5move =0;
var moveAmount1 =5;
var moveAmount2 =10;
var moveAmount3 =15;
var moveAmount4 =20;
var moveAmount5 =25;

//-----1---------//
boxes[0].style.backgroundColor = "green";

function boxClicked1() {
console.log("hey, I am Box1!");
    box1move += moveAmount1;
    boxes[0].style.marginLeft = box1move + "px";
}
boxes[0].addEventListener("click",boxClicked1);


//--------2--------//
boxes[1].style.backgroundColor = "purple";

function boxClicked2() {
    console.log("hey, I am Box2!");
    box2move += moveAmount2;
 boxes[1].style.marginLeft = box2move + "px";
}
boxes[1].addEventListener("click",boxClicked2);

//--------3----------//
boxes[2].style.backgroundColor = "#191919";

function boxClicked3() {
    console.log("hey, I am Box3!");
    box3move += moveAmount3;
 boxes[2].style.marginLeft = box3move + "px";
}
boxes[2].addEventListener("click",boxClicked3);

//-----------4----------//
boxes[3].style.backgroundColor = "blanchedalmond";


function boxClicked4() {
  console.log("hey, I am Box4!");
 box4move += moveAmount4;
 boxes[3].style.marginLeft = box4move + "px";
}
boxes[3].addEventListener("dblclick",boxClicked4);

//----------4-----------//
boxes[4].style.backgroundColor = "default color";

function boxClicked5() {
    console.log("hey, I am Box4!");
    box5move += moveAmount5;
 boxes[4].style.marginTop = box5move + "px";
}
boxes[4].addEventListener("click",boxClicked5);

