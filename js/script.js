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
let cardModos = document.getElementById('modos')

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
let minu = 0
let seg = 0


let nquestao = document.querySelector('#nquestao')
let h1Pergunta = document.querySelector('#pergunta')
let alternativa = document.querySelectorAll('[alternativa]')
let a = document.querySelector('#A')
let b = document.querySelector('#B')
let c = document.querySelector('#C')

let h1Correta = document.getElementById('corretas')
let h1Errada = document.getElementById('erradas')

//40
const vetQuiz = [
{
pergunta: 'Qual é o símbolo químico do elemento mercúrio?',
a: 'Mg',
b: 'Hg',
c: 'Me',
correta: 'b'
},
{
pergunta: "Quem escreveu a famosa peça teatral 'Hamlet'?",
a: 'William Shakespeare',
b: 'Anton Chekhov',
c: 'Henrik Ibsen',
correta: 'a'
},
{
pergunta: 'Qual é o maior mamífero terrestre?',
a: 'Elefante Africano',
b: 'Rinoceronte Branco',
c: 'Girafa',
correta: 'a'
},
{
pergunta: 'Em que país nasceu o famoso pintor Pablo Picasso?',
a: 'Espanha',
b: 'França',
c: 'Itália',
correta: 'a'
},
{
pergunta: 'Qual é o maior osso do corpo humano?',
a: 'Fêmur',
b: 'Tíbia',
c: 'Crânio',
correta: 'a'
},
{
pergunta: 'Em que país podemos encontrar a Torre Eiffel?',
a: 'Inglaterra',
b: 'França',
c: 'Itália',
correta: 'b'
},
{
pergunta: 'Qual é o planeta mais próximo do Sol?',
a: 'Vênus',
b: 'Mercúrio',
c: 'Marte',
correta: 'b'
},
{
pergunta: 'Quem foi o primeiro presidente dos Estados Unidos?',
a: 'Abraham Lincoln',
b: 'George Washington',
c: 'Thomas Jefferson',
correta: 'b'
},
{
pergunta: 'Quem escreveu a obra "Dom Quixote"?',
a: 'Miguel de Cervantes',
b: 'Gabriel García Márquez',
c: 'Jorge Luis Borges',
correta: 'a'
},
{
pergunta: 'Quem foi o famoso líder da Revolução Cubana que governou o país por décadas?',
a: 'Che Guevara',
b: 'Fidel Castro',
c: 'Hugo Chávez',
correta: 'b'
},
{
pergunta: 'Qual é o maior oceano do mundo?',
a: 'Oceano Atlântico',
b: 'Oceano Pacífico',
c: 'Oceano Índico',
correta: 'b'
},
{
pergunta: 'Qual é o processo de conversão direta de um sólido para gás, sem passar pelo estado líquido?',
a: 'Fusão',
b: 'Solidificação',
c: 'Sublimação',
correta: 'c'
},
{
pergunta: 'Em que país nasceu o famoso físico Isaac Newton?',
a: 'Inglaterra',
b: 'Alemanha',
c: 'Estados Unidos',
correta: 'a'
},
{
pergunta: 'Qual é a capital da Rússia?',
a: 'São Petersburgo',
b: 'Moscou',
c: 'Kiev',
correta: 'b'
},
{
pergunta: 'Quem pintou a obra "A Noite Estrelada"?',
a: 'Pablo Picasso',
b: 'Vincent van Gogh',
c: 'Leonardo da Vinci',
correta: 'b'
},
{
pergunta: 'Em qual país fica localizada a cidade de Machu Picchu?',
a: 'Colômbia',
b: 'Equador',
c: 'Peru',
correta: 'c'
},
{
pergunta: 'Qual é o maior deserto do mundo?',
a: 'Deserto de Gobi',
b: 'Deserto do Saara',
c: 'Deserto da Arábia',
correta: 'b'
},
{
pergunta: 'Qual foi o primeiro ser vivo a ser enviado ao espaço?',
a: 'Cachorro',
b: 'Macaco',
c: 'Gato',
correta: 'a'
},
{
pergunta: 'Em que país nasceu o famoso cientista Albert Einstein?',
a: 'Alemanha',
b: 'Suíça',
c: 'Áustria',
correta: 'a'
},
{
pergunta: 'Qual é o maior produtor de café do mundo?',
a: 'Colômbia',
b: 'Brasil',
c: 'Vietnã',
correta: 'b'
},
{
pergunta: 'Qual é a capital da Austrália?',
a: 'Sidney',
b: 'Melbourne',
c: 'Camberra',
correta: 'c'
},
{
pergunta: 'Quem pintou a Mona Lisa?',
a: 'Leonardo da Vinci',
b: 'Vincent van Gogh',
c: 'Pablo Picasso',
correta: 'a'
},
{
pergunta: 'Qual é a maior lua de Júpiter?',
a: 'Io',
b: 'Europa',
c: 'Ganimedes',
correta: 'c'
},
{
pergunta: 'Qual é a montanha mais alta do mundo?',
a: 'Monte Everest',
b: 'Monte Kilimanjaro',
c: 'Monte K2',
correta: 'a'
},
{
pergunta: 'Quem foi o físico responsável pela formulação da teoria da relatividade?',
a: 'Isaac Newton',
b: 'Albert Einstein',
c: 'Galileu Galilei',
correta: 'b'
},
{
pergunta: 'Qual é o rio mais extenso do mundo?',
a: 'Nilo',
b: 'Amazonas',
c: 'Mississippi',
correta: 'b'
},
{
pergunta: 'Qual é o menor país do mundo em área territorial?',
a: 'Vaticano',
b: 'Mônaco',
c: 'Nauru',
correta: 'a'
},
{
pergunta: 'Quem foi o criador do telefone?',
a: 'Nikola Tesla',
b: 'Alexander Graham Bell',
c: 'Thomas Edison',
correta: 'b'
},
{
pergunta: 'Quantos elementos químicos a tabela periódica possui atualmente?',
a: '112',
b: '118',
c: '120',
correta: 'b'
},
{
pergunta: 'Quem escreveu a peça de teatro "Romeu e Julieta"?',
a: 'William Shakespeare',
b: 'Charles Dickens',
c: 'Jane Austen',
correta: 'a'
},
{
    pergunta:'A terra é...',
    a:'Plana',
    b:'Redonda',
    c:'Quadrada',
    correta:'b'
},
{
    pergunta:'Quais as duas datas que são comemoradas em novembro?',
    a:'Independência do Brasil e Dia da Bandeira',
    b:'Proclamação da República e Dia Nacional da Consciência Negra',
    c:'Black Friday e Dia da Árvore',
    correta:'b'
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
btnIniciar.addEventListener('click',modos)
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
    cardModos.style.display = ('none')
    if(menuHamburguerConteudo.classList == 'menu-hamburguer-conteudo active'){
        btnIniciar.setAttribute('disabled','disabled')
    }
    else{
        btnIniciar.removeAttribute('disabled','disabled')
    }
    
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
    return Math.round(Math.random() * Number(vetQuiz.length - 1))
}

function enbaralhar(pergs){

    for(let i = 0; questoes.length <= pergs; i++){//Executa enquanto o questoes não tiver 10 posiçãos
        let random = aleatorio() // recebe o valor retornado da função + p
        console.log(random);
        if(questoes.indexOf(random) == -1){ //Verifica se à o numero gerado ja tem no questoes
            questoes.push(random) // adiciona no questoes
        }
    }
}

let vetalt = ['a', 'b', 'c']
let pintar = [a, b, c]

let facil = document.getElementById('facil')
let medio = document.getElementById('medio')
let dificil = document.getElementById('dificil')
let contratempo = document.getElementById('contratempo')


function modos(){
    cardModos.style.display = ('block')
    facil.addEventListener('click',() =>{
        minu = 1
        seg = 1
        enbaralhar(5)
        iniciar()

    })
    medio.addEventListener('click',() =>{
        minu = 1
        seg = 0
        enbaralhar(10)
        iniciar()
    })
    dificil.addEventListener('click',() =>{
        minu = 1
        seg = 30
        enbaralhar(20)
        iniciar()
    })
    contratempo.addEventListener('click',() =>{
        minu = 1
        seg = 0
        enbaralhar(20)
        iniciar()
    })

}

function iniciar(){
    menu.style.display = ('none')
    quiz.style.display = ('block')
    tempo()
    quest()
}

function reiniciar(){
    location.reload()
    // minu = 0
    // seg = 0
    // clearInterval(interval)
    // menu.style.display = ('block')
    // placar.style.display = ('none')
    // quiz.style.display = ('none')
    // cardModos.style.display = ('none')
    // menuHamburguerConteudo.classList.remove('active')

    // placarPontos.innerHTML = ('')
    // questao = 0
    // i = 0
    // pontos = 0 
    // erros = 0
    // correta = 0

    // marcPontos.innerHTML = (`${pontos} PT`)
    // cronometro.innerHTML = (`00:00`)
    // questoes = []
}

function placarFinal(){

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

    
    h1Errada.innerHTML = (erros)
    h1Correta.innerHTML = (acertos)
    
}

async function tempo(){

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