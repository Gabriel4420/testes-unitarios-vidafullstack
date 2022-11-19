import { TestBed } from '@angular/core/testing'
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'

import { ListInvestimentsService } from './list-investiments.service'
import { HttpClient } from '@angular/common/http'
import { Investiments } from '../model/investiments'
import { MOCK_LIST } from './list-investiments.mock'

describe('ListInvestimentsService', () => {
  let service: ListInvestimentsService
  let httpTestingController: HttpTestingController
  let httpclient: HttpClient

  const URL =
    'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json'

  const mockList: Array<Investiments> = MOCK_LIST

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
    httpclient = TestBed.inject(HttpClient)
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(ListInvestimentsService)
  })

  afterEach(() => {
    httpTestingController.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('(U) should be list all investiments ', (done) => {
    service.list().subscribe((res: Array<Investiments>) => {
      expect(res[0].name).toEqual('Itaú')
      done()
    })

    const req = httpTestingController.expectOne(URL)
    req.flush(mockList)

    expect(req.request.method).toEqual('GET')
  })
})
