import fetch from 'node-fetch'

function getCoffee(){
    const coffee = ['latte']
    fetch ('https://api.sampleapis.com/coffee/hot')
    .then(myResponse => myResponse.json())
    .then(allCoffees => console.log(allCoffees[1].ingredients))

    .catch(myError => console.error('we got an error', myError))
}



getCoffee()