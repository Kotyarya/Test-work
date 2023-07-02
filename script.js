const dropdowns = document.querySelectorAll(".dropdown")


for (let i = 0; i < dropdowns.length; i++) {

    const actualDropDown = dropdowns[i]

    actualDropDown.addEventListener("click", () => {
        const actualOptions = actualDropDown.querySelector(".options")


        if (!actualOptions.classList.contains("options__open")) {
            for (let j = 0; j < dropdowns.length; j++) {
                dropdowns[j].querySelector(".options").classList.remove("options__open")
            }


            actualOptions.classList.add("options__open")
        } else {
            actualOptions.classList.remove("options__open")
        }

    })

    const options = dropdowns[i].querySelectorAll(".option")

    for (let k = 0; k < options.length; k++) {
        options[k].addEventListener("click", (e) => {
            dropdowns[i].querySelector(".selected-option").innerText = e.target.innerText
        })
    }
}


document.addEventListener("click", (e) => {


    if (!e.srcElement.parentElement.classList.contains("dropdown") && !e.target.classList.contains("selected-option")) {
        console.log(e.srcElement)
        console.log("close")
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].querySelector(".options").classList.remove("options__open")
        }
    }

})


