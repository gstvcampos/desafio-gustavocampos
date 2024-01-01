"use server"

export default async function addResultado(formData) {
  const response = await fetch("http://127.0.0.1:3000/resultados/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData),
  })
  const result = await response.json();
  console.log(formData)
  console.log(result)
}