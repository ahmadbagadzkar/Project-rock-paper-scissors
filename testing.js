// variable global
let humanChoice = null;
let countHuman = 0;
let countComp = 0;
let rounde = 0;

function getComputerChoice(){
    const computer = Math.floor(Math.random() * 3);
    return computer;
}

function getHumanChoice(pilihan){
    humanChoice = pilihan;

    if(humanChoice === 0){
        return 0;
    }else if(humanChoice === 1){
        return 1;
    }else if(humanChoice === 2){
        return 2;
    }else{
        return null;
    }
}

function playRound(){
    if(rounde >= 5){
        console.log("Refresh halaman");
        return;
    }

    let comp = getComputerChoice();
    let human = humanChoice;
    let hasil = ["menang", "kalah"];

    console.log("comp", comp, typeof comp);
    console.log("human", human, typeof comp);

    if(human === null){
        console.log("Pilih Jurus Dulu!");
        return;
    }

    // batu
    if(human === 0 && comp === 1){
        let pesan = "Kamu Menang! Batu Memukul Gunting.";
        hasil[0];
        console.log(pesan, hasil[0]);
    }
    else if(human === 1 && comp === 0){
        let pesan = "Kamu Menang! Batu Memukul Gunting.";
        hasil[1];
        console.log(pesan, hasil[1]);
    }

    // gunting
    else if(human === 1 && comp === 2){
        let pesan = "Kamu Menang! Gunting Menggunting Kertas.";
        hasil[0];
        console.log(pesan, hasil[0]);
    }
    else if(human === 2 && comp === 1){
        let pesan = "Kamu Kalah! Gunting Menggunting Kertas.";
        hasil[1];
        console.log(pesan, hasil[1]);
    }

    // kertas
    else if(human === 2 && comp === 0){
        let pesan = "Kamu Menang! Kertas Membungkus Batu.";
        hasil[0];
        console.log(pesan, hasil[0]);
    }
    else if(human === 0 && comp === 2){
        let pesan = "Kamu Kalah! Kertas Membungkus Batu.";
        hasil[1];
        console.log(pesan, hasil[1]);
    }
    else{
        let pesan = "Anda Seri"
        console.log(pesan);
    }

    if(hasil[0]){
        countHuman++;
        ScoreHuman.textContent = countHuman;
    }else if(hasil[1]){
        countComp++;
        ScoreComp.textContent = countComp;
    }else{
        countComp;
        countHuman;
    }

    rounde++;
    humanChoice = null;
    return;
}

// get document
const btnPlay = document.getElementById("btnPlay");
const btnBatu = document.getElementById("btnBatu");
const btnKertas = document.getElementById("btnKertas");
const btnGunting = document.getElementById("btnGunting");

// Tampilan
const ScoreHuman = document.querySelector(".ScoreHuman");
const ScoreComp = document.querySelector(".ScoreComp");

// run
btnBatu.addEventListener('click', () => getHumanChoice(0));
btnGunting.addEventListener('click', () => getHumanChoice(1));
btnKertas.addEventListener('click', () => getHumanChoice(2));
btnPlay.addEventListener('click',playRound);