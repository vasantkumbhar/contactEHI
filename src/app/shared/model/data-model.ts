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