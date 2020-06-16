const soma = (x, y) => x + y;

console.log(`resultado da soma: ${soma(100, 55)}`);

const pessoa = {
    nome: 'wellington',
    sobrenome: 'felix',
    cursos: ['html', 'css', 'js', 'angular', 'node', 'sql'],
    getNome() {
        return `${this.nome} ${this.sobrenome}`;
    },
    getCursos() {
        this.cursos.forEach(curso => {
            console.log(`${this.getNome()} realizou o curso de: ${curso}`);
        });
    }
}

pessoa.getNome();
pessoa.getCursos();