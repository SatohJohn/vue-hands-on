let nextId = 1;

class Task {
    constructor(name) {
        this.name = name;
        this.id = nextId++;
    }

    equals(task) {
        return this.id === task.id;
    }
}

module.exports = {
    Task
}