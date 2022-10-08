let btn = document.getElementById("special");
let dataele = document.getElementById("data")
// dataele.document.innerText("my name is sia")

btn.addEventListener("click", loadData)

function loadData() {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "data.json", true)// here we can use the api link also 
    xhr.send()
    xhr.onprogress = function () {
        dataele.innerText = "on loading...."
    }
    xhr.onload = function () {
        let result = xhr.responseText;//here we get the value in the form of string
        result = JSON.parse(result)//so here we will convert the string to object
        console.log(result);
        console.log(typeof (result))

        let str = `<table border = '2 px'><tr>`
        for (key in result) {
            str = str + `<th>${key}</th>`
        }

        str = str + `</tr><tr>`
        for (key in result) {
            str = str + `<td>${result[key]}</td>`
        }

        str = str + `</tr></table>`

        dataele.innerHTML = str;

    }
}

///////////////////////////////////////////
// Here we can use the xhr.status for true or false of the got data 
// xhr.onload = function () {
//     if (xhr.status == 200) {
//         let result = xhr.responseText;//here we get the value in the form of string
//         result = JSON.parse(result)//so here we will convert the string to object
//         console.log(result);
//     } else {
//         dataele.innerText = "Error........."

//     }
// }