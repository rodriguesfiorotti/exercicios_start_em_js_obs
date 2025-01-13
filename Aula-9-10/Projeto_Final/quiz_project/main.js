import './style.css'
import { addSubmitResultListener, loadResults } from './src/results'
import { createQuestion } from './src/api'
import { loadQuestionsMenager } from './src/questions'

document.addEventListener("DOMContentLoaded", async function () {
    const newResultForm = document.getElementById("newResultForm")
    if (newResultForm) addSubmitResultListener(newResultForm)

    const resultsList = document.getElementById("resultsList")
    if (resultsList) loadResults(resultsList)

    const questionsManager = document.getElementById("questionsManager")
    if (questionsManager) loadQuestionsMenager(resultsList)

    const newQuestionBtn = document.getElementById("newQuestion")
    if (newQuestionBtn) newQuestionBtn.addEventListener("click", () => createQuestion())
})