function exe1(){
    var elem
    var i
    var par = []
    var impar = []
    for (i=0; i<6; i++){
        elem = Number(prompt("Informe um numero"))
        if (elem%2 == 0){
            par.push(elem)
        }
        else{
            impar.push(elem)
        }
    }
    alert("A quantidade de numeros pares é "+par.length+" e os numeros são "+par);
    alert("A quantidade de numeros impares é "+impar.length+" e os numeros são "+impar);
}
function teste(){
    var times = []
    var pontoss = []
    var i;
    for (i=0; i<4; i++){
        times.push(prompt("Informe o nome do time"))
        pontoss.push(prompt("Informe os pontos"))
    }
    var nome = times[0];
    var maior = pontoss[0];
    for (i=0; i<pontoss.length; i++){
        if (pontoss[i]>maior){
            maior = pontoss[i];
            nome = times [i];
        }
    }
    alert("o time com maior pontuação foi o "+nome+" com "+maior+" pontos")
}
function exe2(){
    var vet
    var i
    var m2 = []
    var m3 =[]
    var m23 = []
    for(i=0; i<7; i++){
        vet = Number(prompt("Informe um numero"))
        if(vet%2 == 0){ m2.push(vet)}
        if (vet%3 == 0){ m3.push(vet)}
        if ((vet%2==0)&&(vet%3==0)){m23.push(vet)}
    }
    alert("os números multiplos de 2 são "+m2)
    alert("os números multiplos de 3 são "+m3)
    alert("os números multiplos de 2 e de 3 são "+m23)
}
function exe4(){
    var num = []
    var i
    var ig = []
    for (i=0; i<15; i++){
        num.push(prompt("Informe um numero"))
        if(num[i] == 30){
            ig.push(i)
        }
    }
    alert("O numero 30 aparece nas posições "+ig)
}
function exe3(){
   var codigos = []
   var estoque = []
   var i
   for(i=0; i<10; i++){
       codigos.push(Number(prompt("Informe o Cógigo do produto")))
       estoque.push(Number(prompt("Informe a quantidade do produto")))
   }
   var cliente = Number(prompt("Informe o Cógido do cliente"))
   while(cliente!=0){
       var codProduto = Number(prompt("Informe o código do produto"))
       var qtdProduto = Number(prompt("Informe a quantidade do produto"))
       var auxIndice = codigos.indexOf(codProduto)
       if (auxIndice == -1){
           alert("Produto Inexistente!")
       }
       else{
           if(estoque[auxIndice] - qtdProduto >=0){
               estoque[auxIndice] = estoque[auxIndice] - qtdProduto
               alert("Compra realizada com sucesso!")
           }
           else{ alert("Não tem estoque suficiente")}
       }
       cliente = Number(prompt("Informe o Código do cliente. \n Digite 0 para encerrar."))
   }
}
function exe5(){
    var logica = []
    var linguagens = []
    for(var i=0; i<10; i++){
        logica.push(Number(prompt("Codigo do aluno de lógica")))
    }
    for(var i=0; i<5; i++){
        linguagens.push(Number(prompt("Codigo do aluno de Linguagens")))
    }
    var interseccao = []
    for(var i=0; i<10; i++){
        if(linguagens.indexOf(logica[i])!=-1){
            interseccao.push(logica[i])
        }
    }
    alert(interseccao)
}
function exe6(){
    var vendedores = []
    var vendas = []
    var comissão = []
    let i, nome1, nome2;
    var receber = []
    for (i=0; i<5; i++){
        vendedores.push(prompt("Informe o nome do vendedor:"))
        vendas.push(prompt("Informe as vendas:"))
        comissão.push(prompt("Informe a comissão:"))
    }
    for(i=0; i<5; i++){
        receber.push(vendas[i]*comissão[i]/100)
        var maior = receber[0]
        var menor = receber[0]
        if(receber[i]>maior){
            maior = receber[i]
            nome1 = vendedores[i]; 
        }
        if(receber[i]<menor){
            menor = receber[i]
            nome2 = vendedores[i]; 
        }
        
    }
    alert(vendedores+"\n"+receber)
    alert("O vendedor "+nome1+" recebeu R$"+maior+"\n O vendedor "+nome2+" recebeu R$"+menor)
} 