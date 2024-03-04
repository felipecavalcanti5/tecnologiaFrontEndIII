const titulo = document.getElementById('titulo');
const botao = document.getElementById('botao');

/*function mudaTexto(){
    h1 = this.innerText = "Novo título";
}*/

botao.addEventListener('click', function mudaTexto(){
    //const titulo = document.getElementById('titulo');
    titulo = titulo.innerText = "Novo título";
    //alert("novo título");
})