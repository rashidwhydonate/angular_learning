import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-new-ticket',
    standalone: true,
    templateUrl: './new-ticket.component.html',
    styleUrl: './new-ticket.component.css',
    imports: [FormsModule, ButtonComponent, ControlComponent]
})
export class NewTicketComponent {
    @Output() add = new EventEmitter<{title: string, request: string}>()

    title: string = "";
    request: string = "";

    onSubmit() {
        this.add.emit({title: this.title, request: this.request});
        this.title = "";
        this.request = "";
    }
}
