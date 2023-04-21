import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ResponseData } from 'src/app/core/models/common/response/response-data.response';
import { ParameterResponse } from 'src/app/core/models/utils/response/parameter.response';
import { GetParameterByIdUseCase } from 'src/app/core/usecase/utils/get-parameter-by-id.usecase';

@Component({
  selector: 'app-general-data',
  templateUrl: './general-data.component.html',
})
export class GeneralDataComponent implements OnInit {

  generalDataForm: FormGroup;

  productList: ParameterResponse[] = [];

  today: Date = new Date();

  constructor(
    private _formBuilder: FormBuilder,
    private _getParameterById: GetParameterByIdUseCase,
    ) {}

  ngOnInit(): void {
    this.initFormGeneralData();
    this.getProducts();
  }

 async getProducts() {
    try {
      const response: ResponseData<ParameterResponse[]> = await this._getParameterById.execute("1")
      this.productList = response.data;
    } catch (error) {
      console.log(error)
    }
  }

  initFormGeneralData() {
    this.generalDataForm = this._formBuilder.group({
      branch_office : [null],
      producto      : [null],
      guide_number  : [null],
      station       : [null],
      creation_date : [null],
      guide_date    : [null],
      origin        : [null],
      destination   : [null],
      manifiest     : [null],
      route         : [null],
      route_date    : [null]
    });
  }
}
