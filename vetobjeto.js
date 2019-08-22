function funcao(){
    var vet = []
    var i
    var soma = 0
    for(i=0; i<5; i++){
        var objeto = {}
        objeto.codigo = Number(prompt("codigo"))
        objeto.nome = prompt("nome")
        objeto.qtd = Number(prompt("quantidade"))
        objeto.preco = Number(prompt("preço")) 
        vet.push(objeto)
        soma = soma + vet[i].qtd
    }
    alert(soma)
}