import { addSubmitResultListener } from './src/results'
import './style.css'

document.addEventListener("DOMContentLoaded", async function () {
    const newResultForm = document.getElementById("newResultForm")
    if (newResultForm) addSubmitResultListener(newResultForm)
})