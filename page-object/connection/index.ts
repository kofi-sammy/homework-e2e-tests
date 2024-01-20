import { Page } from "@playwright/test";

import UserSiginPage from "./sigin/user-signin.page";

export interface ConnectionPages {
    userSigninPage: UserSiginPage,
}

export default(page: Page): ConnectionPages =>({
    userSigninPage: new UserSiginPage(page),
})