window.onload = function () {
    let target = document.querySelector('#target')
    let arr = []
    // console.log(localStorage.length)
    for (let i = 0; i < localStorage.length; i++) {
        let obj = {
            title: localStorage.key(i),
            content: localStorage.getItem(localStorage.key(i))
        }
        arr[i] = obj
    }
    console.log(arr.value)

    target.innerHTML = JSON.stringify(arr);

}