let btnIniciar = document.getElementById('btnIniciar')
let menu = document.getElementById('menu')
let quiz = document.getElementById('quiz')
let placar = document.getElementById('pontos')
let continuar = document.getElementById('continuar')
let main = document.getElementById('main')
let marcPontos = document.getElementById('marcPontos')
let cronometro = document.getElementById('cronometro')
let placarPontos = document.getElementById('li_placar')
let btnReiniciar = document.getElementById('btnReiniciar')
let confirm = document.getElementById("confirm")
let contConfirm = document.getElementsByClassName('contConfirm')
let btnConfirm = document.getElementById('btnConfirm')
let btnRejeita = document.getElementById('btnRejeita')

let positive = document.getElementById('positive')
let negative = document.getElementById('negative')
let aplausos = document.getElementById('aplausos')

let menuHamburguer = document.getElementById('menu-hamburguer')
let menuHamburguerConteudo = document.getElementById('menu-hamburguer-conteudo')

let i = 0
let correta
let questao = 0
let click 
let pontos = 0
let acertos = 0
let erros = 0

let nquestao = document.querySelector('#nquestao')
let h1Pergunta = document.querySelector('#pergunta')
let alternativa = document.querySelectorAll('[alternativa]')
let a = document.querySelector('#A')
let b = document.querySelector('#B')
let c = document.querySelector('#C')


const vetQuiz = [
{
    pergunta:'A terra é...',
    a:'Plana',
    b:'Redonda',
    c:'Quadrada',
    correta:'a'
},
{
    pergunta:'Austral é o mesmo que...',
    a:'Leste',
    b:'Sul',
    c:'Norte',
    correta:'c'
},
{
    pergunta:'O Brasil faz parte de qual continente?',
    a:'America',
    b:'Africa',
    c:'Asia',
    correta:'a'
},
{
    pergunta:'O Sol é um...',
    a:'Satelite',
    b:'Estrela',
    c:'Planeta',
    correta:'b'
},
{
    pergunta:'Quanto tempo a luz do Sol demora para chegar à Terra?',
    a:'1 dia',
    b:'8 minutos',
    c:'12 segundos',
    correta:'b'
},
{
    pergunta:'Quem foi o primeiro presidente do brasil ?',
    a:'Bolsonaro',
    b:'Gertuli vargas',
    c:'Deodoro fonçeca',
    correta:'c'
},
{
    pergunta:'Quem descrobiu o brasil ?',
    a:'Pedro alves cabral',
    b:'Lampião',
    c:'jair bolsonaro',
    correta:'a'
},
{
    pergunta:'Que ano acabou a segunda guerra mundial ?',
    a:'1930',
    b:'1939',
    c:'1945',
    correta:'c'
},
{
    pergunta:'De onde é a invenção do chuveiro elétrico ?',
    a:'Australia',
    b:'Brasil',
    c:'Italia',
    correta:'b'
},
{
    pergunta:'Qual o livro mais vendido no mundo a seguir à Bíblia?',
    a:'Dom quixote',
    b:'O pequeno principe',
    c:'Senhor dos anéis',
    correta:'a'
},
{
    pergunta:'Normalmente, quantos litros de sangue uma pessoa tem? ',
    a:'Tem entre 2 a 4 litros.',
    b:'Tem entre 4 a 6 litros.',
    c:'Tem 10 litros.',
    correta:'b'
},
{
    pergunta:'Qual a montanha mais alta do Brasil?',
    a:'Pico da Neblina',
    b:'Pico Paraná',
    c:'Monte Roraima',
    correta:'a'
},
{
    pergunta:'Qual a velocidade da luz?',
    a:'300 000 000 metros por segundo (m/s)',
    b:'299 792 458 metros por segundo (m/s)',
    c:'199 792 458 metros por segundo (m/s)',
    correta:'b'
},
{
    pergunta:'Quais destas doenças são sexualmente transmissíveis?',
    a:'Aids, tricomoníase e ebola',
    b:'Chikungunya, aids e herpes genital',
    c:'Gonorreia, clamídia e sífilis',
    correta:'c'
},
{
    pergunta:'Qual foi o recurso utilizado inicialmente pelo homem para explicar a origem das coisas?',
    a:'A Filosofia',
    b:'A Biologia',
    c:'A Mitologia',
    correta:'c'
},
{
    pergunta:'Qual o maior animal terrestre?',
    a:'Baleia Azul',
    b:'Girafa',
    c:'Elefante africano',
    correta:'c'
},
{
    pergunta:'Quais os nomes dos três Reis Magos?',
    a:'Gaspar, Nicolau e Natanael',
    b:'Belchior, Gaspar e Baltazar',
    c:'Belchior, Gaspar e Nataniel',
    correta:'b'
},
{
    pergunta:'Quem foi o primeiro homem a pisar na Lua? Em que ano aconteceu?',
    a:'Yuri Gagarin, em 1961',
    b:'Buzz Aldrin, em 1969',
    c:'Neil Armstrong, em 1969',
    correta:'c'
},
{
    pergunta:'Qual o nome do cientista que descobriu o processo de pasteurização e a vacina contra a raiva?',
    a:'Marie Curie',
    b:'Louis Pasteur',
    c:'Antoine Lavoisier',
    correta:'b'
},
{
    pergunta:'Que animal gruguleja?',
    a:'O pavão',
    b:'A garça',
    c:'O peru',
    correta:'c'
},
{
    pergunta:'Qual o estado mais recente do Brasil?',
    a:'Acre',
    b:'Tocantins',
    c:'Canadá',
    correta:'b'
}
]

