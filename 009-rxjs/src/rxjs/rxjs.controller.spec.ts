import { Test, TestingModule } from "@nestjs/testing";
import { RxjsController } from "./rxjs.controller";

describe("RxjsController", () => {
  let controller: RxjsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RxjsController],
    }).compile();

    controller = module.get<RxjsController>(RxjsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
