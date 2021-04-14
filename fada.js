function escolhaUm() {
    while (true) {
        var personagem = prompt("Olá, Fada Yacy... Você está pronta para iniciar sua missão… Mas cuidado, qualquer escolha errada pode colocar tudo a perder! Vamos lá! Qual dos caminhos você escolhe para deixar a base? Caminho 1 ou caminho 2?");
        if (personagem == 1) {

            alert("Essa não, você escolheu o caminho errado e caiu em uma armadilha que bloqueia sua luz. GAME OVER");

            document.body.innerHTML = "";

            return document.write(`
        <body><header class="nomefada">Fada Yacy</header><section class="fullcontainer"><div class="containerfada"><img class="fada2" src="fada.png" alt="fada"></div><div class="fadatxt">Game Over<br>Infelizmente você não conseguiu desarmar a bomba e ela explodiu. Mas você vai ter uma nova chance para tentar mudar as coisas. Volte para a página incial para uma nova tentativa.<br><a class="voltar1" href="./index.html">Página inicial</a></div></section><footer>After 3021 ® Renata hortense - resilia 2021</footer></body>
        `)
            break;
        }
        else if (personagem == "2") {
            alert("Ótimo! Você escolheu o caminho certo, agora está mais perto do local para desarmar a bomba, na próxima fase você vai encontrar mais instruções para proseguir.");
            return escolhaDois()
            break
        }
        else {
            alert("resposta inválida!!")
        }
    }
}
escolhaUm();

function escolhaDois() {
    while (true) {
        var personagem = prompt("FASE 2! Não foi fácil chegar até aqui, agora escolha como você pretende prosseguir. Escolha entre (1) correr ou (2) voar");
        if (personagem === "1") {
            alert("Péssima escolha. Você pisou em uma bomba destruidora de seres mágicos e explodiu! GAME OVER")
            document.body.innerHTML = "";

            return document.write(`
        <body><header class="nomefada">Fada Yacy</header><section class="fullcontainer"><div class="containerfada"><img class="fada2" src="fada.png" alt="fada"></div><div class="fadatxt">Game Over<br>Infelizmente você não conseguiu desarmar a bomba e ela explodiu. Mas você vai ter uma nova chance para tentar mudar as coisas. Volte para a página incial para uma nova tentativa.<br><a class="voltar1" href="./index.html">Página inicial</a></div></section><footer>After 3021 ® Renata hortense - resilia 2021</footer></body>
        `)
            break
        }
        else if (personagem === "2") {
            alert("Sucesso! Voando você chega mais rápido e consegue enxergar melhor qual o melhor caminho para seguir e cumprir a sua missão, salvando toda a humanidade!")
            return escolhaTres()
            break
        }
        else {
            alert("resposta inválida!!")
        }
    }
}
function escolhaTres() {
    while (true) {
        var personagem = prompt("FASE 3! WOOOOOOOOOW! Você foi incrível até aqui, mas calma, ainda não acabou… Você chegou até a bomba, CUIDADO!! A bomba tem dois botões, um para desativar e o outro para acionar. O botão 1 é vermelho e o botão 2 é azul. Você só tem uma chance. Qual é o botão você escolhe??? 1 ou 2");
        if (personagem == "1") {
            alert("BBBBBBBBBOOOOOOOOOOOOOOOOOMMMMMMMMMMMMMMMMMM GAME OVERRRRRRRRRRR!! Fim da vida na Terra!!!!!")
            document.body.innerHTML = "";

            return document.write(`
        <body><header class="nomefada">Fada Yacy</header><section class="fullcontainer"><div class="containerfada"><img class="fada2" src="fada.png" alt="fada"></div><div class="fadatxt">Game Over<br>Infelizmente você não conseguiu desarmar a bomba e ela explodiu. Mas você vai ter uma nova chance para tentar mudar as coisas. Volte para a página incial para uma nova tentativa.<br><a class="voltar1" href="./index.html">Página inicial</a></div></section><footer>After 3021 ® Renata hortense - resilia 2021</footer></body>
        `)
            break
        }

        else if (personagem == "2") {
            document.body.innerHTML = "";

            return document.write(`
        <body><header class="nomefada">Fada Yacy</header><section class="fullcontainer"><div class="containerfada"><img class="fada2" src="fada.png" alt="fada"></div><div class="fadatxt">SUUUUUUCESSO!!!<br>Você conseguiu desarmar a bomba e salvou a humanidade!<br>Parabéns!!!<br><a class="voltar1" href="./index.html">Página inicial</a></div></section><footer>After 3021 ® Renata hortense - resilia 2021</footer></body>
        `)
            break
        }
        else {
            alert("resposta inválida!!")
        }
    }
}
