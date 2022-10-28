const array = [
    {
        id: "001",
        name: "camisa",
        description: "manga larga",
        stock: 100,
    }
]

const promesa = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(array);
    }, 3000);
})

promesa.then((resultado) => {
    console.log(resultado)
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log("Promesa finalizada")
})



// https://github.com/alexmarinmendez/react-tube-34810-clase-5.git
