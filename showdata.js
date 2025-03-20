
import getData from "./getData.js";

async function showData() {
    const data = await getData();

    let div = document.getElementById("tt")

    
    data.forEach(element => {
        let p = document.createElement('p')
        p.innerHTML = element.house
        div.appendChild(p)
    });
}
export default showData()