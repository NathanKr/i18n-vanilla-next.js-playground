<h2>Motivation</h2>
i18n on next.js as simiple as possible i.e. without using i18n packages


<h2>Spec : What does i18n package need to provide in my opinion</h2>
<ul>
<li>Mark the dom element that need translation and its key</li>
<li>Change the desired language (locale) and persist on client machine</li>
<li>Files per language with key value pairs</li>
<li>Get error if a key is missing from specific language file</li>
<li>A function that given the key and locale return the value</li>
</ul>


<h2>Design</h2>
This design satisfy the above spec
<ul>
<li>
<h3>Translation engine</h3>
I am using simple ts files : en.ts and he.ts under /data/locales to handle the translated text . This is based on <a href='https://github.com/NathanKr/i18n-ts-vanilla-playground'>i18n-ts-vanilla-playground</a> check the readme there. All tanslated file text objects inherit ILang to insure that all languages has the same keys</li>

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

<li><h3>use localstorage</h3>
 <ui>
 <li>Force hebrew as default language when the app loads</li>
 <li>save locale on change</li>
 </ui>
</li>
</ul>
</li>

<h2>Implementation</h2>

<h3>ChangeLanguage component</h3>
implement the language change and persitance to local storage

<h3>TopMenu component</h3>
implement the the routing per locale

<h3>_app.tsx</h3>
both ChangeLanguage and TopMenu are used here.

<h3>get translated text</h3>

```ts
  const { locale } = useRouter();
  const curLang: ILang = getLangObject(locale as Lang);

  ...

  <h1>{curLang.titleColorPage}</h1>
```



<h2>Points of interest</h2>
<ul>
<li>using the locale as part of the routing path is nice because you dont need to access it globally , thus no need to use store \ context</li>
<li>I am able to come with simple design that does what i need without need of using i18n packages such as 
</ul>


<h2>Open issues</h2>
<ul>
<li>changing the locale to he i get text that seems to be bigger - why</li>
<li>I am using router.push in ChangeLanguage otherwise the locale is not saved in router history even tough locale is used in Link. this is not clear</li>
</ul>
