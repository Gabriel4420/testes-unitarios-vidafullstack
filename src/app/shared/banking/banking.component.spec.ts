import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ListComponent } from '../investiments/components/list/list.component'

import { BankingComponent } from './banking.component'

describe('BankingComponent', () => {
  let component: BankingComponent
  let fixture: ComponentFixture<BankingComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankingComponent, ListComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(BankingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('(U) getSavings(): should savings have to be value 10', () => {
    expect(component.getSavings).toBe(10)
  })

  it('(U) getWallet(): should getWallet have to be value 50', () => {
    expect(component.getWallet).toBe(50)
  })

  it('(U) setWithdrawn(): should transfer savings from wallet', () => {
    component.setWithdrawn('10')
    expect(component.getSavings).toEqual(0)
    expect(component.getWallet).toEqual(60)
  })

  it('(U) setDeposit(): should transfer wallet from savings', () => {
    component.setDeposit('50')
    expect(component.getWallet).toEqual(0)
    expect(component.getSavings).toEqual(60)
  })

  it('(U) setWithdrawn(): should not transfer savings if value is diferent of number_string or savings < value ', () => {
    expect(component.setWithdrawn('string')).not.toBeTruthy()
    expect(component.setWithdrawn('100')).not.toBeTruthy()
    expect(component.getSavings).toEqual(10)
    expect(component.getWallet).toEqual(50)
  })

  it('(U) setDeposit(): should not transfer deposit if value is diferent of number_string or wallet < value ', () => {
    expect(component.setDeposit('string')).not.toBeTruthy()
    expect(component.setDeposit('100')).not.toBeTruthy()
    expect(component.getSavings).toEqual(10)
    expect(component.getWallet).toEqual(50)
  })

  it('(I) setDeposit(): should transfer wallet from savings', () => {
    let el = fixture.debugElement.nativeElement
    el.querySelector('#input-deposit').value = '10'
    el.querySelector('#deposit').click()

    fixture.detectChanges()

    expect(el.querySelector('#getSavings').textContent).toEqual('20')
    expect(component.getWallet).toEqual(40)
  })

  it('(I) setWithdrawn(): should transfer savings from wallet', () => {
    let el = fixture.debugElement.nativeElement
    el.querySelector('#input-withdrawn').value = '10'
    el.querySelector('#withdrawn').click()

    fixture.detectChanges()

    expect(el.querySelector('#getWallet').textContent).toEqual('60')
  })
})
