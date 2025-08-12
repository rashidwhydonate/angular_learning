import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { TicketComponent } from './ticket/ticket.component';

@Component({
    selector: 'app-tickets',
    standalone: true,
    templateUrl: './tickets.component.html',
    styleUrl: './tickets.component.css',
    imports: [NewTicketComponent, TicketComponent]
})
export class TicketsComponent {
    tickets: {title: string, request: string, id: string, status: string}[] = [];

    onAdd(ticket: {title: string, request: string}){
        if(ticket) {
            const id: string = Date.now().toString();
            const updatedTicket = {...ticket, id, status: 'open'}
            this.tickets = [...this.tickets, updatedTicket]
        }
    }
}
