import projectData from './project-data';
//Testing to import starting project straight away
//import defaultProject from './Default_Project/project.json';

/* eslint-disable import/no-unresolved */
import popWav from '!arraybuffer-loader!./83a9787d4cb6f3b7632b4ddfebf74367.wav';
import meowWav from '!arraybuffer-loader!./83c36d806dc92327b9e7049a565c6bff.wav';

import backdrop from '!raw-loader!./Living-Room-Scene_001.svg';
import costume1 from '!raw-loader!./robot-svgrepo-com.svg';
import costume2 from '!raw-loader!./pepper.png';
/* eslint-enable import/no-unresolved */

const defaultProject = translator => {
    let _TextEncoder;
    if (typeof TextEncoder === 'undefined') {
        _TextEncoder = require('text-encoding').TextEncoder;
    } else {
        // global TextEncoder
        _TextEncoder = TextEncoder;
    }
    const encoder = new _TextEncoder();

    const projectJson = projectData(translator);
    return [{
        id: 0,
        assetType: 'Project',
        dataFormat: 'JSON',
        data: JSON.stringify(projectJson)
    }, {
        id: '83a9787d4cb6f3b7632b4ddfebf74367',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(popWav)
    }, {
        id: '83c36d806dc92327b9e7049a565c6bff',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(meowWav)
    }, {
        id: 'cd21514d0531fdffb22204e0ec5ed84a',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(backdrop)
    }, {
        id: '09dc888b0b7df19f70d81588ae73420e',
	assetType: 'ImageVector',
        dataFormat: 'PNG',
        data: encoder.encode(costume2)
    }, {
        id: '3696356a03a8d938318876a593572843',
	assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(costume1)
    }];
};

export default defaultProject;
