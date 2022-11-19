import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss'],
})
export class BankingComponent implements OnInit {
  private savings: number = 10

  private wallet: number = 50

  private user: string = 'Gabriel Rodrigues'

  constructor() {}

  ngOnInit(): void {}

  get getSavings(): number {
    return this.savings
  }

  get getWallet(): number {
    return this.wallet
  }

  get getUser(): string {
    return this.user
  }

  public setWithdrawn(value: string): number | undefined {
    const withdrawn = Number(value)

    if (isNaN(withdrawn) || this.savings < withdrawn) {
      return
    }

    this.savings -= withdrawn

    return (this.wallet += withdrawn)
  }

  public setDeposit(value: string): number | undefined {
    const deposit = Number(value)

    if (isNaN(deposit) || this.wallet < deposit) {
      return
    }
    this.wallet -= deposit
    return (this.savings += deposit)
  }
}
