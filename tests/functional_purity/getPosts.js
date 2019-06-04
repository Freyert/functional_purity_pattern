const tap = require('tap');
const pattern = require('../../src/functional_purity/pattern');

const output = pattern.getPosts();

/*
These may seem really tedious to write, but it sets the contract
for this function in stone.

When you start using functions like these in multiple areas
it's excellent to know that you have made some guarantees about
what the function returns.

These tests really shine if the function takes inputs or
which conditionally affect the output. Then these tests can
_prove_ correctness.

Currently this is more of a bookmark identifying that in the future
you _can_ unit test this function without any major refactoring. A good
reason to pet yourself on the back!
*/
tap.ok(output[0])
tap.ok(output[1].method === 'GET')
tap.ok(output[1].headers['Accepts'] === 'application/json')
