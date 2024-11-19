function criaCartao(categoria, pergunta, resposta) {
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
    cartao.innerHTML = `
<div class="cartao__conteudo">
                    <h3>${categoria}</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>${pergunta} </p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>${resposta}
                        </p>
                    </div>
                </div>
                `
    let respostaVisivel = false
    function viraCartao(){
        respostaVisivel = !respostaVisivel
        cartao.classList.toggle('active',respostavisivel)
    }
cartao.addEventListener ('click', viraCartao)
let container = document.getElementById('container')
container.appendChild(cartao)
}