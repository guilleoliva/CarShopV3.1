﻿import { Component, OnInit } from '@angular/core';

import { AlertService } from '../_services/services';

@Component({
    moduleId: this.module.id,
    selector: 'alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent {
    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
}
