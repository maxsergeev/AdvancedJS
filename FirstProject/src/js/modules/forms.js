import checkNum from "./checkNum";

const forms = (state) => {
    const form = document.querySelectorAll('form');
    const input = document.querySelectorAll('input');


    const status = {
        loading: "Идет загрузка...",
        done: "Ваша заявка отправлена успешно!",
        error: "Что-то пошло не так, попробуйте еще раз!"
    };

    checkNum('input[name="user_phone"]');

    const postData = async(data, url) => {
        document.querySelector('.status').textContent = status.loading;
        const response = await fetch(url, {
            method: "POST",
            body: data
        })
        return await response.text();
    };

    const clearInputs = () => {
        input.forEach((item) => {
            item.value = "";
        })
    };

    form.forEach((item) => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMess = document.createElement('div');
            statusMess.classList.add('status');
            item.appendChild(statusMess);

            const data = new FormData(item);
            console.log(item.getAttribute('data-calc'));
            if (item.getAttribute('data-calc') === "end") {
                for (let key in state) {
                    data.append(key, state[key])
                }
            }

            postData(data, 'assets/server.php')
                .then((res) => {
                    console.log(res);
                    statusMess.textContent = status.done;
                })
                .catch(() => {
                    statusMess.textContent = status.error;
                })
                .finally(() => {
                    clearInputs()
                    setTimeout(() => {
                        statusMess.remove();
                    }, 3000);
                })
        })
    })
}

export default forms;