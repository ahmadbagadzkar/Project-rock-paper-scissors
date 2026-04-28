// variable global
let human = null;
let countHuman = 0;
let countComp = 0;
let pesan;
let rounde = 1;
let rondeNow = 0;
let gameOver = false;

function compChoice(){
    const computer = Math.floor(Math.random() * 3);
    return computer;
};

function humanChoice(pilihan){
    human = pilihan;

    if(human === 0){
        human = 0;
        console.log(human);
        return;
    }
    else if(human === 1){
        human = 1;
        console.log(human);
        return;
    }
    else if(human === 2){
        human = 2;
        console.log(human);
        return;
    }
    else{
        human = null;
        console.log(human);
        return;
    }
}

function playRound(){
    const comp = compChoice();
    const humanChoice = human;
    console.log(comp);
    console.log(humanChoice);

    if(comp === humanChoice){
        pesan = "Anda seri!";
        console.log(pesan);
        return {status: "seri", pesan: pesan};
    }

    // batu
    if(human === 0 && comp === 1){
        pesan = "Kamu Menang! Batu Memukul Gunting.";
        console.log(pesan);
        return{status: "menang", pesan: pesan};
    }
    else if(human === 1 && comp === 0){
        pesan = "Kamu Menang! Batu Memukul Gunting.";
        console.log(pesan);
        return{status: "kalah", pesan: pesan};
    }

    // gunting
    else if(human === 1 && comp === 2){
        pesan = "Kamu Menang! Gunting Menggunting Kertas.";
        console.log(pesan);
        return{status: "menang", pesan: pesan};
    }
    else if(human === 2 && comp === 1){
        pesan = "Kamu Kalah! Gunting Menggunting Kertas.";
        console.log(pesan);
        return{status: "kalah", pesan: pesan};
    }

    // kertas
    else if(human === 2 && comp === 0){
        pesan = "Kamu Menang! Kertas Membungkus Batu.";
        console.log(pesan);
        return{status: "menang", pesan: pesan};
    }
    else if(human === 0 && comp === 2){
        pesan = "Kamu Kalah! Kertas Membungkus Batu.";
        console.log(pesan);
        return{status: "kalah", pesan: pesan};
    }
    else{
        return "Terjadi Kesalahan.";
    }
}

function updateScore(){
    if(human === null || gameOver) return;

    rondeNow++;

    let hasil = playRound();
    const textScore = document.createElement("li");
    textScore.textContent = `Rounde ${rondeNow}: ${hasil.pesan}`;
    boxAlur.appendChild(textScore);

    if(hasil["status"] === "seri"){
        countHuman;
        countComp;
    };

    if(hasil["status"] === "menang"){
        countHuman+=1;
        scoreHuman.textContent = countHuman;
    }else if(hasil["status"] === "kalah"){
        countComp+=1;
        scoreComp.textContent = countComp;
    }else{
        countComp;
        countHuman;
    }

    human = null;
    choice.textContent = "Pilih Jurusmu!";
    main.disabled = true;

    if(rondeNow >= rounde){
        gameOver = true;
        infoRounde.textContent = `Rounde ${rondeNow} / ${rounde}`;
        tampilkanHasilAkhir();
        return;
    }

    infoRounde.textContent = `Rounde ${rondeNow} / ${rounde}`;
}

function tampilkanHasilAkhir(){
    let hasilakhir;

    if(countHuman > countComp){
        hasilakhir = `Kamu menang!! Skor Kamu: ${countHuman} -- Computer: ${countComp}`;
    }else if(countComp > countHuman){
        hasilakhir = `Kamu kalah!! Skor Kamu: ${countHuman} -- Computer: ${countComp}`;
    }else{
        hasilakhir = `Seri!! Skor Kamu: ${countHuman} -- Computer: ${countComp}`;
    }

    pesanAkhir.setAttribute("style", "font-size: 28px; color: darkgreen;");
    pesanAkhir.textContent = hasilakhir;
    boxHasil.appendChild(pesanAkhir);

    getBatu.disabled = true;
    getGunting.disabled = true;
    getKertas.disabled = true;
    main.disabled = true;
}

function resetGame(){

    human = null;
    countHuman = 0;
    countComp = 0;
    rondeNow = 0;
    gameOver = false;

    scoreHuman.textContent = 0;
    scoreComp.textContent = 0;

    choice.textContent = "Pilih Jurusmu!"; 
    boxAlur.innerHTML = '';
    pesanAkhir.textContent = "";

    getBatu.disabled = false;
    getGunting.disabled = false;
    getKertas.disabled = false;
    main.disabled = true;

    inputRounde = parseInt(prompt("Mau berapa Rounde?"));

    if(isNaN(inputRounde) || inputRounde <= 0){
        rounde = 1;
    }else{
        rounde = inputRounde;
    }

    infoRounde.textContent = `Rounde ${rondeNow} / ${rounde}`;
}


// getDocument

// choice
const choice = document.getElementById("Choice");

// score
const scoreHuman = document.getElementById("scoreHuman");
const scoreComp = document.getElementById("scoreComp");
const boxAlur = document.getElementById("box");
const boxHasil = document.querySelector(".containerHasil");
const infoRounde = document.getElementById("infoRounde");
const pesanAkhir = document.createElement("p");

// button
const getBatu = document.getElementById("batu");
const getGunting = document.getElementById("gunting");
const getKertas = document.getElementById("kertas");
const main = document.getElementById("main");
const btnReset = document.getElementById("btnReset");

// runButton

getBatu.addEventListener('click', () => {
    humanChoice(0);
    choice.textContent = "Pilihan Kamu: Batu";
    main.disabled = false;
});
getGunting.addEventListener('click', () => {
    humanChoice(1);
    choice.textContent = "Pilihan Kamu: Gunting";
    main.disabled = false;
});
getKertas.addEventListener('click', () => {
    humanChoice(2);
    choice.textContent = "Pilihan Kamu: Kertas";
    main.disabled = false;
});
main.addEventListener('click', () => updateScore());
btnReset.addEventListener('click', () => resetGame());