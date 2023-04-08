//Aluna: Diciele Araujo Ferraz

//1 . Crie uma Classe Aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números).

//CLASSE PARA CRIAÇÃO DE ALUNOS
class aluno {
    constructor(nome, falta, notas){
    this.nome = nome,
    this.faltass= falta,
    this.notas = notas;
    }
// 2. Na Classe Aluno crie o método calcularMedia que retorna a média de suas notas.
// Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. 

// MÉTODO DE CALCULAR A MÉDIA ---> calcularMedia
    calcularMedia(){
        //percorrer o array de notas e somar
        let somarNotas = 0;
        for (let i in this.notas) {
            somarNotas += this.notas[i];
        }
        //calculando a media e retornando
        let media = somarNotas/this.notas.length;
        return media;
    }
    //MÉTODO AUMENTA O NÚMERO DE FALTAS EM 1
    faltas(){
        return this.faltass = this.faltass + 1;
    }
}

//------------------------------------------------------------------------------------
//3. crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) 
//e uma lista de estudantes (um array composto pelos alunos criados no passo 2).

const curso= {
    nomeDoCurso: 'Inglês',
    notaDeAprovacao: 7,
    faltasMaximas: 4,
    listaDeEstudantes:[],
    //ESSE METODO CRIA O ALUNO E O INSERE NA LISTA
    adicionarEstudantes(nome, falta, notas){
        const alunos = new aluno(nome, falta, notas);
        this.listaDeEstudantes.push(alunos);
    },
    //ESSE METODO DIZ SE O ALUNO FOI APROVADO OU NAO
    boletim(aluno){
        var resultado;
        let media = aluno.calcularMedia();
        switch (aluno) {
            case (media >= this.notaDeAprovacao) && (this.faltass < this.faltasMaximas):
                resultado = "Parabéns você foi aprovado!";
                break;
            case (media >= this.notaDeAprovacao) && (this.faltass == this.faltasMaximas):
                if (media >= 7,7){
                    resultado= "Aluno Aprovado!";
                } else{
                    resultado= "Aluno Reprovado!";
                }
                break;
            default:
                resultado = "Aluno Reprovado!";
            }
        return resultado;
        }
    }

//CRIANDO OS ALUNOS
curso.adicionarEstudantes('Marcela', 1, [6,0,9,2]);
curso.adicionarEstudantes('Pablo', 0, [10,10,10,10]);
curso.adicionarEstudantes('Camila', 3, [1,9,8,4]);
curso.adicionarEstudantes('Jamie', 4, [4,9,6,5]);
curso.adicionarEstudantes('Barth', 5, [3,5,2,7]);

//EXIBINDO A ARRAY DE ALUNOS
console.table(curso.listaDeEstudantes);
