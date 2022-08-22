const init = () => {
    const inputForm = document.querySelector('form'); //grab the form element

    // add an event listener
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        //console.log(event.target.children[1].value) //gert value of input from event
        const input = document.querySelector('input#searchByID');//get value of input directly

        // Fetch data based on User Input
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
            
            title.innerText = data.title;
            summary.innerText = data.summary;
        });
    });
}

document.addEventListener('DOMContentLoaded', init);