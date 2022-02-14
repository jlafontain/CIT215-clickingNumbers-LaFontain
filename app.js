let boxNumbers = ["red", "green", "blue"];
let newbox = [];

function box(color, count){
  let that = this
  this.color = color;
  this.count =0;
  this.ele=document.createElement("div");
  this.ele.innerHTML=this.count
  this.ele.style.height = "100px";
  this.ele.style.width = "200px";
  this.ele.style.borderRadius = "10px";
  this.ele.style.fontSize = "18px";
  this.ele.style.textAlign = "center";
  this.ele.style.lineHeight = "100px";
  this.ele.style.backgroundColor = this.color;

  this.ele.addEventListener("click", function(){
    that.numberUp();
  })
  document.body.appendChild(this.ele);
  }

box.prototype.numberUp = function(){
  this.count=this.count + 1;
  this.ele.innerHTML = this.count;
}

for( let i=0; i<boxNumbers.length; i++){
  newbox.push(new box(boxNumbers[i]), 0)
}









