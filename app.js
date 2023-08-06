const button = document.getElementById('generate-color-btn')
const color = ['red', 'pink', 'black', 'grey', 'green', 'yellow', 'purple']

button.addEventListener('click', () => {
    // console.log('tiklandin!')
    // document.body.style.backgroundColor = color[4]
    // hemen üstteki kod body etiketinin içindeki style dosyasında backroundu bul ve 0'ıncı değer ile değiştir demek.
const randomNumber = Math.floor(
    Math.random() * 256
    )
    const randomNumber2 = Math.floor(
        Math.random() * 256
        )
        const randomNumber3 = Math.floor(
            Math.random() * 256
            )
    document.body.style.backgroundColor = `rgb(${randomNumber}, ${randomNumber2}, ${randomNumber3})`
})
