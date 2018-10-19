class Entity {
    constructor(name, description, type, project) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.project = project;
    }

    isValid() {
        if (!this.name || !this.project || !["internal", "external"].includes(this.type)) {
            return false;
        }

        return true;
    }
}

module.exports = Entity;