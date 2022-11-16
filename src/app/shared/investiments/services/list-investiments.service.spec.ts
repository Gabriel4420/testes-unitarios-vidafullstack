import { TestBed } from '@angular/core/testing'
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'

import { ListInvestimentsService } from './list-investiments.service'
import { HttpClient } from '@angular/common/http'

describe('ListInvestimentsService', () => {
  let service: ListInvestimentsService
  let httpTestingController: HttpTestingController
  let httpclient: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
    httpclient = TestBed.inject(HttpClient)
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(ListInvestimentsService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
