import { InjectionToken } from "@angular/core";
import { StubPreapprovalApiService } from "./stub-preapproval-api.service";

export const IPreapprovalApiServiceProvider = new InjectionToken(
    "IPreapprovalApiService",
    { providedIn: "root", factory: () => new StubPreapprovalApiService() }
);
