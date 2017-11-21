const github = require('./api/github')

// github.reposBy('facebook')
//   .then(res => {
//     const repos = res.data
//     console.log(`Found ${repos.length} repos:`)
//     repos.forEach(repo => {
//       console.log(`${repo.name}`)
//     })
//   })

// Retrieves a repo from a particular owner
function findReposByUser(owner) {
  github.reposBy(owner)
  .then(res => {
    const repos = res.data
    console.log(`Found ${repos.length} repos:`)
    repos.forEach(repo => {
      console.log(`${repo.name}`)
    })
  })
  .catch( reason => {
    console.log(`Request rejected: (${reason})`)
  })
}

// Retrieves a repo's general info
function getRepoInfo(repo) {
  github.getRepoData(repo, 'REPO_INFO')
  .then(res => {
    console.log(res.data)
  })
  .catch( reason => {
    console.log(`Request rejected: (${reason})`)
  })
}

// Retrieves a repo's readme file
function getRepoReadme(repo) {
  github.getRepoData(repo, 'README')
  .then(res => {
    console.log( decodeBase64(res.data.content) )
  })
  .catch( reason => {
    console.log(`Request rejected: (${reason})`)
  })
}

// Converts a string from Base64 to Ascii
function decodeBase64(data) {
  return new Buffer(data, 'base64').toString('ascii')
}

// Retrieves a repo's issue list
function getRepoIssues(repo) {
  github.getRepoData(repo, 'ISSUES')
  .then(res => {
    const issues = res.data
    issues.map( issue => {
        console.log(issue.body)
      }
    )
  })
  .catch( reason => {
    console.log(`Request rejected: (${reason})`)
  })
}

/* 

Challenges:
1. Add usage of the `github.reposBy` to find all repos belonging to 'Microsoft'
2. Add function to load the info for a particular repo. Add examples to load for repos 'facebook/react' and 'Microsoft/vscode'
3. Add function to retrieve the contents of the readme file for a particular repo [https://developer.github.com/v3/repos/contents/#get-the-readme]. Hint: see **4-github.rest** file. Add examples to load for repos 'facebook/react' and 'Microsoft/vscode'
3. Add function to `src/api/github` to list all the issues for a particular repo [https://developer.github.com/v3/issues/#list-issues]. Add examples to load and display key info for repos 'facebook/react' and 'Microsoft/vscode'

*/

// Refactor findReposByUser to retrieve specify a specific owner
findReposByUser('facebook')
findReposByUser('Microsoft')

// Function to load particular repo info
getRepoInfo('facebook/react')
getRepoInfo('Microsoft/vscode')

// Function to load a repo's readme
getRepoReadme('facebook/react')
getRepoReadme('Microsoft/vscode')

// Function to load a repo's issues
getRepoIssues('facebook/react')
getRepoIssues('Microsoft/vscode')