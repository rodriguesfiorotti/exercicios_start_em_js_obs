export async function createResult(name, description) {
    //const body = JSON.stringify({ name: name, description: description})
    const body = JSON.stringify({ name, description})

    await fetch("http://localhost:3000/results", {
        method: "POST",
        headers: { "Content-Type": "aplication/json" },
        body
    })
}