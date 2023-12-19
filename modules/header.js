const section = document.createElement("section")
const loadHead  = () => {
    section.innerHTML = 
    `
    <h1>Header</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione pariatur porro provident maiores dicta alias explicabo doloremque veritatis molestias a est at voluptate repellat voluptates, nihil!</p>
    `
    document.body.append(section)
}
export default loadHead
