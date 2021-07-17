import { Livro } from "./livro.model";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class LivrosService {

    constructor(
        @InjectModel(Livro)
        private livroModel: typeof Livro
    ){}

    async obterTodos(): Promise<Livro[]> {
        return this.livroModel.findAll()
    }

    async obterUm(id: number): Promise<Livro> {
        return this.livroModel.findByPk(id)
    }

    async criar(livro: Livro): Promise<string> {
        this.livroModel.create(livro)
        return `Livro criado`
    }

    async alterar(id: number, livro: Livro): Promise<[number, Livro[]]> {
        return this.livroModel.update(livro, {
            where: {
                id: id
            }
        })
    }
    
    async apagar(id: number): Promise<string> {
        const livro: Livro = await this.obterUm(id)
        livro.destroy()
        return `Apaga o livro ${id}`
    }
}