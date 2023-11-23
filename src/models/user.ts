export class User {

    // public constructor(init?: Partial<User>) {
    //     Object.assign(this, init);
    // }


    id: string;
    userName: string;
    normalizedUserName: string;
    email: string;
    normalizedEmail: string;
    emailConfirmed: boolean;
    passwordHash: string;
    securityStamp: string;
    concurrencyStamp: string;
    phoneNumber: string;
    phoneNumberConfirmed: string;
    twoFactorEnabled: boolean
    lockoutEnd: string;
    lockoutEnabled: boolean;
    accessFailedCount: number;
    name: string;
    firstName: string;
    lastName: string;
    saluation: string;
    gender: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
    isActive: string;
    address: string;
}