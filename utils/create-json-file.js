import fs from 'fs';

export function createJsonFile(data, filename) {

    const directoryPath = './mockup-data';
    const suffix = 'json';

    if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath);
    }

    const jsonData = JSON.stringify(data, null, 2);

    fs.writeFileSync(`${directoryPath}/${filename}.${suffix}`, jsonData, 'utf-8');

    console.log(`The file ${filename}.${suffix} was successfully created!`);

}
