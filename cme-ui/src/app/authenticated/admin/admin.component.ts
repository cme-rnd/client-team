import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AdminService} from '../../services/admin.service';
import {User} from '../../models/user';

@Component({
    selector: 'admin-form',
    templateUrl: 'admin.component.html',
    styleUrls: ['admin.component.css']
})
export class AdminComponent implements OnInit {
    model: any = {};

    private UserList: User[];

    constructor(private router: Router,
                private adminService: AdminService) {
    }

    ngOnInit(): void {
        this.showListUserInfo();
    }

    private showListUserInfo() {
        this.adminService.getListUser().subscribe(response => {
            if (response.statusCode === 'success') {
                this.UserList = response.data;
            }
        });
    }
}
