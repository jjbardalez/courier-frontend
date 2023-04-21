
import { ResponseData } from "../../models/common/response/response-data.response";
import { ParameterResponse } from "../../models/utils/response/parameter.response";

export abstract class UtilsRepository {

    abstract getParameterById(id: string): Promise<ResponseData<ParameterResponse[]>>

}