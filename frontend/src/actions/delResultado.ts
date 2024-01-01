"use server"

export default async function delResultado(id: string) {
  await fetch(`http://127.0.0.1:3000/resultados/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
  })
  
}
