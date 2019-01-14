```js
const locales = [
  {
    text: 'English',
    id: 'en-US'
  },
  {
    text: 'Português',
    id: 'pt-BR'
  },
  {
    text: 'Español',
    id: 'es-AR'
  }
]

const localeSelected = {
  text: 'English',
  id: 'pt-BR'
}
;<div>
  <div className="dib">
    <LanguageButton
      locales={locales}
      localeSelected={localeSelected}
      className="hover-c-red"
      onClick={locale => console.log(locale)}
    />
  </div>
</div>
```
