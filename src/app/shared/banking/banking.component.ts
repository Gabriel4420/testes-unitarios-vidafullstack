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

  private show: boolean = false

  private alert: boolean = false

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

  get getShow(): boolean {
    return this.show
  }

  get getAlert(): boolean {
    return this.alert
  }

  public setWithdrawn(value: string): number | undefined {
    const withdrawn = Number(value)

    if (isNaN(withdrawn) || this.savings < withdrawn) {
      return
    }

    this.savings -= withdrawn

    return (this.wallet += withdrawn)
  }

  public showSavings(): boolean {
    return (this.show = !this.show)
  }

  public setWallet(value: string): number | undefined {
    const walletValue = Number(value)

    if (isNaN(walletValue)) {
      return
    }

    return (this.wallet += walletValue)
  }

  public setDeposit(value: string): number | undefined {
    const deposit = Number(value)

    if (isNaN(deposit) || this.wallet < deposit) {
      this.alert = !this.alert
      setTimeout(() => (this.alert = false), 2000)
      return
    }

    this.wallet -= deposit
    return (this.savings += deposit)
  }
}
