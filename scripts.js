
const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listacompleta = document.querySelector('.list-tasks') 



let minhaListaDeItens = []


function adicionarNovaTarefa() {
    minhaListaDeItens.push({

      tarefa: input.value,
      concluida: false
    })

    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas(){    


    let novaLi =''
    
    minhaListaDeItens.forEach( (item, posicao) => {

        novaLi = novaLi + `
        
        <li class="task ${item.concluida && "done"}">
          <img src="./img-todo-list/checked.png" alt="check-na-Tarefa" onclick="concluirTarefa(${posicao})">
          <p>${item.tarefa}</p>
          <img src="./img-todo-list/trash.png" alt="Tarefa-para-o-lixo" onclick="deletarItem(${posicao})">
        </li>
        
        `
    })

  listacompleta.innerHTML = novaLi

  localStorage.setItem('Lista', JSON.stringify(minhaListaDeItens))

}

function concluirTarefa(posicao){

   minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

   mostrarTarefas()

}

function deletarItem(posicao){

  minhaListaDeItens.splice(posicao, 1)
  
  mostrarTarefas()
  
}
  


button.addEventListener('click', adicionarNovaTarefa)


