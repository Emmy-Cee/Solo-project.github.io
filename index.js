document.addEventListener("DOMContentLoaded", function(){
    let count = 0
    let value = 0
    output1 = document.querySelector("#home-scores")
    output2 = document.querySelector("#guest-scores")
    function add1(){
        count++
        output1.textContent = count
    }
    function add2(){
        count += 2
        output1.textContent = count
    }
    function add3(){
        count += 3
        output1.textContent = count
    }
    document.querySelector("#home-add1").addEventListener("click", add1)
    document.querySelector("#home-add2").addEventListener("click", add2)
    document.querySelector("#home-add3").addEventListener("click", add3)

    function add1Value(){
        value++
        output2.textContent = value
    }
    function add2Value(){
        value += 2
        output2.textContent = value
    }
    function add3Value(){
        value += 3
        output2.textContent = value
    }
    document.querySelector("#guest-add1").addEventListener("click", add1Value)
    document.querySelector("#guest-add2").addEventListener("click", add2Value)
    document.querySelector("#guest-add3").addEventListener("click", add3Value)
})