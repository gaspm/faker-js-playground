import fs from 'fs';

export function generateJsonData(data, filename) {
    const directoryPath = './data';
    if (!fs.existsSync(directoryPath)) {
        // Create the directory
        fs.mkdirSync(directoryPath);
    }
    const jsonData = JSON.stringify(data, null, 2); // Convert data to JSON string with 2-space indentation
    fs.writeFileSync(`./data/${filename}.json`, jsonData, 'utf-8');
    console.log(`The file ${filename}.json was successfully generated in the "data" directory`);
    console.log(jsonData);
}