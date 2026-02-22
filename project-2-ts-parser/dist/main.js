import { getDataFromFile } from "./lib/loader.js";
import { ValidateData } from "./lib/validator.js";
import { calculateMetrics } from "./lib/metrics.js";
const filePath = process.argv[2];
if (!filePath) {
    console.log("Please enter file name!");
    process.exit(1);
}
try {
    const fileData = getDataFromFile(filePath);
    const metrics = calculateMetrics(fileData);
    const error = ValidateData(fileData);
    if (error.length === 0) {
        console.log(`Data is Valid!`);
        console.table(metrics);
    }
    else {
        for (let e of error) {
            console.log(e);
        }
    }
}
catch (e) {
    if (e instanceof Error) {
        console.log(e.message);
    }
}
//# sourceMappingURL=main.js.map