/* ===========================================
   SITE ROMÂNTICO - MÁRCIO ❤️ SOLANGE
   script.js - PARTE 1
=========================================== */

// ===== Elementos =====

const inicio = document.getElementById("inicio");
const game = document.getElementById("game");
const final = document.getElementById("final");

const startButton = document.getElementById("startButton");

const gameArea = document.getElementById("gameArea");

const score = document.getElementById("score");

const progress = document.getElementById("progress");

const background = document.getElementById("backgroundHearts");

// ===== Variáveis =====

let pontos = 0;

const total = 12;

// ===== Mensagens =====

const mensagens = [

"❤️ Você é o meu lugar favorito no mundo.",

"🥰 Seu sorriso consegue iluminar até os meus dias difíceis.",

"💖 Obrigada por cuidar de mim e nunca desistir da gente.",

"🌹 Você faz minha vida mais bonita.",

"✨ Ao seu lado eu aprendo a ser uma pessoa melhor.",

"❤️ Você merece todo o amor do mundo.",

"🤍 Obrigada por cada abraço e cada momento.",

"💕 Mesmo nas nossas brigas, meu coração continua escolhendo você.",

"🌷 Você é muito especial para mim.",

"💘 Você é meu melhor amigo e meu grande amor.",

"💞 Tenho muito orgulho de ter você comigo.",

"❤️ Último coração... existe uma surpresa esperando por você!"
];

// ===== Botão iniciar =====

startButton.addEventListener("click", () => {

inicio.classList.remove("active");

game.classList.add("active");

criarCoracao();

});

// ===========================================
// CRIA UM CORAÇÃO ALEATÓRIO
// ===========================================

function criarCoracao(){

gameArea.innerHTML="";

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

// posição aleatória

const largura=gameArea.clientWidth-70;

const altura=gameArea.clientHeight-70;

heart.style.left=Math.random()*largura+"px";

heart.style.top=Math.random()*altura+"px";

// clique

heart.onclick=clicouCoracao;

gameArea.appendChild(heart);

}

// ===========================================
// CLIQUE NO CORAÇÃO
// ===========================================

function clicouCoracao(){

alert(mensagens[pontos]);

pontos++;

score.innerHTML=pontos+" / "+total;

progress.style.width=(pontos/total*100)+"%";

if(pontos>=total){

mostrarFinal();

}else{

criarCoracao();

}

}/* ===========================================
   SCRIPT.JS - PARTE 2
   Fundo animado + efeitos finais
=========================================== */

// ===============================
// CORAÇÕES FLUTUANDO
// ===============================

criarFundo();

function criarFundo(){

setInterval(()=>{

const heart=document.createElement("div");

heart.className="floating-heart";

heart.innerHTML=Math.random()>0.5?"❤️":"💖";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*40)+"px";

heart.style.animationDuration=(8+Math.random()*8)+"s";

background.appendChild(heart);

setTimeout(()=>{

heart.remove();

},16000);

},450);

}

// ===============================
// MOSTRAR CARTA FINAL
// ===============================

function mostrarFinal(){

game.classList.remove("active");

final.classList.add("active");

animacaoFinal();

}

// ===============================
// ANIMAÇÃO FINAL
// ===============================

function animacaoFinal(){

for(let i=0;i<180;i++){

setTimeout(()=>{

const emoji=document.createElement("div");

const lista=["❤️","💖","💕","💘","✨","🌹"];

emoji.innerHTML=lista[Math.floor(Math.random()*lista.length)];

emoji.style.position="fixed";

emoji.style.left=Math.random()*100+"vw";

emoji.style.top="-40px";

emoji.style.fontSize=(18+Math.random()*30)+"px";

emoji.style.transition="5s linear";

emoji.style.pointerEvents="none";

document.body.appendChild(emoji);

setTimeout(()=>{

emoji.style.top="110vh";

emoji.style.transform="rotate(720deg)";

},50);

setTimeout(()=>{

emoji.remove();

},5200);

},i*35);

}

}

// ===============================
// MENSAGEM EXTRA
// ===============================

setTimeout(()=>{

console.log("❤️ Feito com amor porSolange para Márcio ❤️");

},1000);

// ===============================
// PEQUENO BRILHO NO TÍTULO
// ===============================

const titulo=document.querySelector("h1");

if(titulo){

setInterval(()=>{

titulo.style.textShadow="0 0 20px #fff";

setTimeout(()=>{

titulo.style.textShadow="0 0 0px transparent";

},700);

},2500);

}
