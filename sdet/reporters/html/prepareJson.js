const osControl = require('os');
const fsControl = require('fs');

const pathFileNameChrome = 'reports/Chrome.json';
// const pathFileNameFirefox = 'reports/Firefox.json';
const jsonChrome = require(`../../${pathFileNameChrome}`);
// const jsonFirefox = require(`../../${pathFileNameFirefox}`);
const browserMetadata = require('./metadata.json');

let osName = osControl.platform();
const osRelease = osControl.release();

if (osName === 'darwin') {
    osName = 'osx';
}
const platformData = {
    name: osName,
    version: osRelease
};

browserMetadata.metadataChrome.platform = platformData;
// browserMetadata.metadataFirefox.platform = platformData;

function prepareJson() {
    // eslint-disable-next-line no-restricted-syntax
    for (const index of jsonChrome) {
        index.metadata = browserMetadata.metadataChrome;
    }
    // eslint-disable-next-line no-restricted-syntax
    // for (const index of jsonFirefox) {
    //     index.metadata = browserMetadata.metadataFirefox;
    // }
    // eslint-disable-next-line consistent-return
    fsControl.writeFile(pathFileNameChrome, JSON.stringify(jsonChrome, null, 2), 'utf-8', (err) => {
        if (err) {
            // eslint-disable-next-line no-console
            return console.log(err);
        }
    });
    // eslint-disable-next-line consistent-return
    // fsControl.writeFile(pathFileNameFirefox, JSON.stringify(jsonFirefox, null, 2), 'utf-8', (err) => {
    //     if (err) {
    //         return console.log(err);
    //     }
    // });
}

prepareJson();
