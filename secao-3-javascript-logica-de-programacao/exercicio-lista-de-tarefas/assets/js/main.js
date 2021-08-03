/* Seção 3: JavaScript - Lógica de programação
Vídeo nro. 67 - aula 48 no git
lista de tarefas
 */

const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

const criaLista = () => {
    const itemLista = document.createElement('li');
    return itemLista;
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

const criaBotaoApagar = (li) => {
    li.innerText += ' ';
    const btnApagar = document.createElement('button')
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class', 'apagar');
    btnApagar.setAttribute('title', 'apagar essa tarefa');
    li.appendChild(btnApagar);
}

const limpaInput = () => {
    inputTarefa.value = '';
    inputTarefa.focus();
}

const criaTarefa = (textoInput) => {
    const novoItem = criaLista();
    novoItem.innerText = textoInput;
    tarefas.appendChild(novoItem);
    limpaInput();
    criaBotaoApagar(novoItem);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    
})

document.addEventListener('click', function(e) {
    const el = e.target;
    
    if (el.classList.contains('apagar')){
        //console.log(el.parentElement)
        el.parentElement.remove();
        salvarTarefas();
    }
})

const salvarTarefas = () => {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //trim remove o espaço vazio que deixei
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

const adicionaTarefasSalvas = () => {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    console.log(listaDeTarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();