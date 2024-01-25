import { Page } from "@playwright/test";

import UserSiginPage from "./sigin/user-signin.page";
import LandingModalePage from "./landing/landing.page";
export interface ConnectionPages {
    userSigninPage: UserSiginPage,
    landingModalePage: LandingModalePage
}

export default(page: Page): ConnectionPages =>({
    userSigninPage: new UserSiginPage(page),
    landingModalePage: new LandingModalePage(page),
})