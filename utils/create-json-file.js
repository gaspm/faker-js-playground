import fs from 'fs';

export function createJsonFile(data, filename) {
    const directoryPath = './mockup-data';
    if (!fs.existsSync(directoryPath)) {
        // Create the directory
        fs.mkdirSync(directoryPath);
    }
    const jsonData = JSON.stringify(data, null, 2); // Convert data to JSON string with 2-space indentation
    fs.writeFileSync(`${directoryPath}/${filename}.json`, jsonData, 'utf-8');
    console.log(`The file ${filename}.json was successfully created!`);
}