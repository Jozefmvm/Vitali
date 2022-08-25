class HeaderPlaywright {

    headerPlaywrightLink = '.navbar__title.text--truncate';
    headerDocsLink = '//*[@class="navbar__item navbar__link" and @href="/docs/intro"]';
    headerDocsLinkActive = '//*[@class="navbar__item navbar__link navbar__link--active" and @href="/docs/intro"]';
    headerApiLink = '//*[@class="navbar__item navbar__link" and @href="/docs/api/class-playwright"]';
    headerApiLinkActive = '//*[@class="navbar__item navbar__link navbar__link--active" and @href="/docs/api/class-playwright"]';
    headerCommunityLink ='//*[@class="navbar__item navbar__link" and @href="/community/welcome"]';
    headerCommunityLinkActive = '//*[@class="navbar__item navbar__link navbar__link--active" and @href="/community/welcome"]';
    majorPageText = '//*[@class="theme-doc-markdown markdown"]/h2';

    subtitlesCommunityPage = ['Ambassadors','GitHub','Contributing','Community Slack','Stack Overflow','YouTube','News'];
}


module.exports = { HeaderPlaywright };
