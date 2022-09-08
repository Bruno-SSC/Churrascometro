import { resultado } from "../main.js"

export default function showResult() {


    resultado.style.display = "none"
    resultado.parentElement.style.display = "grid"
    resultado.parentElement.style.cursor = "pointer"


    const animate1 = {
        width: [0, '40%'],
        height: [0, '70px']
    }

    const animate1Option = {
        duration: 1000,
        iterations: 1
    }

    // const animate2 = resultado.parentElement.animate({
    //     color: ['red', 'blue']
    // },
    //     2000)

    resultado.parentElement.animate(animate1, animate1Option)

    setTimeout(() => {resultado.style.display = "inline"}, 1000)

}
