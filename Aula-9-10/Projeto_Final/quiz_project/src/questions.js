import { createQuestion, deleteQuestion, fetchQuestions, fetchResults, updateQuestion } from "./api"
import { button, div, h3, input, label, option, select } from "./elements"

export async function createEmptyQuestion(managerElement, results) {
   const question = await createQuestion()
   createQuestionForm(managerElement, question, results)
}

export async function loadQuestionsMenager(managerElement) {
    managerElement.innerHTML = ""
    const questions = await fetchQuestions()
    const results = await fetchResults()

    questions.forEach((question) => createQuestionForm(managerElement, question, results))
}

function createQuestionForm(managerElement, question, results) {
    const questionForm = document.createElement("form")
    questionForm.className = "questionForm"

    questionForm.addEventListener("submit", async (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const text = formData.get("text")

        const points = {}
        points.fullyDisagree = +formData.get("fullyDisagree")  // O "+" na frente é para garantir que retornará um número.
        points.partiallyDisagree = +formData.get("partiallyDisagree")
        points.dontKnow = +formData.get("dontKnow")
        points.partiallyAgree = +formData.get("partiallyAgree")
        points.fullyAgree = +formData.get("fullyAgree")

        await updateQuestion(question.id, text, points)
        alert("Pergunta atualizada com sucesso!")
    })

    const questioFormTitle = h3(`Pergunta ${question.id}`)
    const questionTextLabel = label("Texto da Pergunta:", `question-${question.id}-text`)
    const questionTextInput = input("text", {
        id: `question-${question.id}-text`,
        name: "text",
        value: question.text
    })

    const fullyDisagreeField = createAlternativeField({ 
        labelText: "Discordo Completamente",
        fieldId: `question-${question.id}-fully-disagree`,
        fieldName: "fullyDisagree"
     }, question, results)

     const partiallyDisagreeField = createAlternativeField({ 
        labelText: "Discordo Parcialmente",
        fieldId: `question-${question.id}-partially-disagree`,
        fieldName: "partiallyDisagree"
     }, question, results)

     const dontKnowField = createAlternativeField({ 
        labelText: "Não sei",
        fieldId: `question-${question.id}-dontKnow`,
        fieldName: "dontKnow"
     }, question, results)

     const partiallyAgreeField = createAlternativeField({ 
        labelText: "Concordo Parcialmente",
        fieldId: `question-${question.id}-partially-agree`,
        fieldName: "partiallyAgree"
     }, question, results)

     const fullyAgreeField = createAlternativeField({ 
        labelText: "Concordo Completamente",
        fieldId: `question-${question.id}-fully-agree`,
        fieldName: "fullyAgree"
     }, question, results)

    const buttonGroup = div({className: "button-group" })
    const submitBtn = button("Salvar", { type: "submit" })
    const deleteBtn = button("Excluir Pergunta", {
        type: "button",
        onClick: async () => {
            await deleteQuestion(question.id)
            questionForm.remove()
        }
    })

    buttonGroup.append(submitBtn, deleteBtn)

    questionForm.append(
        questioFormTitle,
        questionTextLabel,
        questionTextInput,
        fullyDisagreeField,
        partiallyDisagreeField,
        dontKnowField,
        partiallyAgreeField,
        fullyAgreeField,
        buttonGroup
    )
    managerElement.append(questionForm)
}

//alternative = { labelText, id, name}
function createAlternativeField(alternative, question, results) {
    const container = div({ className: "inline-block" })

    const fieldLabel = label(alternative.labelText, alternative.fieldId)
    const fieldSelect = select(alternative.fieldId, alternative.fieldName)

    const defaultOption = option("Selecione...", {selected: true, disable: true })
    fieldSelect.options.add(defaultOption)

    results.forEach((results) => {
        const resultOption = option(results.name, { 
            value: results.id,
            selected: question.points[alternative.fieldName] == results.id 
        })
        fieldSelect.options.add(resultOption)
    })

    container.append(fieldLabel, fieldSelect)
    return container
}

// objeto.propriedade
// objeto["string qualquer"]