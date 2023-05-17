const form = document.getElementById("form_login")
const btn_login = document.querySelector("#btn_login")

form.addEventListener('submit', (e) => {
    btn_login.disabled = true;
    btn_login.innerHTML = "Logando..."
    e.preventDefault()
    const frm_data = new FormData(form)
    const data = Object.fromEntries(frm_data)
    fetch('/loginauthetication', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                document.location = "/"
                return
            }
            alert(result.msg)
            btn_login.disabled = false;
            btn_login.innerHTML = "Login"
        })
})