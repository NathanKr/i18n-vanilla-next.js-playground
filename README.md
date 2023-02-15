<h2>Motivation</h2>
i18n on next.js as simiple as possible i.e. without using i18n packages

<h2>Design</h2>

<ul>
<li>
<h3>Translation engine</h3>
I am using simple ts files : en.ts and he.ts under /data/locales to handle the translated text . This is based on <a href='https://github.com/NathanKr/i18n-ts-vanilla-playground'>i18n-ts-vanilla-playground</a> check the readme there. All tanslated file text objects inherit ILang to insure that all languages has the same key</li>

<li>
<h3>Automatic locale detection</h3>
next.js <a href='https://nextjs.org/docs/advanced-features/i18n-routing#automatic-locale-detection'>automatic-locale-detection</a> does not seems relevant to me because in israel the browser locale does not indicate heb (at least on my browser), So i will give a language select option for the user which hebrew as default</li>
<li>
<h3>next.js configuration</h3>
You need to define the following in next.config.js to get locale from next.js router object 

```javascript

 i18n: {
    locales: ['en', 'he'],
    defaultLocale: 'he',
  }

```
</li>
<li><h3>next.js routing</h3>
I am using <a href='https://nextjs.org/docs/advanced-features/i18n-routing#sub-path-routing'>next.js sub path routing</a>
<ul>
<li>access the hebrew (default) version via /translated-page or /he/translated-page  </li>
<li>access the english version via /en/translated-page</li>
</ul>
</li>
</ul>

<h2>Points of interest</h2>
<ul>
<li>using the locale as part of the routing path is nice because you dont need to access it globally , thus no need to use store \ context</li>
</ul>


<h2>Open issues</h2>
<ul>
<li>How to persist the locale that the user has chosen</li>
</ul>