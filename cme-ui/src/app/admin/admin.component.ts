import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'admin-form',
    templateUrl: 'admin.component.html',
    styleUrls: ['admin.component.css']
})
export class AdminComponent implements OnInit {
    model: any = {};
    ngOnInit(): void {
    }
}
