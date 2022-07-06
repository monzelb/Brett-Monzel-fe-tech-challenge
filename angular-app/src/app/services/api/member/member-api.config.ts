import { InjectionToken } from "@angular/core";
import { StubMemberApiService } from "./stub-member-api.service";

export const IMemberApiServiceProvider = new InjectionToken(
    "IMemberApiService",
    { providedIn: "root", factory: () => new StubMemberApiService() }
);
