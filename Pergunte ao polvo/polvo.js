var numero = 0

function carregar() {
    var img = document.querySelector('img.imagem')
    var msg = document.querySelector('div.msg')
    var data = new Date()
    var mensagemdehora = data.getHours() + ':' + data.getMinutes()
    var horario = data.getHours
    msg.innerHTML = `Agora são as ${mensagemdehora}`

    if (horario >= 0 && horario < 12) {
        img.src = "fotomanha.png.jpg"
        msg.innerHTML = `Agora são as ${mensagemdehora} Bom dia`
    } else if (horario < 18) {
        img.src = "fototarde.png.jpg"
        msg.innerHTML = `Agora são as ${mensagemdehora} Boa tarde`
    } else {
        img.src = "fotonoite.png.jpg"
        msg.innerHTML = `Agora são as ${mensagemdehora} Boa noite`
    }
}
        function funcoes () {
            adivinha()
            contagemlick()
        }
        function adivinha () {
            var random = (min,max) => Math.floor(Math.random() * (max - min) + min);
            var option1 = document.querySelector('input.Opcao1')
            var option2 = document.querySelector('input.Opcao2')
            var res = document.querySelector('div.res')
            var input1 = (option1.value)
            var input2 = (option2.value)
            var aleatoriedade = [`${input1}`,`${input2}`]
            var escolhafinal = (aleatoriedade[random(0,aleatoriedade.length)])
            res.innerHTML = `O polvo escolheu a opção : ${escolhafinal}`
        }
        function contagemlick () {
            numero++
            let pontuacao = document.querySelector("div.pontuacao")
            if (numero == 1) {
                pontuacao.innerHTML = (`Voce clicou para escolher , ${numero} vez `)
            } else if (numero < 10){
                pontuacao.innerHTML = (`Voce clicou para escolher , ${numero} vezes `)
            } else {
                numero = 0
                pontuacao.innerHTML = (`Para de clicar por favor , vai acabacar a memoria`)
            } 
        }
            