const API_URL = "http://localhost:3333";

export async function getItems() {
  const response = await fetch(`${API_URL}/api/items`);
  return response.json();
}


export async function login(email, password) {
  const response = await fetch(`${API_URL}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  
  const data = response.json();

  if(!response.ok) {
    throw new Error(data.message || "Erro no login");
  }

  return data;
} 

