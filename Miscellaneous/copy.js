const a = {
    sex: "only"
}

const b = a

b.sex = 'anal'



const c = structuredClone(a)
c.sex = 'muh moan '

console.log({ a, c, b })