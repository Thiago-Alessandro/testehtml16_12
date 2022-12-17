function negrito() {

        var nomePesquisa = document.querySelector("input");
        var listaNomes = document.querySelectorAll("li");

        for (var i = 0; i < listaNomes.length; i++) {

          if (listaNomes[i].textContent.includes(nomePesquisa.value) && nomePesquisa.value!="") {

            var destaque = document.createElement("strong");
            destaque.innerText = listaNomes[i].textContent;
            listaNomes[i].innerText = "";
            listaNomes[i].appendChild(destaque);

          } else {

            listaNomes[i].innerText=listaNomes[i].textContent;

          }

        }   

        console.log(listaNomes)

      }