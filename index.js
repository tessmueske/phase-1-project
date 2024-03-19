document.addEventListener("DOMContentLoaded", () => {
    fetchContent()
})

function fetchContent(){
    fetch ("json server name here")
    .then(res => res.json())
    .then(data => {
        //do something w this data
    })
}