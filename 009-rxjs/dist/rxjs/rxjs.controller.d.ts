import { RxjsService } from "./rxjs.service";
import { IParamText } from "./interfaces/text-param";
export declare class RxjsController {
    private rxjsService;
    constructor(rxjsService: RxjsService);
    repositories({ text, hub }: IParamText): Promise<any>;
}
