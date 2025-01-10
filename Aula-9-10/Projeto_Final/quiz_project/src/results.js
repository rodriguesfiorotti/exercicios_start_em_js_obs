export function addSubmitResultListener(form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault()
  
      const formData = new FormData(form)
  
      const nameField = formData.get("name")
      const descriptionField = formData.get("description")
  
      console.log({ nameField, descriptionField })
    })
  }