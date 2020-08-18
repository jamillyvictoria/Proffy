//Procurar o botão
document.querySelector("#add-time")
    //Quando clicar no botão
    .addEventListener('click', cloneField)


//Executar uma ação
function cloneField() {
    //Duplicar os campos
    newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean

    fields = newFieldContainer.querySelectorAll('input')
    console.log(fields[0].value = "")
        //Colocar na página 
    document.querySelector('#schedule-items').appendChild(newFieldContainer)


}