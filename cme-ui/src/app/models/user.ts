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

export const CreateUserList: User[] = [
    {firstName: 'Hieu', lastName: 'Nguyen', userName: 'admin', password: 'admin'},
    {firstName: 'Peter 1', lastName: 'Tran', userName: 'user', password: 'user'},
    {firstName: 'Peter 2', lastName: 'Tran', userName: 'user', password: 'user'},
    {firstName: 'Peter 3', lastName: 'Tran', userName: 'user', password: 'user'},
    {firstName: 'Peter 4', lastName: 'Tran', userName: 'user', password: 'user'},
    {firstName: 'Peter 5', lastName: 'Tran', userName: 'user', password: 'user'},
    {firstName: 'Peter 6', lastName: 'Tran', userName: 'user', password: 'user'},
    {firstName: 'Peter 7', lastName: 'Tran', userName: 'user', password: 'user'},
    {firstName: 'Peter 8', lastName: 'Tran', userName: 'user', password: 'user'},
    {firstName: 'Peter 9', lastName: 'Tran', userName: 'user', password: 'user'},
    {firstName: 'Peter 10', lastName: 'Tran', userName: 'user', password: 'user'},
    {firstName: 'Peter 11', lastName: 'Tran', userName: 'user', password: 'user'},
    {firstName: 'Peter 12', lastName: 'Tran', userName: 'user', password: 'user'},
    {firstName: 'Peter 13', lastName: 'Tran', userName: 'user', password: 'user'},
];

