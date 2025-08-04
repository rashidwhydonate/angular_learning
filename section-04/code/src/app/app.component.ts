import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { InvestmentFormComponent } from './components/investment-form/investment-form.component';
import { InvestmentResultsComponent } from './components/investment-results/investment-results.component';
import { InvestmentResults } from './models/investment.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, InvestmentFormComponent, InvestmentResultsComponent]
})
export class AppComponent {

  resultsList: InvestmentResults[] = [];

  investmentResults(results: InvestmentResults[]){
    this.resultsList = results;
  }
}
