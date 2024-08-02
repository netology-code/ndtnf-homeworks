import { Controller, Get, Query } from "@nestjs/common";
import { RxjsService } from "./rxjs.service";

@Controller("rxjs")
export class RxjsController {
  constructor(private rxjsService: RxjsService) {}

  @Get('repositories')
  async getRepositories(@Query('q') query: string): Promise<any> {
    return this.rxjsService.searchRepositories(query);
  }
  
}
