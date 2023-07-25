document.addEventListener("DOMContentLoaded", function() {
    // Array de conjuntos de conteúdo
    const conteudos = [
      {
        imagem: "../img/diretores-index/DIRETORES-INDEX-IMG4.png",
        texto: "Texto 1",
        film: "como treinar drgão",
        link: "page1.html"

      },
      {
        imagem: "../img/diretores-index/DIRETORES-INDEX-IMG6.png",
        texto: "Texto 2",
        film: "amigo totoro",
        link: "page2.html"

      },
      {
        imagem: "../img/diretores-index/DIRETORES-INDEX-IMG5.png",
        texto: "Texto 3",
        film: "batata",
        link: "page3.html"

      },/*
      {
        imagem: "caminho-da-imagem-3.jpg",
        texto: "Texto 4",
        film:"macarakwfjb"
      },
      {
        imagem: "caminho-da-imagem-3.jpg",
        texto: "Texto 5",
        film:"macarakwfjb"
      },
      {
        imagem: "caminho-da-imagem-3.jpg",
        texto: "Texto 6",
        film:"macarakwfjb"
      },
      {
        imagem: "caminho-da-imagem-3.jpg",
        texto: "Texto 7",
        film:"macarakwfjb"
      },
      {
        imagem: "caminho-da-imagem-3.jpg",
        texto: "Texto 8",
        film:"macarakwfjb"
      }/*/
    ];
  
    // Função para obter uma lista aleatória sem repetição
    function obterListaAleatoriaSemRepeticao(array, quantidade) {
      const listaAleatoria = [];
      const copiaArray = array.slice(); // Cria uma cópia do array original
  
      while (listaAleatoria.length < quantidade && copiaArray.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * copiaArray.length);
        const itemAleatorio = copiaArray.splice(indiceAleatorio, 1)[0];
        listaAleatoria.push(itemAleatorio);
      }
  
      return listaAleatoria;
    }
  
    // Alterar os conteúdos aleatoriamente
    function alterarConteudosAleatorios() {
      const conteudosAleatorios = obterListaAleatoriaSemRepeticao(conteudos, 3);
  
      const elementosImagem = document.querySelectorAll(".img-film");
      const elementosTexto = document.querySelectorAll(".info-film");
      const elementosfilm = document.querySelectorAll(".name-film");
      const elementosLink = document.querySelectorAll(".link-film");
      
      elementosImagem.forEach(function(elemento, indice) {
        elemento.src = conteudosAleatorios[indice].imagem;
      });
      elementosTexto.forEach(function(elemento, indice) {
        elemento.textContent = conteudosAleatorios[indice].texto;
      });
      elementosfilm.forEach(function(elemento, indice) {
        elemento.textContent = conteudosAleatorios[indice].film;
      });
      elementosLink.forEach(function(elemento, indice) {
        if (conteudosAleatorios[indice] && conteudosAleatorios[indice].link) {
          elemento.setAttribute("href", conteudosAleatorios[indice].link);
        }
      });
    }
  
    // Chamada para exibir os conteúdos aleatórios
    alterarConteudosAleatorios();
  });
  