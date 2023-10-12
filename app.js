const counter = document.querySelector('#counter')
const btns = document.querySelectorAll('.btn')

let count = 0

btns.forEach((btn) => {
    btn.addEventListener('click' ,(f) => {
        const styles = f.currentTarget.classList

        if (styles.contains('increase')) {
            count++
            
        }else if (styles.contains('decrease')) {
            count--
        } else {
            count=0
        }
        if (count>0 ) {
            counter.style.color = "#6dfd00"
        }
        if (count < 0 ) {
            counter.style.color = "#ff0000"
        } 

        if (count === 0) {
            counter.style.color = "#ffda9d"
        }

        counter.textContent = count
    })
})