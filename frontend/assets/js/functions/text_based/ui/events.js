const textBasedForm = document.querySelector("#text-based-form");
textBasedForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const textDesc = document.querySelector("#textDesc");
    fetch("http://localhost:5000/api/text", 
    {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            text_description: textDesc.value
        })
    }).then(result => result.json()
    ).then(data => alert("SERVER says "+data.data.text_description))
})