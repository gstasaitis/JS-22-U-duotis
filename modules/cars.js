    const loadlist  = (cars) => {
    const list = document.createElement("ul")
    const carsArray = cars.map((car) => `<li>${car}</li>`)
    list.innerHTML = carsArray.join('')
    document.body.append(list)
}
export default loadlist