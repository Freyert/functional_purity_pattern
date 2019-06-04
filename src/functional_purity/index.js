const fetch = require('node-fetch');
const pattern = require('./pattern')

/*
We have separated IO from the "pure" computation.
The code is more concise and was far easier to get correct
given approximately the same amount of working time.

However, we can also make _assertions_ as to the correctness
of our "pure" functions which we could not do before.
*/
fetch(...pattern.getPosts())
.then(res => res.json())
.then(json => json.filter(post => pattern.isOdd(post.id)))
.then(oddPosts => console.log(JSON.stringify(oddPosts)))