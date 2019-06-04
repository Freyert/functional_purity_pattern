const tap = require('tap');
const pattern = require('../../src/functional_purity/pattern');

const input = [1, 2, 3, 4, 5, 6]
const expected = [1, 3, 5]

const output = expected.filter(pattern.isOdd)

expected.forEach((odd) => {
    tap.ok(output.includes(odd), `output missing ${odd}.`);
})

output.forEach((x) => {
    tap.ok(expected.includes(x), `output has non-odd: ${x}`)
})
