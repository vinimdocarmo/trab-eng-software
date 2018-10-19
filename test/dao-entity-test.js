const chai = require('chai');
const expect = chai.expect;

const DAOEntity = require('../src/dao-entity');
const Entity = require('../src/entity');
const Project = require('../src/project');

describe("DAOEntity", () => {
    let daoEntity;

    before(() => daoEntity = new DAOEntity());

    it("shouls have 'entity' as tableName", () => {
        expect(daoEntity.tableName).to.eq("entity");
    });

    it("should create a new Entity when attributes are valid", () => {
        const project = new Project("My project");
        const name = "My entity";
        const description = "This entity represente an entity";
        const type = "internal";

        const entity = daoEntity.create(name, description, type, project);

        expect(entity).to.be.instanceOf(Entity);
    });

    it("should throw an error when trying to create an invlid entity", () => {
        const project = new Project("My project");
        const description = "This entity represents an entity";
        const type = "not a type";

        try {
            daoEntity.create(null, description, type, project);
            throw new Error("should had thrown a validation error");
        } catch (error) {
            expect(error).to.be.instanceOf(Error);
            expect(error.message).to.eq("can't save an invalid instance");
        }
    });
});