/**
 * documento javascript para teste
 * by Ronan
 */

/* exercício 1 */
var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

texto = "O usuário mora em " + endereco.cidade + " / " + endereco.uf + ", no bairro " + endereco.bairro + ", na rua \"" + endereco.rua + "\" com n° " + endereco.numero;

document.getElementById('exercicioUm').innerHTML = texto;

/* exercício 2 */
function encontraPar(x, y) {
    var intervalo = " ", j = x;
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

/* exercício 3 */
function temHabilidade(skills) {
    var retorno = false;
    var encontra = skills.indexOf("Javascript");
    // indexOf sempre retorna -1 se não encontrar
    if (encontra == -1) {
        retorno = false;
    } else {
        retorno = true;
    }
    document.getElementById('exercicioTres').innerHTML = retorno;
}

var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills);

/* exercício 4 */
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

/* exercício 5 */
function escrever(vetores) {
    for (var vetor of vetores) {
        var writeSection = `O ${vetor.nome} possui as habilidades: ${vetor.habilidades.join(", ")}`;
        document.write(`${writeSection} `);
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

