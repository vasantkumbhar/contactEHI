export interface IContact {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    status: string;
}

export interface IStatus {
    name: string;
    value: string;
}

export class Contact{
    constructor(firstName: string, lastName: string, email: string, phoneNumber: string, status: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.status = status;    
    };
    
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    status: string;
}