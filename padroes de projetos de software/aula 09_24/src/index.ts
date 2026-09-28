// singleton
//garante que sempre sera uma mesma instancia

//mantem privado atributos, constantes e os metodos
class CoordenadorCurso {
    private nome:string;
    private curso:string;

    private static instancia: CoordenadorCurso
    
    private constructor(nome: string, curso:string){
        this.nome = nome;
        this.curso = curso;
    }

    static getInstancia(): CoordenadorCurso {
        if (!CoordenadorCurso.instancia){
            CoordenadorCurso.instancia = new CoordenadorCurso('Gian Vie','Etical hacking')
        }

        return CoordenadorCurso.instancia
    }

    darAviso():void {
        console.log(`${this.nome} é coordenador do curso ${this.curso}`)
    }
}

const coordenador = CoordenadorCurso.getInstancia()