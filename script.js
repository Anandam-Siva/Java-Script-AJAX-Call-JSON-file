let btn = document.getElementById("special");
let dataele = document.getElementById("data")
// dataele.document.innerText("my name is sia")

btn.addEventListener("click", loadData)

function loadData() {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "data.json", true)
    xhr.send()
    xhr.onprogress = function () {
        dataele.innerText = "on loading...."
    }
    xhr.onload = function () {
        let result = xhr.responseText;//here we get the value in the form of string
        result = JSON.parse(result)//so here we will convert the string to object
        console.log(result);
        console.log(typeof (result))

    }
}
