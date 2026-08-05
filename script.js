
const music =
document.getElementById("bgMusic");



function openGift(){


    document
    .getElementById("opening")
    .style.display="none";


    document
    .getElementById("birthday")
    .classList.remove("hidden");



    music.play();


}




function toggleMusic(){


    if(music.paused){

        music.play();

    }

    else{

        music.pause();

    }

}




function makeWish(){


    document
    .getElementById("wishMessage")
    .innerHTML=
    "✨ Your wish has been sent ✨<br>Ayaka will protect your happiness ❄️";


    createParticles();

}




function createSnow(){


let snow =
document.querySelector(".snow-container");



for(let i=0;i<60;i++){


let s=document.createElement("div");


s.className="snowflake";


s.innerHTML="❄";


s.style.left=
Math.random()*100+"vw";


s.style.animationDuration=
(3+Math.random()*5)+"s";


s.style.opacity=
Math.random();



snow.appendChild(s);


}

}



function createParticles(){


for(let i=0;i<30;i++){


let p=document.createElement("div");


p.innerHTML="🌸";


p.style.position="fixed";


p.style.left="50%";

p.style.top="50%";


p.style.fontSize="25px";


p.style.animation=
"fall 3s linear";


document.body.appendChild(p);



setTimeout(()=>{

p.remove();

},3000);



}


}



createSnow();
