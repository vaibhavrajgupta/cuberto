var cursor = document.querySelector(".cursor");
var main = document.querySelector(".main");

const mouseMove = ()=>{
    main.addEventListener("mousemove", (dets) =>{
        cursor.style.left = dets.x + "px";
        cursor.style.top = dets.y + "px";
    })
}

const vaibhav = () =>{
    document.querySelector("#overlay1").addEventListener("mousemove", (dets)=>{
        cursor.style.opacity = 0;
        document.querySelector("#elem1 img").style.scale = 1;
        document.querySelector("#elem1 img").style.opacity = 1;
        document.querySelector("#elem1 img").style.left = (dets.x - 255) + "px";
        document.querySelector("#elem1 img").style.top = (dets.y - 350) + "px";
    })
    document.querySelector("#overlay1").addEventListener("mouseleave", (dets)=>{
        cursor.style.opacity = 0;
        document.querySelector("#elem1 img").style.scale = 0;
        document.querySelector("#elem1 img").style.opacity = 0;
    })
}
const raj = () =>{
    document.querySelector("#overlay2").addEventListener("mousemove", (dets)=>{
        cursor.style.opacity = 0;
        document.querySelector("#elem2 img").style.scale = 1;
        document.querySelector("#elem2 img").style.opacity = 1;
        document.querySelector("#elem2 img").style.left = (dets.x - 655) + "px";
        document.querySelector("#elem2 img").style.top = (dets.y - 350) + "px";
    })
    document.querySelector("#overlay2").addEventListener("mouseleave", (dets)=>{
        cursor.style.opacity = 0;
        document.querySelector("#elem2 img").style.scale = 0;
        document.querySelector("#elem2 img").style.opacity = 0;
    })
}
const gupta = () =>{
    document.querySelector("#overlay3").addEventListener("mousemove", (dets)=>{
        cursor.style.opacity = 0;
        document.querySelector("#elem3 img").style.scale = 1;
        document.querySelector("#elem3 img").style.opacity = 1;
        document.querySelector("#elem3 img").style.left = (dets.x - 1055) + "px";
        document.querySelector("#elem3 img").style.top = (dets.y - 350) + "px";
    })
    document.querySelector("#overlay3").addEventListener("mouseleave", (dets)=>{
        cursor.style.opacity = 0;
        document.querySelector("#elem3 img").style.scale = 0;
        document.querySelector("#elem3 img").style.opacity = 0;
    })
}




mouseMove();
vaibhav();
raj();
gupta();