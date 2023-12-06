const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

const nuevoArrayMap = tecnologias.map(tech => {
    if (tech === 'HTML') {
        return 'GraphQL';
    } else {
        return tech;
    }
})
const nuevoArrayFilter = tecnologias.filter(tech => tech === 'React')


console.log(nuevoArrayMap)
console.log(nuevoArrayFilter)