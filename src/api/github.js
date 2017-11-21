const axios = require('axios')
const dotenv = require('dotenv').config()

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET

const github = axios.create({
  baseURL: 'https://api.github.com'
})

function reposBy(username) {
  return github.get(`/users/${username}/repos?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}`)
}

function getRepoData(repo, type='REPO_INFO') {
  let queryUrl = ''
  switch(type) {
    case 'REPO_INFO':
      break
    case 'README':
      queryUrl = '/contents/README.md'
      break
    case 'ISSUES':
      queryUrl = '/issues'
      break
    default:
      return null
  }

  return github.get(`/repos/${repo}${queryUrl}?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}`)
}

module.exports = { reposBy, getRepoData }

