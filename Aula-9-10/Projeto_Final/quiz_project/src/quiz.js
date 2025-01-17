import { fetchQuestions } from "./api";
import { div, h2 } from "./elements";

export async function loadQuestions(quizElement) {
    const questions = await fetchQuestions()
    const answers = questions.map((question) => ({questionId: questionId, answer: null }))

    questions.forEach((question, index) => {
        const questionContainer = div({ className: "question" })

        const textElement = h2(question.text)

        const alternatives = div({ className: "" })
        const alternativeBtns = createAlternativeBtns(question, answers)
        alternatives.append(alternativeBtns)

        questionContainer.append(textElement, alternatives)
        quizElement.append(questionContainer)
    })
}

function createAlternativeBtns(question, answers) {

}