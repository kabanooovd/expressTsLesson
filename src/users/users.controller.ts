import { NextFunction, Request, Response } from "express";
import { BaseContrller } from "../common/base.controller";
import { LoggerService } from "../logger/logger";

export class UsersController extends BaseContrller {
	constructor(logger: LoggerService) {
		super(logger);
		this.bindRoutes([
			{ path: "/login", method: "post", foo: this.login },
			{ path: "/register", method: "post", foo: this.register },
		]);
	}

	login(req: Request, res: Response, next: NextFunction) {
		this.ok(res, "Congrats, you've been logged in... ");
	}

	register(req: Request, res: Response, next: NextFunction) {
		this.ok(res, "Congrats, you've been Registrated... ");
    }
}
