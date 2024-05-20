import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page'



describe('Login', () => {
    it('should login with valid credentials', async () => {
        console.log('login page opened');
        await LoginPage.open()
        console.log('login click');
        await LoginPage.login('damian@ionic.io', 'P@ssword75!')
    });

    it('Profile Page should be visible', async () => {
        await $('#profileBtn').click();
        expect($('#title')).toHaveText('Profile');
    });

    it('Volume should be 75', async () => {
        await browser.execute('document.getElementById("volumeRange").value = 75');
        (await $('#volumeRange')).click();
        const val = await $('#volumeRange').getValue();
        console.log(val);
        await $('#testBtn').click();
        expect(val).toEqual(75);
    });

});
