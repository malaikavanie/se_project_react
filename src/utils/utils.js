//FUNCTION TO CHECK RESPONSE FROM SERVER
export function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}
