
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

### Componente usando eventos
Para usarmos um componente com evento e relativamente bem simples, basta apenas passar qual o evento que você quer que acione, por exemplo on click e fazer uma chamada de função por exemplo:
```tsx
export default function Event() {
  let count = 0

  function increment() {
    console.log(count++)
  }

  return (
    <button onClick={increment}>
      Clique aqui
    </button>
  )
}
```
Nesse caso em especifico todo vez que o botão sofrer a ação de um click irá rodar a função 