function bloquear(){
    a.setAttribute('disabled','disabled')
    b.setAttribute('disabled','disabled')
    c.setAttribute('disabled','disabled')
}
function desbloquear(){
    a.removeAttribute('disabled','disabled')
    b.removeAttribute('disabled','disabled')
    c.removeAttribute('disabled','disabled')
}
//inicar
btnIniciar.addEventListener('click',iniciar)
//Monitora o btn de reiniciar
btnReiniciar.addEventListener('click',() => {
    confirm.style.display = ('block')
    bloquear()
})
//Monitora o botao confirm de reiniciar
btnConfirm.addEventListener('click',() => {
    reiniciar()
    confirm.style.display = ('none')
})
//Monitora o botao rejeitar de reiniciar
btnRejeita.addEventListener('click',() => {
    confirm.style.display = ('none')
    desbloquear()
})
//Menu Hamburguer
menuHamburguer.addEventListener('click',() => {
    menuHamburguerConteudo.classList.toggle('active')
})

btnmusica.addEventListener('click',(e) => {
    e.target.classList.toggle('select')
    if(e.target.classList == 'select'){
        aplausos.setAttribute('src','audios/aplausos.mp3')
        negative.setAttribute('src','audios/negative.mp3')
        positive.setAttribute('src','audios/positive.mp3')
    }
    else{
        aplausos.setAttribute('src','/')
        negative.setAttribute('src','/')
        positive.setAttribute('src','/')
    }
})
//Continuar
continuar.addEventListener('click',reiniciar)

let questoes = []
 
function aleatorio(){//Gera um numero aleatorio
    return Math.round(Math.random() * 20)
}

function enbaralhar(){

    for(let i = 0; questoes.length < 10; i++){//Executa enquanto o questoes não tiver 10 posiçãos
        let random = aleatorio() // recebe o valor retornado da função + p

        if(questoes.indexOf(random) == -1){ //Verifica se à o numero gerado ja tem no questoes
            questoes.push(random) // adiciona no questoes
        }
    }
}

let vetalt = ['a', 'b', 'c']
let pintar = [a, b, c]

function iniciar(){
    menu.style.display = ('none')
    quiz.style.display = ('block')
    tempo()
    enbaralhar()
    quest()
}

