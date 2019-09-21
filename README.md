# Step 5: LocalStorage Service

Chegamos a ultima etapa do desenvolvimento do nosso TodoApp.
Agora iremos atender o ultimo requisito presente em nossa user storie, e, para isso nesta etapa iremos desenvolver um serviço para salvar as tarefas no localstorage do navegador.

Existem diversas formas de persistir dados no navegador e uma das mais utilizadas quando falamos de softwares com a arquitetura REST é o localstorage. Por este motivo iremos aprender como utilizar essa ferramenta em nossos projetos frontend.

## LocalStorage and SessionStorage

Essas duas api´s presentes nos navegadores atuais são muito parecidas com os cookies em sua forma de funcionamento, isso quer dizer quem ambas armazenam os dados no formato chave => valor. Porém elas resolvem diversos problemas e limitações que os cookies carregam.

Estas duas formas de armazenamento de dados client-side não enviam dados ao servidor, o que indica que é de responsábilidade do desenvolvedor manipular e manter a consistência dos dados ali presentes.

A diferença entre essas duas ferramentas se da na forma em que persistem os dados. O localStorage armazena os dados por um tempo indefinido até que o aplicativo que fez a requisição de armazenamento exclua este dado de lá. Já a session storage armazena os dados durante uma sessão do navegador apenas. Isso significa que se quisermos guardar dados que permanecam quando o computador for desligado (ex: o status de logado em algum sistema) deve-se utilizar a localStorage, por outro lado se quisermos fazer algum cache de alguma informação pertinente a usabilidade do sistema pode-se utilizar a sessionStorage.

Contudo temos algumas limitações ao usar estas duas ferramentas. Como quase tudo na computação são trade-offs aqui não seria diferente. Apesar de serem duas otimas formas de armazenar dados elas são limitadas ambas armazenam apenas 25mb e alem disso elas somente armazenam dados no formato chave => valor onde esse valor é um texto.
Porém esta última limitação citada pode ser contornada.

### GetItem, SetItem, RemoveItem, Clear.
// todo write about this; 

## LocalStorage Service

Vamos começar a refatorar o código do ```step_4``` para atender ao nosso requisito funcional. Para isso vamos olhar para o trecho de código abaixo:

```javascript
        state = {
		list: []
	}

	saveTask = (task) => {
		const { list } = this.state
		const newTask = {
			id: id(),
			name: task,
			status: 0
		}
		this.setState({list: [ ...list, newTask]})
	}

	changeStatus = (id) => {
		const { list } = this.state

		const updateList = list.map(task => {
			if (task.id === id) 
				task.status = task.status + 1
			return task
		})
		this.setState({list: updateList})
	}

	deleteTask = (id) => {
		const { list } = this.state
		const updateList = list.filter(task => {
			return task.id !== id
		})
		this.setState({list: updateList})
	}

```

É aqui que encapsulamos toda a logica de manipulação do ```state``` de nosso aplicativo para que ele atenda nossos requisitos funcionais. Logo, nosso serviço deverá replicar esse comportamento do array ```list: [] ``` no localStorage. Porem iremos realizar algo um pouco mais sofisticado. Começamos criando o arquivo ```./services/LocalStorage.js```

Nossa primeira tarefa será refatorar a função ```saveTask```.

```javascript
/*
    função antiga
*/
saveTask = (task) => {
    const { list } = this.state
    const newTask = {
        id: id(),
        name: task,
        status: 0
    }
    this.setState({list: [ ...list, newTask]})
}
/*
    nova função
*/
saveTask = (task) => {
    if (task) {
        const newTask = {
            id: id(),
            name: task,
            status: 0
        }
        LocalStorage.save(newTask)
        this._loadData()
    } else {
        alert('oops! write something')
    }
    
}
```
Existem três pontos interessantes de se notar no código acima: 
### LocalStorage.save(task)
Aqui definimos a forma que iremos trabalhar com o nosso serviço, ou seja, queremos um objeto que contenha funções à serem executadas pelo nosso componente.

### this._loadData()
Logo após qualquer alteração no `state` tinhamos que fazer o updade desta informação. Este método realizará isso para nós e sua implementação será discutida posteriormente.

### if (task) {

Não haviamos feito nenhuma verificação se o input era vazio, logo, tarefas sem título podem ser adicionadas, o que não faze o menor sentido, jpa que tarefas vazias nçao podem ser concluidas. Agora isso foi corrigido.

Eis o código do serviço que irá salvar no localStorage

```javascript
const saveList = (list) => {
    localStorage.setItem('task_list', JSON.stringify(list))
}

const save = (task) => {
    if (!localStorage.getItem('task_list')) {
        let task_list = []
        task_list = [...task_list, task]
        saveList(task_list)
    } else {
        let task_list = JSON.parse(localStorage.getItem('task_list'))
        task_list = [...task_list, task]
        saveList(task_list)
    }
}
```

//write about this and other methods

## Fim da Jornada.



#### Refs
* [Client-Side storage](!https://mattwest.design/choosing-the-best-client-side-storage-technology-for-your-project)

* [Local Storage](!https://tableless.com.br/guia-f%C3%A1cil-sobre-usar-localstorage-com-javascript/)