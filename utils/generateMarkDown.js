// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
function renderLicenseBadge(license) {
  if (license == "None") {
    return ''
  } else {
    return `![${license}](https://img.shields.io/badge/${license}-2.0-orange)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

function showTableofContents(showTOC) {
console.log(showTOC)
  if (showTOC) {
    
    return `## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribute](#howtocontribute)
  * [Tests](#tests)
  * [Questions](#questions)`; 
  } else {
    return ``
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## License
  ${renderLicenseBadge(data.license)}

 ${showTableofContents(data.tableofContents)}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## How to Contribute 
  ${data.contribute}
  * The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

  ## Tests
  ${data.tests}

  ## Questions

  * Reach me with additional questions at ${data.emailAddress}
  * Github Link : https://github.com/${data.githubID}
`;


}

module.exports = generateMarkdown;

//  License Link: ${renderLicenseLink(data.license)}