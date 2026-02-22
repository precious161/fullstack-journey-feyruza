import * as fs from 'fs';
export function getDataFromFile(file) {
    const rawData = fs.readFileSync(file, "utf-8");
    const data = JSON.parse(rawData);
    return data;
}
//# sourceMappingURL=loader.js.map