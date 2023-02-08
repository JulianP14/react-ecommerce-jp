export const consultDB = async (route) => {
    const response = await fetch(route);
    // Como el fetch es sincronico, usamos el await para determinarlo como asincronico
    const datos = await response.json();
    return datos;
}