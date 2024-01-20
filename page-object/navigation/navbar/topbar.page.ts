import{Locator,Page} from '@playwright/test';
import MainPage from '../../main-page';

/** Top navigation bar */
class TopNavBar extends MainPage{
    startTrialButton: Locator;
    getStartedButton: Locator;
    whatsNewToolTip: Locator;
    helpCenterButton: Locator;
    userProfileButton: Locator;

    constructor(page: Page){
        super(page);
        this.userProfileButton = this.page.locator('#menu-button-10');
    }

    /** 
     * User profile.
     */
    async goToUserProfile(): Promise<void>{
        await this.userProfileButton.click();
    }
     
}

export default TopNavBar;