/**
 * documento javascript para teste
 * by Ronan
 */

/** 
 * exercício 1 
 */
var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

// Ver explicação nas linhas 92 a 96
var texto = `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na ${endereco.rua} com n° ${endereco.numero}`;
var para = document.createElement('p');
para.innerHTML = texto;
var divSelector = document.querySelector('#exercicioUno');
divSelector.appendChild(para);

/**   
 * exercício 2
 */
function encontraPar(x, y) {
    var intervalo = " ", j = x;
    // Utilizar 'while' quando não se sabe quantos elemento será necessário interar
    while (j < y) {
        if (j % 2 == 0) {
            intervalo += j + " ";
        } else if (j == y) {
            break;
        }
        j++;
    };

    document.getElementById('exercicioDois').innerHTML = intervalo;
    console.log(intervalo);
}

encontraPar(32, 321);

/** 
 * exercício 3 
 */
function temHabilidade(skills) {
    var retorno = false;
    var encontra = skills.indexOf("Javascript");
    // indexOf sempre retorna -1 se não encontrar
    if (encontra == -1) {
        retorno;
    } else {
        retorno = true;
    }
    document.getElementById('exercicioTres').innerHTML = retorno;
}

var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills);

/**
 * exercício 4 
 */
function experiencia(anos) {
    // De 0-1 ano: Iniciante
    // De 1-3 anos: Intermediário
    // De 3-6 anos: Avançado
    // De 7 acima: Jedi Master
    var retorno = " ";
    if (anos <= 1) {
        retorno = "Iniciante";
    } else if (anos <= 3) {
        retorno = "Intermediário";
    } else if (anos <= 6) {
        retorno = "Avançado";
    } else {
        retorno = "Jedi Master";
    }

    document.getElementById('exercicioQuatro').innerHTML = retorno;
}

var anosEstudo = 7;
experiencia(anosEstudo);

/**
 * exercício 5 
 */
function escrever(vetores) {
    for (vetor of vetores) {
        /*
        Ao utilizar ` ` ao invés de " ", não é necessário utilizar o '+' toda vez que necessitar
        concatenar uma nova informação, bastando usar '${interador.objeto.funcaoOpcional}' toda
        a vez que precisar concatenar informações
        */
        var writeSection = `O ${vetor.nome} possui as habilidades: ${vetor.habilidades.join(", ")}`;
        var para = document.createElement('p');
        para.innerHTML = writeSection;
        var divSelector = document.querySelector('#exercicioCinco');
        divSelector.appendChild(para);
        console.log(writeSection);
    }
}

var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

escrever(usuarios);

/**
 * Criando link para retornar ao menu principal
 */
var container = document.querySelector('#voltar');
var linkElement = document.createElement('a');
linkElement.setAttribute('href', '../index.html');
linkElement.innerHTML = "Voltar";
linkElement.style.textDecoration = 'none';

container.appendChild(linkElement);