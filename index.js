document.addEventListener("DOMContentLoaded", () => {
    fetchContent()
})

function fetchContent(){
    fetch ("http://localhost:3000/")
    .then(res => res.json())
    .then(data => {
        //do something w this data
    })
}