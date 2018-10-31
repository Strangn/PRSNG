export class User {
    Id: number;
    UserName: string;
    Password: string;
    FirstName: string;
    LastName: string;
    PhoneNumber: string;
    Email: string;
    IsReviewer: boolean;
    IsAdmin: boolean;
    IsActive: boolean;

    constructor()  {
        this.Id = 0;
        this.Password= "password";
        this.IsReviewer = false;
        this.IsAdmin = false;
    

    }



}