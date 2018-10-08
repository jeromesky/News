// import { Component } from '@angular/core';
// import {Injectable} from '@angular/core';


// @Injectable()
export class ParseComponent{
    
    public doJSON(object){
        var arr: any[] = [];

        for(let item in object){
            arr.push(object[item]);
        }

        return arr;
    }
    
}



//  public toPerson(data: string): Person {
//         let jsonData = JSON.parse(data);  

//         personData = new Person(jsonData.name, jsonData.surname, jsonData.birthdate);
//         return personData;
//     }