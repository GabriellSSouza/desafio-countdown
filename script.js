const mostrar_dias = document.querySelector('.dias')
const mostrar_horas = document.querySelector('.horas')
const mostrar_minutos = document.querySelector('.minutos')
const mostrar_segundos = document.querySelector('.segundos')

// fazer as horas com IFs que controlam até onde eles podem chegar assim quando chegar no limite um valor é passado para outro variável. Exemplo: quando as horas chegarem a 00 o dia o dia diminuí 1.

// duas formas de controlam o tempo. class Date e setInterval/setTimeout

let Cseconds = 59;
let Cminutos = 0;

function contador(){
    if(Cseconds<0){
        Cseconds= 59
        Cminutos++
    }
    console.log(Cseconds)
    Cseconds--

    setTimeout(contador,1000)
}
contador()

function gerarMinutos(){

   
}

