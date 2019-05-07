'use strict';

const fs= require("fs");
const fspath = require('path');
const _ = require("underscore");

let Model = require('../model/model');
let model = new Model();

class OwnerService {
  
    getOwners(){
        try {
            let data=model.readFile(fspath.join(__dirname, '../datastore/ownerDetails.json'));
            if(data.err === false){
                let result=JSON.parse(data.result);
                return result;
            } else{
                return {"err":data.errMsg};
            }            
        } catch(err){
            return {"err":err.toString()};
        }            
    }

    getOwnerDetails(ownerId){
        try {                
            let ownerData=model.readFile(fspath.join(__dirname, '../datastore/ownerDetails.json'));
            if(ownerData.err === false){
                let petsData=model.readFile(fspath.join(__dirname, '../datastore/pets.json'));
                if(petsData.err === false){
                    let ownerResult=JSON.parse(ownerData.result);
                    let petResult=JSON.parse(petsData.result);
                    let index=_.findIndex(ownerResult,{id:ownerId});
                    let findPets= _.filter(petResult, function(obj) {
                        return (obj.owner==ownerId);
                    });
                    if(index >=0){
                        const ownerDetail=ownerResult[index];
                        ownerDetail.pets=findPets;             
                        return ownerDetail;
                    } else{
                        return {"err":"No data found"};
                    }
                } else{
                    return {"err":petsData.errMsg};
                }
            } else {
                return {"err":ownerData.errMsg};
            }                
        } catch(err){
            return {"err":err.toString()};
        }
    }

    addPet(data){
        try {                
            let petsData=model.readFile(fspath.join(__dirname, '../datastore/pets.json'));     
            if(petsData.err === false){
                let petResult=JSON.parse(petsData.result);
                let petObj={};
                petObj.id=parseInt(petResult.length)+1;
                petObj.name=data.name,
                petObj.age=data.age,
                petObj.colour=data.colour,
                petObj.breed=data.breed;
                petObj.owner=data.owner;
                petResult.push(petObj);
                fs.writeFileSync(fspath.join(__dirname, '../datastore/pets.json'), JSON.stringify(petResult),  'utf-8');
                return petObj;
            } else {
                return {"err":petsData.errMsg};
            }          
            
            
        } catch(err){
            return {"err":err.toString()};
        }
    }

    editPet(petId){
        try {                
            let petsData=model.readFile(fspath.join(__dirname, '../datastore/pets.json'));
            if(petsData.err === false){
                let ownerData=model.readFile(fspath.join(__dirname, '../datastore/ownerDetails.json'));
                if(ownerData.err === false){
                    let petResult=JSON.parse(petsData.result); 
                    let petIndex=_.findIndex(petResult,{id:petId});
                    if(petIndex >= 0){
                        const petDetail=petResult[petIndex];                        
                        let ownerResult=JSON.parse(ownerData.result);  
                        let ownerIndex=_.findIndex(ownerResult,{id:petDetail.owner});
                        let ownerDeatil=ownerResult[ownerIndex];
                        petDetail.owner=ownerDeatil;
                        return petDetail;   
                    } else{
                        return {"err":"No data found"};
                    }   
                } else{
                    return {"err":ownerData.errMsg};
                }
            } else{
                return {"err":petsData.errMsg};
            }            
        } catch(err){
            return {"err":err.toString()};
        }
    }
}
module.exports = OwnerService;