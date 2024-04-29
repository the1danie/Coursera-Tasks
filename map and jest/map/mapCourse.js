const obj = {
    name: 'danie',
    age: 19,
    job: 'webDevops'
}

const entries = [
    ['name', 'danie'],
    ['age', 20],
    ['job', 'webDevops']
]

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))

const map = new Map(entries);
console.log(map)
console.log(map.get('job'))
console.log(map.has('job'))
map.delete('job')
console.log(map.has('job'))
