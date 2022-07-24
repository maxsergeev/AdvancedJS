import checkNum from "./checkNum";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img');
    const windowWidth = document.querySelectorAll('#width');
    const windowHeight = document.querySelectorAll('#height');
    const windowType = document.querySelectorAll('#view_type');
    const windowProfile = document.querySelectorAll('.checkbox');

    checkNum("#width");
    checkNum("#height");

    const bindActionToElems = (event, element, stateProp) => {
        element.forEach((item, key) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        {
                            console.log('span');
                            state[stateProp] = key;
                            break;
                        }
                    case 'INPUT':
                        {
                            if (item.getAttribute('type') === 'checkbox') {
                                state[stateProp] = key === 0 ? "Холодное" : "Теплое";
                                element.forEach((box, keyBox) => {
                                    box.checked = false;
                                    if (key == keyBox) {
                                        box.checked = true;
                                    }
                                })
                                console.log('checkbox');
                            } else {
                                state[stateProp] = item.value;
                            }
                            break;
                        }
                    case 'SELECT':
                        {
                            state[stateProp] = item.value;
                            console.log('select');
                            break;
                        }
                }
                console.log(state);
            })
        })
    }

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('change', windowHeight, 'height');
    bindActionToElems('change', windowWidth, 'width');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'season');
}

export default changeModalState;