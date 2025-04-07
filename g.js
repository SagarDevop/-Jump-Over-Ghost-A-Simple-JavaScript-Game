 score = 0;
 cross = true;
 boy = document.querySelector(".boy");
gameover = document.querySelector(".gameover")
obstacle = document.querySelector(".obstacle")
ScoreCont = document.querySelector(".score")
audioBg = new Audio("bg.mp3")
audioBg.play();



 

document.onkeydown = function (e) {
    console.log (e.keyCode)
    if(e.keyCode == 38){
       
      jumpboy();
    }
    if(e.keyCode==39){
        boyX = parseInt(window.getComputedStyle(boy,null).getPropertyValue("left"));
        boy.style.left =boyX + 100 + "px"
    }if(e.keyCode==37){
        boyX = parseInt(window.getComputedStyle(boy,null).getPropertyValue("left"));
        boy.style.left =boyX - 100 + "px"
    }
}
setInterval(() => {
    checkcolision();
}, 100);



  const jumpboy = () =>{
    boy.classList.add("animateboy")
    setTimeout(()=>{
    boy.classList.remove("animateboy")
    },700);
};

  const checkcolision = () =>{
    dx = parseInt(window.getComputedStyle(boy,null).getPropertyValue("left"))
    dy = parseInt(window.getComputedStyle(boy,null).getPropertyValue("top"))

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("left"))
    oy= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("top"))

    offsetX = Math.abs(dx-ox)
    offsety = Math.abs(dy-oy)
    console.log(offsetX,offsety)

    if(offsetX<56 && offsety<70){
        gameover.style.visibility ="visible";
        obstacle.classList.remove("obstacleani")
     }else if( offsetX<145 && cross){
        score+=1;
        updscore(score);
        cross=false;
        setTimeout(() => {
            cross =true
        }, 1000);
        setTimeout(() => {
          anidur= parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue("animationduration"))
          newdur = anidur - 0.8;
          obstacle.style.animationduration = newdur + 's';
          
        }, 500);
  }
}
 
  function updscore(score){
    ScoreCont.innerHTML = "your score: "+score
  }







