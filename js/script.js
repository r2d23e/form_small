let doc = document

let but = doc.querySelector('.but1')

let first = doc.querySelector('.first')
let second = doc.querySelector('.second')
let third = doc.querySelector('.third')

let kr = doc.querySelector('.kr')
let inp = doc.querySelectorAll('.inp')
let but2 = doc.querySelector('.but2')



but.addEventListener('click', () => {
    first.classList.remove('first')
    first.classList.add('disable')
    second.classList.remove('second')
    second.classList.toggle('visible')

})
kr.addEventListener('click', () => {
    second.classList.remove('visible')
    second.classList.add('second')
    first.classList.add('first')
    first.classList.remove('disable')
})



but2.addEventListener('click', (event) => {
event.preventDefault()
    for (let i of inp) {
        if (i.value != '') {
            third.classList.remove('third')
            third.classList.add('visible_th')
            second.classList.remove('visible')
            second.classList.add('second')
            i.value=''
            setTimeout(() => {

                third.classList.remove('visible_th')
                third.classList.add('third')
                second.classList.remove('second')
                second.classList.toggle('visible')
            }, 5000);
        }
    }
})





    // doc.querySelector('pi').innerHTML = inp.value