export class Contact {
    name: string;
    surname: string;
    email: string;
    photo: string;
    description: string;

    constructor(obj: any) {
        this.name = obj.name || '';
        this.surname = obj.surname || '';
        this.email = obj.email || '';
        this.photo = obj.photo || '';
        this.description = obj.description || '';
    }
}