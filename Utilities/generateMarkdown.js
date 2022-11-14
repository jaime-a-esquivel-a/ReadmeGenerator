// license badge function
function renderLicenseBadge(license) {

    switch(license){
        case 'Apache':
            return '[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;
        case 'Boost':
            return '[![License: Boost](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
            break;
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'Mozilla':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
            break;
        case 'ODbL':
            return '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/) ';
            break;
        default:
            return '';
            break;
    } 

}

// license link function
function renderLicenseLink(license) {

    switch(license){
        case 'Apache':
            return '[https://opensource.org/licenses/Apache-2.0](https://opensource.org/licenses/Apache-2.0)';
            break;
        case 'Boost':
            return '[https://img.shields.io/badge/License-Boost_1.0-lightblue.svg](https://www.boost.org/LICENSE_1_0.txt)';
            break;
        case 'MIT':
            return '[https://img.shields.io/badge/License-MIT-yellow.svg](https://opensource.org/licenses/MIT)';
            break;
        case 'Mozilla':
            return '[https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg](https://opensource.org/licenses/MPL-2.0)';
            break;
        case 'ODbL':
            return '[https://img.shields.io/badge/License-PDDL-brightgreen.svg](https://opendatacommons.org/licenses/pddl/)';
            break;
        default:
            return '';
            break;
    } 

}

// license section function
function renderLicenseSection(license) {

    let strLicSec = ''

    switch(license){
        case 'Apache':
            strLicSec += '## Apache\n\n' +
                         '### Apache 2.0 License\n\n';
            break;
        case 'Boost':
            strLicSec += '## Boost\n\n' +
                         '### Boost Software License 1.0\n\n';
            break;
        case 'MIT':
            strLicSec += '## MIT\n\n' +
                         '### The MIT License\n\n';
            break;
        case 'Mozilla':
            strLicSec += '## Mozilla\n\n'
                         '### Mozilla Public License 2.0\n\n';
            break;
        case 'ODbL':
            strLicSec += '## Open Database License\n\n'
                         '### (ODbL)\n\n';
            break;
        default:
            strLicSec = '';
            break;
    } 

    strLicSec += renderLicenseLink(license);

    return strLicSec;

}

function renderGitHubUser(username){
    if (username != ''){
        return 'https://github.com/'+username;
    }else{
        return '';
    }
}

// MD file content
function generateMarkdown(data) {

return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

[Go to App](${data.q_link})

## Contents

- [Installation](#installation)
- [Usage](#usage)
- [Licences](#licenses)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

-- 

## Installation

${data.installation}

-- 

## Usage

${data.usage}

-- 

## Licenses

${renderLicenseSection(data.license)}

-- 

## Contributing

${data.contributing}

--

## Tests

${data.testing}

--

## Questions

Please contact the author:
\nName: ${data.q_author}
\ne-mail: ${data.q_email}
\nGitHub User: ${renderGitHubUser(data.q_userName)}
\nGitHub Repo: ${data.q_repo}

`;
}

export default generateMarkdown;