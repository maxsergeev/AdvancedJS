const modals = () => {
    function bindModal(triggSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector)

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            })
        })
        close.addEventListener('click', () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
        })
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = "";
            }
        })
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = "block";
            document.body.style.overflow = "hidden";
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 10000);
}

export default modals;