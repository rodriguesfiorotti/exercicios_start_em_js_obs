import { z } from "zod"

const mySchema = z.string()

console.log(mySchema.parse("Joao"))

alert("Olá, Mundo!")