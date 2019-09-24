# Step 4: Funcionalidades.

Agora que dividimos o app em componentes podemos escrever suas funcionalidades.

# Conceitos JS

### Spread Operator (...array)
Este operador permite expandir arrays ou objetos iteráveis, esta é uma funcionalidade muito interessante da especificação `es6` bem como as `arrow functions`.

```javascript
let numbers = [1,2,3,4];
console.log([numbers, ...[9,10,11]]);
// output: 1,2,3,4,9,10,11
```

No exemplo acima estamos expandindo o array `numbers` com o conteúdo do array `[9,10,11]`. Esta é a mesma maneira que estamos expandindo o array `list` para adcionar ao seu final uma nova terefa.
Para mais informações consulte as refêrencias.

### Map, Filter, Reduce
Diferente dos outros tópicos discussão deste tema é um pouco longa e vale muito a leitura mais aprofundada, por este motivo não irei fazê-la aqui para não alongar demais o artigo. Deixo nas referências links de artigos onde esta discussão é abordada de modo modo mais completo e com exemplos. 


## Listar tarefas

As tarefas ficam armazenadas no `state` de nosso componente principal, e, para listar as tarefas devemos apenas iterar sobre a lista de tarefas que lá estão.
```javascript
render () {
    // variável que armazena a lista de tarefas.
    const { list } = this.state
    
    //iterando sobre a lista de tarefas
    const todoTaskList = list.map(task => {
        // criando uma lista de tarefas para serem feitas;
        return (task.status === 0) 
            && (<TaskCard 
                    deleteTask={this.deleteTask} 
                    changeStatus={this.changeStatus} 
                    key={task.id} 
                    task={task} 
                />)
    })
    .
    .
    .
    return (
        .
        .
        .
        <div className="task--list-wrapper">
            <h1> Todo </h1>
            <div className="task--list">
                //mostrando a lista de tarefas;
                {todoTaskList}
            </div>
        </div>
        .
        .
        .
    );
}

```

Dentro da função `render` estamos pegando a lista de tarefas por meio da desestruturação de objetos (funcionalidade presente em es6) e utilizando da função map itera-se sobre a lista de tarefas selecionando apenas aquelas com o `status: 0`

Como o método `render` espera como retorno um `JSX` é ali que iremos colocar a variável `todoTaskList`. É importante lembrar que a esta variável é um componente que necessita que algumas propriedades sejam passadas a ele.

De modo análogo temos as listas de tarefas à serem feitas e a lista de tarefas que já foram feitas.
```javascript
const doingTaskList = list.map(task => {
    return (task.status === 1) 
        && (<TaskCard 
                deleteTask={this.deleteTask} 
                changeStatus={this.changeStatus} 
                key={task.id} 
                task={task} 
            />)
});
```
```javascript
const doneTaskList = list.map(task => {
    return (task.status === 2) 
        && (<TaskCard 
                deleteTask={this.deleteTask} 
                key={task.id} 
                task={task} 
            />)
});
```
## Salvar tarefas.
A função abaixo é responsável por salvar uma nova tarefa. É importante notar que todas a tarefas começam com o `status: 0` o que significa que elas estão marcadas como para fazer. Outro ponto interessante é a função `id()` está é uma função pertencente a uma biblioteca chamada `uuid` que tem como objetivo gerar ids diferentes/aleatórios, esta é uma biblioteca extremamente util, recomendo fortemente que olhem sua documentação.



```javascript
saveTask = (task) => {
    // variável que armazena a lista de tarefas.
    const { list } = this.state
    // obj contendo a nova tarefa.
    const newTask = {
        id: id(),
        name: task,
        status: 0
    }
    // atualizando o state com nova tarefa.
    this.setState({list: [ ...list, newTask]})
}
```

Outro ponto interessante é que estamos utilzando o conceito do `spread operators` vindo do es6 para adicionar uma nova tarefa no final de nossa lista de tarefas.



## Trocando o status

Utilizando o conceito ja explicado sobre `map function` vamos trocar o status de uma tarefa. Se lembrarmos dos status que haviamos devinido no começo do desenvolvimento pode-se observar que o status sempre é somado + 1, dessa forma ele trocará de coluna.

```javascript
changeStatus = (id) => {
    // variável que armazena a lista de tarefas.
    const { list } = this.state
    // faz-se uma varredura procurando pelo id da tarefa
    // soma-se + 1 no valor do seu status
    const updateList = list.map(task => {
        if (task.id === id) 
            task.status = task.status + 1
        return task
    })
    // atualiza o state com o novo status.
    this.setState({list: updateList})
}
```

## Deletando uma tarefa

Para deletar uma tarefa utilizamos o conceito já explicado acima de `filter function` do es6. De modo análogo aos outros métodos de manipulação do estado aqui percorre-se a lista de tarefas retornando uma nova lista contendo apenas os elementos que não são o elemento que deseja-se excluir.

```javascript
deleteTask = (id) => {
    // variável que armazena a lista de tarefas.
    const { list } = this.state
    // varre-se a lista de tarefa selecionando todos os
    //elementos com id diferente ao que queremos excluir
    const updateList = list.filter(task => {
        return task.id !== id
    })
    // atualiza o state sem o elemento que queremos remover.
    this.setState({list: updateList})
}

```

## Próximo passo.
Agora temos nosso aplicativo funcionando e conseguimos concluir 2 dos nossos requisitos funcionais, contudo, ainda falta um requisito: os dados estão somente salvos na memória, ou seja, se fecharmos o navegador ou realizarmos um refresh na pagina os dados serão perdidos. No próximo passo iremos constuir um serviço para garantir a permanencia de nossa lista de tarefas no navegador.

Vamos lá

    $ git checkout step_5


#### Refs

* [Spread Operator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator)

* [Map, Filter, Reduce](https://desenvolvimentoparaweb.com/javascript/map-filter-reduce-javascript/)

* [Map, Filter, Reduce II](https://medium.com/@programadriano/javascript-conhecendo-map-filter-e-reduce-ce072d8f0ec5)

* [UUID Wiki](https://pt.wikipedia.org/wiki/Identificador_%C3%BAnico_universal)

* [UUID Lib](https://www.npmjs.com/package/uuid)

#### Anteriormente
* [Step 0: Inicio da série](https://github.com/luandryl/mini-curso-react/tree/master)
* [Step 1: Criação do projeto](https://github.com/luandryl/mini-curso-react/tree/step_1)
* [Step 2: Construção do Layout](https://github.com/luandryl/mini-curso-react/tree/step_2)
* [Step 3: Componentização](https://github.com/luandryl/mini-curso-react/tree/step_3)