// const gender = document.getElementById('ember282')
// gender.style.backgroundColor = 'blue'

const body = document.getElementById('grnhse_app')

const heading = Array.from(document.getElementsByTagName('h1'))
heading.forEach(heading => {
    console.log(heading.innerText)
})
console.log('ok im working', heading)
console.log('idk about this one', body)

heading[0].style.backgroundColor = 'blue'
body.style.backgroundColor = 'green'