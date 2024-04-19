export interface iEmployee {
    id : string;
    firstName : string;
    lastName : string;
    email : string;
}

// export const employeeData : iEmployee[] = [
//     {
//         id: new Date().toJSON().toString(),
//         firstName : "Prajakta",
//         lastName : "Shikare",
//         email : "prajakta@gmail.com"
//     }
// ]

export enum PageEnum {
    
    list,
    add,
    edit
}