const init = () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', function(e) {
        e.preventDefault()

        const userInput = document.querySelector('input').value
        console.log(userInput)

        fetch(`http://localhost:3000/movies/${userInput}`)
         .then(function (res) {
            if(!res.ok) {
                throw new Error("No such ID!")
            }else {
                return res.json()
            }
    })
         .then(data => {
            const title = document.querySelector('section#movieDetails')
            const summary = document.querySelector('section#movieDetails')

            title.innerText = data.title
            summary.innerText = data.summary
    })
         .catch(error => console.log("Error fetching data", error))
    })
  
}

document.addEventListener('DOMContentLoaded', init);