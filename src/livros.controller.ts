import { Controller, Get, Post, Param, Body, Put, Delete } from "@nestjs/common";
import { Livro } from "./livro.model";
import { LivrosService } from "./livros.service";

@Controller('livros')
export class LivrosController {

    constructor(private livrosService: LivrosService) {

    }

    @Get()
    async obterTodos(): Promise<Livro[]> {
        return this.livrosService.obterTodos()
    }
    
    @Get(':id')
    async obterUm(@Param() params): Promise<Livro> {
        return this.livrosService.obterUm(params.id)
    }
    
    @Post()
    async criar(@Body() livro): Promise<string> {
        return this.livrosService.criar(livro)
    }
    
    @Put(':id')
    async alterar(@Param() params, @Body() livro): Promise<[number, Livro[]]> {
        return this.livrosService.alterar(params.id, livro)
    }
    
    @Delete(':id')
    async apagar(@Param() params): Promise<string> {
        return this.livrosService.apagar(params.id)
    }
}