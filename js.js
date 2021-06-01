// VARIAVEIS DOS PRODUTOS
const nomeProduto = document.getElementById('nome-produto')
const fabricanteProduto = document.getElementById('fabricante-produto')
const categoriaproduto = document.getElementById('categoria-produto')
const quantidade = document.getElementById('quantidade')
const valor = document.getElementById('valor-unidade')

// VARIAVEIS DO CARRINHO
const valores = document.querySelectorAll('#catalogo input')
const btn = document.querySelectorAll('#catalogo button')
btn[1].style.display = 'none'

function adcionarCarrinho(){
    if(nomeProduto.value != '' && quantidade.value != '' && valor.value !=''){
        valores[0].value = nomeProduto.value
        valores[1].value = fabricanteProduto.value
        valores[2].value = categoriaproduto.value
        valores[3].value = quantidade.value
        valores[4].value = Number(quantidade.value) * Number(valor.value)
    }else{
        if(nomeProduto.value === ''){
            alert('Qual nome do produto')
        }else if(quantidade.valor === ''){
            alert('Qual a quantidade do produto')
        }else if(valor.value === ''){
            alert('Qual o valor do produto')
        }
    }
}
function editar(){
    if(nomeProduto.value != ''){
        btn[0].style.display = 'none';
        btn[1].style.display = 'block'
        for(let x = 0; x <= valores.length; x++){
            valores[x].disabled = false
            valores[x].style.backgroundColor = 'white'
        } 
    }else{
        alert('nao tem nada para ser editado')
    }  
}
function salvar(){
    btn[0].style.display = 'block';
    btn[1].style.display = 'none'
    for(let x = 0; x <= valores.length; x++){
        valores[x].disabled = true
        valores[x].style.backgroundColor = 'transparent'
    } 
}
function deletar(){
    for(let x = 0; x <= valores.length; x++){
        valores[x].value = ''
    } 
}