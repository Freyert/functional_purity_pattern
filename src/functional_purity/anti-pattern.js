const fetch = require('node-fetch');
const url = 'https://jsonplaceholder.typicode.com/posts';

function getOddPosts() {

    // The requestArgs are a component you have control over here and should be tested.
    // While it seems _very_ mundane to write a unit test around these it is an
    // important gate and piece of documentation that can A.) prevent issues, but
    // also B.) make it easier to troubleshoot touchy issues.
    let requestArgs = {
        method: 'GET',
        headers: {
            'Accepts': 'application/json'
        }
    };
    return fetch(url, requestArgs)
    .then(res => res.json())
    .then(json => {
        // This part of the function looks very important, but also highly _pure_!
        // However since we've coupled our pure computation with a bunch of IO it is _IMPOSSIBLE_ from
        // a theory standpoint to unit test this.
        // If anyone tells you they wrote a unit test for this you must stand by your
        // principles and teach them the difference between a unit test and an integration
        // test.
        let results = [];
        for (let i = 0; i < json.length; ++i) {
            if (!json[i].id % 2) {
                results.push(json[i])
            } 
        }
        // Spoiler Alert: This doesn't work properly.
        return results
    })
    .catch(e => console.log(e))
}

getOddPosts()
.then(oddPosts => console.log(JSON.stringify(oddPosts)))