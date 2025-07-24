// let hafta = prompt("Hafta kunlaridan birini kiriting!");

// switch(`${hafta}`){
//     case ("1"):
//         alert("Dushanba");
//         break;
//     case "2":
//         alert("seshanba");
//         break;
//     case "3":
//         alert("chorshanba");
//         break;
//     case "4":
//         alert("payshanba");
//         break;
//     case "5":
//         alert("juma");
//         break;
//     case "6":
//         alert("shanba");
//         break;
//     case "7":
//         alert("yakshanba");
//         break;
//     default:
//         alert("Bunday son mavjud emas");
// }


let vaqt = document.querySelector("#hours");
let daqiqa = document.querySelector("#minute");
let soniya = document.querySelector("#second");

console.log(vaqt, daqiqa, soniya);

function soat(){
    let now = new Date();
    let vremya = String(now.getHours()).padStart(2, '0');
    let minut = String(now.getMinutes()).padStart(2, '0'); 
    let sikund = String(now.getSeconds()).padStart(2, '0');

    vaqt.textContent = vremya;
    daqiqa.textContent = minut;
    soniya.textContent = sikund;
}

setInterval(soat, 1000);

soat();