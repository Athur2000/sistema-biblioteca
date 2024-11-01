let membro = prompt('Você é membro? sim ou não');
let title = prompt('Pesquisar livro');
let aleatorio = function() {
    return Math.floor(Math.random() * 2) + 1;
};

class Biblioteca {
    constructor(title, membro) {
        this.titulo = title;
        this.membro = membro;
    }
    alugar() {
        if (aleatorio() < 2) {
            console.log('O livro "' + this.titulo + '" está disponível para locação.');
            return true;
        } else {
            console.log('O livro "' + this.titulo + '" não está disponível para locação.');
            return false;
        }
    }
    devolucao() {
        if (this.membro.toLowerCase() === 'sim') {
            console.log('Sem prazo de entrega para membros.');
        } else {
            console.log('O livro deverá ser devolvido após 30 dias da locação.');
        }
    }
}

let biblioteca = new Biblioteca(title, membro);
let disponivel = biblioteca.alugar();
if (disponivel) {
    biblioteca.devolucao();
}