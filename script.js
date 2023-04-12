const mostrar_dias = document.querySelector('.dias')
const mostrar_horas = document.querySelector('.horas')
const mostrar_minutos = document.querySelector('.minutos')
const mostrar_segundos = document.querySelector('.segundos')

let Csegundos = 59;
let Cminutos = 59;
let Choras = 23;
let Cdias = 30;

function contador(){
    
    if(Csegundos<0){
        Csegundos= 59
        Cminutos--
    }
    if(Cminutos<0){
        Choras--
        Cminutos = 59
    }
    if(Choras<0){
        Choras = 23
        Cdias--
    }
    if(Cdias<0){
        Cdias = 30
    }

    mostrar_dias.innerHTML = Cdias<10?'0'+Cdias:Cdias
    mostrar_horas.innerHTML = Choras<10?'0'+Choras:Choras
    mostrar_minutos.innerHTML = Cminutos<10?'0'+Cminutos:Cminutos
    mostrar_segundos.innerHTML = Csegundos<10?'0'+Csegundos:Csegundos

    Csegundos--

    setTimeout(contador,1000)
}
contador()
