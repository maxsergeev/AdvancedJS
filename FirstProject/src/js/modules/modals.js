const modals = () => {
    function bindModal(triggSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector)
        const windows = document.querySelectorAll('[data-modal]')

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                //закрытие все ненужных модалок
                windows.forEach((item) => {
                    item.style.display = 'none';
                })
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            })
        })
        close.addEventListener('click', () => {
            //закрытие все ненужных модалок
            windows.forEach((item) => {
                item.style.display = 'none';
            })
            modal.style.display = "none";
            document.body.style.overflow = "";
        })
        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                //закрытие все ненужных модалок
                windows.forEach((item) => {
                    item.style.display = 'none';
                })
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
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', false);
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    showModalByTime('.popup', 10000);
}

export default modals;