import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { calculateInvestmentResults } from '../../utils/investment.utils';
import { InvestmentResults } from '../../models/investment.model';

@Component({
  selector: 'app-investment-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './investment-form.component.html',
  styleUrl: './investment-form.component.css'
})
export class InvestmentFormComponent {
  investmentResults: InvestmentResults[] = [];
  @Output() notifyResults = new EventEmitter<InvestmentResults[]>()

  calculateInvestment(form: NgForm){
    const { initialInvestment, annualInvestment, expectedReturn, duration } = form.value;
    this.investmentResults = calculateInvestmentResults(initialInvestment, annualInvestment, expectedReturn, duration);

    this.notifyResults.emit(this.investmentResults)
  }
}
