const save = (task) => {
    console.log(task);
    if (!localStorage.getItem('task_list')) {
        let task_list = []
        task_list = [...task_list, task]
        localStorage.setItem('task_list', JSON.stringify(task_list))
    } else {
        let task_list = JSON.parse(localStorage.getItem('task_list'))
        task_list = [...task_list, task]
        localStorage.setItem('task_list', JSON.stringify(task_list))
    }
}

const change = (id) => {
    console.log(id);
   //todo
}

const load = () => {
    if (localStorage.getItem('task_list')) {
        return JSON.parse(localStorage.getItem('task_list'))
    } else {
        return []
    }
}

const remove = (id) => {
    console.log(id);
    //todo
}

const LocalStorage = {
    save,
    load,
    remove
}

export default LocalStorage