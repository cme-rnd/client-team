import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'user-form',
    templateUrl: 'user.component.html',
    styleUrls: ['user.component.css']
})
export class UserComponent implements OnInit {
    model: any = {};

    ngOnInit(): void {
    }

}
