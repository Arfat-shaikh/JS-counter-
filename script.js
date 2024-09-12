const count = document.querySelector('.count')
const changeBy = document.querySelector('.change-by')
const minusBtn = document.querySelector('.minus-btn')
const plusBtn = document.querySelector('.plus-btn')
const reset = document.querySelector('.reset')

minusBtn.addEventListener('click', () => {
    countValue = parseInt(count.innerText)
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countValue - changeByValue
})

plusBtn.addEventListener('click', () => {
    countValue = parseInt(count.innerText)
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countValue + changeByValue
})

reset.addEventListener('click', function () {
    count.innerText = 0
    changeBy.value = 1
})