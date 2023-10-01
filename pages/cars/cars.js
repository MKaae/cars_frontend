import { API_URL } from "../../settings.js"
import { sanitizeStringWithTableRows, handleHttpErrors, makeOptions } from "../../utils.js"
const URL = API_URL + "/cars/admin" //with /admin if you have it.

export async function initCars() {
    const cars = await fetch(URL, makeOptions("GET", null, true))
        .then(handleHttpErrors)
    
    const tableRows = cars.map(car => `
        <tr>
            <td>${car.id}</td>
            <td>${car.brand}</td>
            <td>${car.model}</td>
            <td>${car.pricePerDay}</td>
            <td>${car.bestDiscount}</td>
        </tr>     
    `).join("")
    document.querySelector('#table-rows').innerHTML = sanitizeStringWithTableRows(tableRows)    
}

