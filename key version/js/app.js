document.addEventListener('DOMContentLoaded', () => {
    let containerBlock = document.querySelector('#container-block');
    let innerBlock = document.querySelector('#inner-block');
    let textareaBlock = document.querySelector('#textarea-block');
    let pressKey = document.querySelector('#press-key');

    let manager = TaskManager(containerBlock, innerBlock, textareaBlock, pressKey);
    manager.bindEventHandlers();
});

let TaskManager = (containerBlock, innerBlock, textareaBlock, pressKey) => {
    const CTRL_BUTTON_CODE = 17;
    const S_BUTTON_CODE = 83;
    const E_BUTTON_CODE = 69;
    const ESC_BUTTON_CODE = 27;

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

    let bindEventHandlersToKeys = () => {
        //Set the event handler
        toggleEdit();
        SaveValue();
        cancelEditing();
    };

    let bindKeyboardShortcutsHandlers = () => {

        let isCtrlPressed = false;

        document.onkeydown = (event) => {
            console.log('Pressed button #' + event.which);
            if (event.which == CTRL_BUTTON_CODE) {
                isCtrlPressed = true
            }
            if (event.which == S_BUTTON_CODE && isCtrlPressed) {
                event.preventDefault();
                SaveValue();
                pressKey.innerText = 'You pressed "Ctrl + S"';
                isCtrlPressed = false
            }
            if (event.which == E_BUTTON_CODE && isCtrlPressed) {
                event.preventDefault();
                toggleEdit();
                pressKey.innerText = 'You pressed "Ctrl + E"';
                isCtrlPressed = false
            }
        };
        document.onkeyup = (event) => {
            if (event.which == ESC_BUTTON_CODE) {
                event.preventDefault();
                cancelEditing();
                pressKey.innerText = 'You pressed "Esc"';
            }
            console.log('Leaved button #' + event.which);
        };
        /*
         document.onkeyup = (event) => {

         if (event.which == CTRL_BUTTON_CODE) {
         isCtrlPressed = false
         }
         console.log('Leaved button #' + event.which);
         };
         */
    };

    return {
        bindEventHandlers: () => {
            bindEventHandlersToKeys();
            bindKeyboardShortcutsHandlers();
        }
    };

};
