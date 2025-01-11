import './style.css'
import { addSubmitResultListener, loadResults } from './src/results'

document.addEventListener("DOMContentLoaded", async function () {
    const newResultForm = document.getElementById("newResultForm")
    if (newResultForm) addSubmitResultListener(newResultForm)

    const resultsList = document.getElementById("resultsList")
    if (resultsList) loadResults(resultsList)
})