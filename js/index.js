window.onload = function () {
    let email = document.querySelector("#email")
    let password = document.querySelector("#password")
    let submit = document.querySelector('#submit')
    let show = document.querySelector('#show')
    let target = document.querySelector('#target')

    function show() {
        let arr = []
        // console.log(localStorage.length)
        for (let i = 0; i < localStorage.length; i++) {
            let obj = {
                email: localStorage.key(i),
                password: localStorage.getItem(localStorage.key(i))
            }
            arr[i] = obj
        }
        console.log(arr.value)

        target.innerHTML = JSON.stringify(arr);
    }

    submit.addEventListener('click', function (e) {
        // console.log(email.value, password.value)
        localStorage.setItem(email.value, password.value)
        show()
    })

    // show.addEventListener('click', function (e) {
    //     let arr = []
    //     // console.log(localStorage.length)
    //     for (let i = 0; i < localStorage.length; i++) {
    //         let obj = {
    //             email: localStorage.key(i),
    //             password: localStorage.getItem(localStorage.key(i))
    //         }
    //         arr[i] = obj
    //     }
    //     console.log(arr.value)

    //     target.innerHTML = JSON.stringify(arr);
    // })
}