function reiniciar(){
    menu.style.display = ('block')
    placar.style.display = ('none')
    quiz.style.display = ('none')
    menuHamburguerConteudo.classList.remove('active')
    placarPontos.innerHTML = ('')
    questao = 0
    i = 0
    pontos = 0 
    minu = 1
    seg = 1
    marcPontos.innerHTML = (`${pontos} PT`)
    cronometro.innerHTML = (`${minu}:00`)
    questoes = []
    clearInterval(interval)
}

function placarFinal(){
    let h1Correta = document.getElementById('corretas')
    let h1Errada = document.getElementsByClassName('erradas')

    h1Correta.innerHTML = (acertos)
    h1Errada.innerHTML = (erros)

    quiz.style.display = ('none') 
    placar.style.display = ('block')

    if(pontos <= 30){
        placarPontos.innerHTML += (`${pontos} Pontos -_- <br> Por favor pensar na proxima 👍`)
    }
    else if(pontos > 30 && pontos <= 50){
        placarPontos.innerHTML += (`${pontos} Pontos <br> Mais sorte da proxima vez`)
    }
    else if(pontos > 50 && pontos <= 80){
        placarPontos.innerHTML += (`${pontos} Pontos <br> Boa!!`)
        aplausos.play()
    }
    else if(pontos > 80 && pontos <= 100){
        placarPontos.innerHTML += (`${pontos} Pontos <br> EXCELENTE!!`)
        aplausos.play()
    }
    
}

async function tempo(){
    let minu = 1
    let seg = 0
    interval = setInterval(function(){
        seg--
        if(seg <= 0){
            if(minu >= 1){
                minu--
                seg = 59
            }
            else{
                placarPontos.innerHTML = ('Seu tempo se esgotou <br><br>')
                placarFinal()
                confirm.style.display = ('none')
                clearInterval(interval)
            }
        }
        seg = seg < 10 ? '0' + seg : seg
        cronometro.innerHTML = (`${minu}:${seg}`)
    },1000)
}

function verificar(){//verifica se a resposta selecionada esta correta
    a.setAttribute('disabled','disabled')
    b.setAttribute('disabled','disabled')
    c.setAttribute('disabled','disabled')
    correta = vetQuiz[questoes[i]].correta 
    
    for(let o = 0; o < 3; o++){
        if(correta == vetalt[o]){
            pintar[o].classList.add('verde')
        }
        else{
            pintar[o].classList.add('vermelho')
        }
    }

    if(correta == click){
        pontos = pontos + 10
        acertos = acertos + 1
        marcPontos.innerHTML = (`${pontos} PT`)
        main.style.borderColor = ('green')

        if(btnmusica.classList == 'select'){
            positive.play()
        }
    }
    else{
        erros = erros + 1
        main.style.borderColor = ('red')
        if(btnmusica.classList == 'select'){
            negative.play()
        }
    }
    i++
}

function quest(){//passa as pergutas
    a.removeAttribute('disabled','disabled')
    b.removeAttribute('disabled','disabled')
    c.removeAttribute('disabled','disabled')
    if(questao < 10){
        questao++
        nquestao.innerHTML = (`Numero da questão: ${questao}`)

        h1Pergunta.innerHTML = (vetQuiz[questoes[i]].pergunta)
        a.innerHTML = (vetQuiz[questoes[i]].a)
        b.innerHTML = (vetQuiz[questoes[i]].b)
        c.innerHTML = (vetQuiz[questoes[i]].c)

        main.style.borderColor = ('white')
        for(let o = 0; o < 3; o++){
            pintar[o].classList.remove('verde')
            pintar[o].classList.remove('vermelho')
        }
    }
    else{//fim do quiz
        placarFinal()
        clearInterval(interval)
    }
}

a.addEventListener('click',function clickA(){
    click = 'a'
    verificar()
    setTimeout(quest, 700)
})
b.addEventListener('click',function clickb(){
    click = 'b'
    verificar()
    setTimeout(quest, 700)
})
c.addEventListener('click',function clickc(){
    click = 'c'
    verificar()
    setTimeout(quest, 700)
})
// for(const A of alternativa){
//     A.addEventListener('click',quest)
// }