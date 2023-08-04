# Criação de um projeto ReactJS c/ Next.js

Para iniciar um projeto react com Next você pode utilizar o seguinte comando:
```
npx create-next-app@latest projectName --use-npm
```

O ultimo parâmetro ele e opcional, pode criar sem ele se quiser.

Ele vai gerar toda a base do projeto e adicionar alguns pacotes como Eslint, Prettier, Tailwind, React-dom etc. Porém eu gosto de modificar algumas coisas principalmente o Eslint e o Prettier.

No caso eu uso o da [Rocketseat](https://github.com/Rocketseat/eslint-config-rocketseat)

## Config do Eslint da Rocketseat
Primeira coisa que devemos fazer e baixar as dependências do eslint da rocket, pode usar o comando abaixo para fazer isso.

``` 
npm i -D eslint @rocketseat/eslint-config
```

Após instalar as dependências e necessário criar um arquivo chamado `.eslintrc. ` e inserir o código abaixo:
``` js
{
  "extends": [
    "next/core-web-vitals", 
    "@rocketseat/eslint-config/react"
  ]
}
```

Após isso iremos instalar o plugin do Prettier para TailwindCSS
``` 
npm i prettier-plugin-tailwindcss -D

//OBS O prettier ele ja vem instalado no package do eslint da rocket
```

Agora iremos criar um arquivo `prettier.config.js` e colocar o seguinte código.
``` js
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
}

// import configs from plugin
```
<br>
É pronto agora ja podemos iniciar nossos projetos 🚀😎

<br>
