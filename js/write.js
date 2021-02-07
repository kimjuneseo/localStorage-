window.onload = function () {
    let title = document.querySelector("#title")
    let content = document.querySelector("#content")
    let submit = document.querySelector('#submit')
    submit.addEventListener('click', function (e) {
        // console.log(title.value, content.value)
        localStorage.setItem(title.value, content.value)
    })

}