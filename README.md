If there's one complaint I hear from my colleagues over my four years of work
experience is they do not know how to unit test, or they just do not enjoy
writing unit tests. That's why I want the world to know the wonders and joys
of functional programming. However, this is a _huge_ topic and it gets really
navel gazey really fast. That's why I decided to share _one_ topic from functional
programming that I think can make anyone enjoy their job a little bit more: _functional purity_.

Check out the [Wikipedia definition](https://en.wikipedia.org/wiki/Pure_function) (as of June 3, 2019):

> In computer programming, a pure function is a function that has the following properties:

> 1. Its return value is the same for the same arguments (no variation with local static variables, non-local variables, mutable reference arguments or input streams from I/O devices).
> 2. Its evaluation has no side effects (no mutation of local static variables, non-local variables, mutable reference arguments or I/O streams).

> Thus a pure function is a computational analogue of a mathematical function. Some authors, particularly from the imperative language community, use the term "pure" for all functions that just have the above property.

Basically it says:

1. Whenever you stick `x` into `f(x)` you always get `y`.
2. Whenever you evaluate `f()` it does not alter anything outside of it's scope.
   + Global variable mutation could affect functions that are not `f()`.
   + IO stream manipulation affects data outside the scope of `f()` so it's very similar to mutating a global variable. Even if you're just fetching data without any plans to mutate; touching an IO stream locks resources up that other functions might need and therefore considered a mutation of global state.
   + I'll say it again: don't put IO in your functions if you can avoid it.

These restrictions create a closed, easy to reason about system, 
composed of many _small_ unit sized functions perfect for unit 
testing! It just makes life easier.

---
## How to digest my example?

First, `npm i` (install `nodejs` if you don't have it).

`src/functional_purity` contains `anti-pattern.js` and `pattern.js`.

Many of you may recognize `anti-pattern.js`, it might even
be how you write code today. Does it work the way you think
it should be reading it? How long did you read it? Try
running it with `node anti-pattern.js`. That doesn't look right...

Now look at `pattern.js` pretty easy to understand right? Try running `node index.js`. Works like a charm.

Now run `npm test` in the project root directory. Yep,
those are guarantees, proofs even, that my logic is 
correct.

You can look at the tests in `./tests/functional_purity/*.js`.

# The Lesson

1. Always separate your IO from your pure computation when
you can.
2. Write pure functions:
  * For `f(x)` always return `y`. (That is given x always return y).
  * Do not mutate state outside of the function.
