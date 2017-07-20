let containerBlock = document.querySelector('#container-block');
let innerBlock = document.querySelector('#inner-block');
let textareaBlock = document.querySelector('#textarea-block');
let editButton = document.querySelector('.edit-button');
let saveButton = document.querySelector('.save-button');
let cancelButton = document.querySelector('.cancel-button');

let toggleEdit = () => {
//Toggle .editMode on the textareaBlock
    containerBlock.classList.toggle("editMode");
};

let SaveValue = (event) => {
    let containsClass = containerBlock.classList.contains("editMode");

    if (containsClass) {
        //Switch from .editMode
        //innerBlock text become the input's value
        innerBlock.innerText = textareaBlock.value;

    } else {
        //Switch to .editMode
        //textareaBlock value becomes the innerBlock's text
        textareaBlock.value = innerBlock.innerText;
    }
};

let cancelEditing = () => {
    textareaBlock.value = '';
    containerBlock.classList.remove('editMode');
};

editButton.addEventListener("click", toggleEdit);
saveButton.addEventListener("click", SaveValue);
cancelButton.addEventListener('click', cancelEditing);