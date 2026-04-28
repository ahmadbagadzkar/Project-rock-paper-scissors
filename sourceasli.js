function getComputerChoice(){
    const computer = Math.floor(Math.random() * 3);
    return computer;
}

function getHumanChoice(){
    let manusia = prompt("=== Masukkan Jurus! ===");
    let lowercase = manusia.toLowerCase();

    if(lowercase === "batu"){
        return 0;
    }else if(lowercase === "gunting"){
        return 1;
    }else if(lowercase === "kertas"){
        return 2;
    }else{
        return "Jurus tidak ditemukan";
    }
}

function playRound(){
    let comp = getComputerChoice();
    let humanRaw = getHumanChoice();

    console.log("comp", comp, typeof comp);
    console.log("humanRaw", humanRaw, typeof comp);

    if(humanRaw === "Jurus tidak ditemukan"){
        return "Jurus tidak ditemukan, harap masukkan batu, gunting, atau kertas!";
    }

    let human = Number(humanRaw);

    if(isNaN(human)){
        return "Input tidak valid";
    }

    if(comp === human){
        let pesan = "Anda Seri"
        return {pesan: pesan};
    }

    // batu
    if(human === 0 && comp === 1){
        let pesan = "Kamu Menang! Batu Memukul Gunting.";
        return{status: "menang", pesan: pesan};
    }
    else if(human === 1 && comp === 0){
        let pesan = "Kamu Menang! Batu Memukul Gunting.";
        return{status: "kalah", pesan: pesan};
    }

    // gunting
    else if(human === 1 && comp === 2){
        let pesan = "Kamu Menang! Gunting Menggunting Kertas.";
        return{status: "menang", pesan: pesan};
    }
    else if(human === 2 && comp === 1){
        let pesan = "Kamu Kalah! Gunting Menggunting Kertas.";
        return{status: "kalah", pesan: pesan};
    }

    // kertas
    else if(human === 2 && comp === 0){
        let pesan = "Kamu Menang! Kertas Membungkus Batu.";
        return{status: "menang", pesan: pesan};
    }
    else if(human === 0 && comp === 2){
        let pesan = "Kamu Kalah! Kertas Membungkus Batu.";
        return{status: "kalah", pesan: pesan};
    }
    else{
        return "Terjadi Kesalahan.";
    }
}

function checkScore(){

    let countHuman = 0;
    let countComp = 0;
    let massage;
    let pesan = ["Selamat kamu menang!!", "Sayang sekali, kamu kalah", "Yah, seimbang. Dicoba lagi ya"];

    for(let i = 0; i < 5; i++){

        let hasil = playRound();
        massage = hasil
        console.log(`Ronde ${i+1}: ${massage["pesan"]}`);

        if(massage["status"] === "menang"){
            countHuman+=1;
            countComp;
        }
        else if(massage["status"] === "kalah"){
            countHuman;
            countComp+=1
        }else if(massage["status"] !== 0 && massage["status"] !== 1){
            countComp;
            countHuman;
        }
        else{
            return "Terjadi Kesalahan.";
        }
    }

    if(countHuman > countComp){
        return `${pesan[0]} --!-- Score = Kamu ${countHuman} - Komputer ${countComp}`;
    }else if(countHuman < countComp){
        return `${pesan[1]} --!-- Score = Kamu ${countHuman} - Komputer ${countComp}`;
    }else{
        return `${pesan[2]} --!-- Score = Kamu ${countHuman} - Komputer ${countComp}`;
    }
}

// let checkHasil = checkScore();
// function playGame(checkHasil){
//     for(let i = 0; i < 5; i++){

//     }
// }

console.log(checkScore());
// checkScore(hasil);
// console.log(hasil);