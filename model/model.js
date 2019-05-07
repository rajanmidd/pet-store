'use strict';

const fs= require("fs");

class ModelService {
  
    readFile(filePath){
        try {
            let owners=fs.readFileSync(filePath,"utf8");
            return {err: false,errMsg:null,result:owners};
        } catch(err){
            return {err: true,errMsg:err.toString(), result:null};
        }
    }

    writeFile(filePath,data){
        try {
            fs.writeFileSync(filePath, JSON.stringify(data),  'utf-8');
            return {err: false,errMsg:null,result:null};
        } catch(err){
            return {err: true,errMsg:err.toString(), result:null};
        }
    }
}
module.exports = ModelService;