"use strict";

const modal = document.querySelector(".modal-overlay");

const defineLanguage = ()=>{
    document.querySelector(".en").addEventListener("click", ()=>{
        localStorage.setItem("language", "en");
    })
    document.querySelector(".es").addEventListener("click", ()=>{
        localStorage.setItem("language", "es");
    })
}

const cerrarModal = ()=>{
    modal.style.animation = "desaparecer 1s fordwards";
    setTimeout(()=>modal.display = "none", 1000)
}

const language = localStorage.getItem("language");

if(language ===null) defineLanguage();
else {
    console.log(`Language: ${language}`);
    modal.style.display = "none";
}
