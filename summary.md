# Criação de um projeto ReactJS c/ Next.js

Para iniciar um projeto react com Next você pode utilizar o seguinte comando:
```json
npx create-next-app@latest projectName --use-npm
```

O ultimo parâmetro ele e opcional, pode criar sem ele se quiser.

Ele vai gerar toda a base do projeto e adicionar alguns pacotes como Eslint, Prettier, Tailwind, React-dom etc. Porém eu gosto de modificar algumas coisas principalmente o Eslint e o Prettier.

No caso eu uso o da [Rocketseat](https://github.com/Rocketseat/eslint-config-rocketseat)

## Config do Eslint da Rocketseat
Primeira coisa que devemos fazer e baixar as dependências do eslint da rocket, pode usar o comando abaixo para fazer isso.

```json
npm i -D eslint @rocketseat/eslint-config
```

Após instalar as dependências e necessário criar um arquivo chamado `.eslintrc.json` e inserir o código abaixo:
```json
{
  "extends": [
    "next/core-web-vitals", 
    "@rocketseat/eslint-config/react"
  ]
}
```

Após isso iremos instalar o plugin do Prettier para TailwindCSS
```json
npm i prettier-plugin-tailwindcss -D

//OBS O prettier ele ja vem instalado no package do eslint da rocket
```

Agora iremos criar um arquivo `prettier.config.js` e colocar o seguinte código.
```json
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
}

// import configs from plugin
```
<br>
É pronto agora ja podemos iniciar nossos projetos 🚀😎

<br>

# Conceitos

### Geração de rotas da pasta src/pages
Um conceito bem interessante do Next especificamente, e que cada arquivo ou pasta que estiverem presentes na `src/pages` irá moldar a url da nossa aplicação. Então se eu tenho uma pasta chamada 'teste1/teste/oi.tsx' a url irá ficar assim `domain/teste1/teste/oi` No Next não precisamos passar a extensão do arquivo.

Aqui so colocamos arquivos que realmente são paginas, caso queremos colocar um componente, nos criamos uma pasta no mesmo nível de pages e atribuímos o nome de `components`

### CSS usando o Tailwind 
O tailwind utiliza as classe para estilos do css convencional e há duas maneiras de utilizar.  
1 - Utilizar "" ou '' assim fazendo toda a estilização "inline"  
2 - Utilizar a crase, ficando uma estrutura parecida com essa classname={``}  

Uma dica muito útil e quando você precisar passar um valor em pixel em especifico basta passar apenas `[0px]` aonde o `0` seria o valor.


### Props
E uma maneira que usamos para receber valores, assim melhorando a forma que nos componentizamos as nossas coisas, o prop ele ele e inserido que nem uma variável que iremos utilizar em function do JS, porém a maneira que iremos exibir vai ser um pouco diferente.

```tsx
export default function Test(props: any) {
  return (
    <div>
      <span>{props.children}</span>
    </div>
  )
}
```

A propriedade children e utilizada para pegarmos tudo que está sendo recebida e utilizar aonde estiver chamando a propriedade.

