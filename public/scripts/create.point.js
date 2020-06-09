
function populateUFs(){
    // quero pegar o select e popular ele
    const ufSelect = document.querySelector("select[name=uf")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json())
    .then(states =>{
        // innerHTML é uma propriedade de elementos html
        for ( const state of states){
            // esse for irá criar vários options no html preenchendo com os estados 
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populateUFs()

 
function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")
    console.log(event.target.value)
    
    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    


    citySelect.innerHTML ="<option value>Selecione a Cidade</option>"
    citySelect.disabled = true



    fetch(url)
    .then( res => res.json())
    .then(cities =>{
        // innerHTML é uma propriedade de elementos html
        for ( const city of cities){
            // esse for irá criar vários options no html preenchendo com os estados 
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false 


    })

}

document
     .querySelector("select[name=uf]")
     .addEventListener("change", getCities)
     
// Itens de coleta
// pegar todos os li's

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelecteditem)
}

// até aqui código ok

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []


function handleSelecteditem(event) {
    const itemLi = event.target

    // add or remove uma classe com javascript
    // toggle = adicionar ou remover
    // add = adicionar
    // remove = remover
    
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    console.log('ITEM ID:',itemId)
        
// verificar se existem itens selecionados, se sim,
// pegar os itens selecionados

const alreadySelected = selectedItems.findIndex( item => {
    const itemFound = item == itemId // isso será true ou false (== é uma comparação)
    return itemFound
    })

// se já estiver selecionado
if (alreadySelected >= 0 ){
// tirar da seleção

const filteredItems = selectedItems.filter(item => {
    const itemIsDifferent = item != itemId // false   
    return itemIsDifferent
    })

    selectedItems = filteredItems
} else { 
// se não estiver selecionado
// adicionar a seleção

    selectedItems.push(' '+ itemId)

}

 console.log('selectedItems:', selectedItems)
// atualizar o campo escondido com os dados selecionados

collectedItems.value = selectedItems

}



// teste console
// console.log(alreadySelected >= 0)
        