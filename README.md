
  
    
![Logo of the project](https://cdn-images-1.medium.com/max/1600/1*nbJ41jD1-r2Oe6FsLjKaOg.png)      
      
# NGIR &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)      
> Additional information or tag line      
      
A brief description of your project, what it is used for.      
      
## Installing / Getting started      
      
Install Nodejs v6+      
  then run below commands:    
```shell      
npm install -g yarn    
yarn install      
ng serve      
```      
  open your browser on http://localhost:4200/    
.      
      
## Developing        
### Building        
  Production build:    
```shell      
npm run build    
```      
 SSR build:    
```shell      
npm run build:ssr    
```      
 AOT build:    
```shell      
npm run build:prerender    
```       
      
### Deploying / Publishing      
The build project will be in **dist/** directory.  
      
## Versioning      
      
We can maybe use [SemVer](http://semver.org/) for versioning. For the versions available, see the [link to tags on this repository](/tags).      

1.  Make changes
2.  Commit those changes
3.  Make sure Travis turns green
4.  Bump version in  `package.json`
5.  `npm run version`
6.  Commit  `package.json`  and  `CHANGELOG.md`  files
7.  Tag
8.  Push
  
## Documentation      
      
 Building project documentation from DOCStrings:    
```shell      
npm run compodoc    
```   
then serve the **documentation/** directory.  
      
## Configuration      
      
Here you should write what are all of the configurations a user can enter when      
using the project.      
      
## Tests      
      
Describe and show how to run the tests with code examples.      
Explain what these tests test and why.      
      
```shell      
Give an example      
```      
      
## Style guide      
  Based on Angular offcial Style guide:  
https://angular.io/guide/styleguide  
       
## Licensing      
      
State what the license is and how to find the text version of the license.
