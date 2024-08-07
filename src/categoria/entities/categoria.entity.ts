import { IsNotEmpty, isNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";

@Entity({ name: 'tb_categorias'})
export class Categoria{
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({ length: 255, nullable: false})
    categoria: string

    @OneToMany(() => Produto, (produto) => produto.categoria) //A Classe Categoria será o lado 1:N, ou seja, Um Categoria pode ter Muitas Produtos.
    produto: Produto[]
}