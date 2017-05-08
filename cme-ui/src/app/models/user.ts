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
    {firstName: 'Peter 2', lastName: 'Tran', userName: 'user1', password: 'user1'},
    {firstName: 'Peter 3', lastName: 'Tran', userName: 'user2', password: 'user2'},
    {firstName: 'Peter 4', lastName: 'Tran', userName: 'user3', password: 'user3'},
    {firstName: 'Peter 5', lastName: 'Tran', userName: 'user4', password: 'user4'},
    {firstName: 'Peter 6', lastName: 'Tran', userName: 'user5', password: 'user5'},
    {firstName: 'Peter 7', lastName: 'Tran', userName: 'user6', password: 'user6'},
    {firstName: 'Peter 8', lastName: 'Tran', userName: 'user7', password: 'user7'},
    {firstName: 'Peter 9', lastName: 'Tran', userName: 'user8', password: 'user8'},
    {firstName: 'Peter 10', lastName: 'Tran', userName: 'user9', password: 'user9'},
    {firstName: 'Peter 11', lastName: 'Tran', userName: 'user10', password: 'user10'},
    {firstName: 'Peter 12', lastName: 'Tran', userName: 'user11', password: 'user11'},
    {firstName: 'Peter 13', lastName: 'Tran', userName: 'user12', password: 'user12'},
];

