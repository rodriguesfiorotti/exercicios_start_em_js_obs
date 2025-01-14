import './style.css'
import { addSubmitResultListener, loadResults } from './src/results'
import { fetchResults } from './src/api'
import { createEmptyQuestion, loadQuestionsMenager } from './src/questions'

document.addEventListener("DOMContentLoaded", async function () {
    const newResultForm = document.getElementById("newResultForm")
    if (newResultForm) addSubmitResultListener(newResultForm)

    const results = await fetchResults()

    const resultsList = document.getElementById("resultsList")
    if (resultsList) loadResults(resultsList)

    const questionsManager = document.getElementById("questionsManager")
    if (questionsManager) loadQuestionsMenager(questionsManager)

    const newQuestionBtn = document.getElementById("newQuestion")
    if (newQuestionBtn) newQuestionBtn.addEventListener("click", () => createEmptyQuestion(questionsManager, results))
})