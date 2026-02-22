import * as fs from 'fs';
import type {DataPackage} from '../types.js'

export function getDataFromFile(file: string): DataPackage{
   const rawData=fs.readFileSync(file,"utf-8")

   const data=JSON.parse(rawData) as DataPackage;
   return data;
}

