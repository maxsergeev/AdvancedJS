const checkNum = (input) => {
    const numberInput = document.querySelectorAll(input)
    numberInput.forEach((item) => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        })
    })
}

export default checkNum;