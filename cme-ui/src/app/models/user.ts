/**
 * Created by HieuNT48 on 5/3/2017.
 */
export class User {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
}

export class UserWrapper {
    statusCode: string;
    statusMessage: string;
    data: User[];
}