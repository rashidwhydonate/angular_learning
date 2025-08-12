import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<{title: string, request: string, id: string, status: string}>();
  detailsVisible = signal(false);

  onToggleDetails() {
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkAsCompleted() {
    this.data().status = 'closed'
  }
}
