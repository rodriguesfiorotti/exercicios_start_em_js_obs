import { createResult, fetchResults } from "./api"
import { listItem } from "./elements"

export async function loadResults(ul) {
  ul.innerHTML = ""
  const results = await fetchResults()

  results.forEach((result) => {
    const li = listItem("", {
      id: `result-${result.id}`,
      innerHTML: `<h3>${result.name}</h3><p>${result.description}</p>`
    })
    li.append(deleteBtn)
    ul.append(li)
  })
}

export function addSubmitResultListener(form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault()
  
      const formData = new FormData(form)
  
      const nameField = formData.get("name")
      const descriptionField = formData.get("description")
  
      await createResult(nameField, descriptionField)
    })
  }