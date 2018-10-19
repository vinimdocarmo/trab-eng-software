const Entity = require("./entity");

class DAOEntity {
    constructor() {
        this.tableName = "entity";
    }

    create(name, description, type, project) {
        const entity = new Entity(name, description, type, project);
        if (entity.isValid() === false) throw new Error("can't save an invalid instance");
        return entity;
    }
}

module.exports = DAOEntity;