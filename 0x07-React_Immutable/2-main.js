import accessImmutableObject from './2-nested';

const a = accessImmutableObject({
    name: {
        first: "Guillaume",
        last: "Salva"
    }
}, ['name', 'first'])

console.log(a);