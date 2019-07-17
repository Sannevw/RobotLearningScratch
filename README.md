## Use
Best use is to make changes in the version of the master branch and then compile it by running `npm run build` in scratch-gui folder. 
After building, the website can be run from the build subfolder in the scratch-gui folder using the index file.

## Setup 
I run this on Windows 10, in Git Bash

Follow these steps (for more info see: [Scratch modification guide](https://scratch.mit.edu/discuss/topic/289503/?page=1))

1. Clone this repo to you local machine. 

`git clone https://github.com/Sannevw/RobotLearningScratch.git`

`cd scratch-gui`

`npm install`

`cd ..`

`cd scratch-vm`

`npm install`

`npm link`

`cd ..`

`cd scratch-gui`

`npm link scratch-vm`

`cd ..`

`cd scratch-blocks`

`npm run prepublish`

`cd ..`

`cd scratch-gui`

`npm run build`

`npm start`

Runing `npm start` from the scratch-gui folder will host the website locally to test.

Follow these instructions here to install from the beginning if anything is wrong: [Scratch modification guide](https://scratch.mit.edu/discuss/topic/289503/?page=1)
