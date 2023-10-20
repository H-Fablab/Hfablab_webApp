document.addEventListener("DOMContentLoaded", async () => {
    const fullNameCont = document.querySelector('.user--name__group h4')
    const emailCont = document.querySelector(".user--name__group span")
    const country = document.querySelectorAll(".user--info .info--table span.info")[0]
    const address = document.querySelectorAll(".user--info .info--table span.info")[1]
    const phone = document.querySelectorAll(".user--info .info--table span.info")[2]
    
    const disconnect = document.querySelector(".user--disconnect button")
    const disconnectValue = disconnect.innerText
    // const data = await JSON.parse(localStorage.getItem("user"))
    const token = localStorage.getItem("token")

    try {
        const response = await fetch('http://localhost:9003/auth', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + token
            }
        })

        const { user } = await response.json()
        fullNameCont.innerText = user.fullName
        emailCont.innerText = user.email
        country.innerText = user?.country || "inconnu"
        address.innerText = user?.address || "inconnu"
        phone.innerText = user?.phone || "inconnu"

    } catch (error) {
        console.log(error)
        window.location = "/login"
    }

    disconnect.addEventListener("click", async (e) => {
        e.preventDefault()
        disconnect.innerHTML = "Déconnexion<span class='form-loader'></span>"
        disconnect.disabled = true
        console.log("clicked!")
        try {
            const response = await fetch('http://localhost:9003/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + token
                }
            })

            // const {user} = await response.json()
            // fullNameCont.innerText = user.fullName
            // emailCont.innerText = user.email
            window.location = "/login"

        } catch (error) {
            disconnect.innerText = "An error occurred!"
        }

        setTimeout(() => {
            disconnect.innerText = disconnectValue
            disconnect.disabled = false
        }, 1000);
    })

    if (document.querySelector("#validatebtn")) {
        const validatebtn = document.getElementById('validatebtn')
        validatebtn.addEventListener("click", async e => {
            e.preventDefault()
            const birthDate = document.getElementById("birthDate")
            const country = document.getElementById("country")
            const address = document.getElementById("address")
            const phoneNumber = document.getElementById("phoneNumber")
            
        })
    }
})