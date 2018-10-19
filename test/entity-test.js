const chai = require('chai');
const expect = chai.expect;

const Entity = require('../src/entity');
const Project = require('../src/project');

describe("Entity", () => {
    it("should create a new Entity when attributes are valid", () => {
        const project = new Project("My project");
        const name = "My entity";
        const description = "This entity represents an entity";
        const type = "internal";

        const entity = new Entity(name, description, type, project);

        expect(entity).to.be.instanceOf(Entity);
        expect(entity.name).to.eq(name);
        expect(entity.description).to.eq(description);
        expect(entity.type).to.eq(type);
        expect(entity.project).to.eq(project);
    });

    describe("#isValid", () => {
        it("should be valid with valid attributes", () => {
            const project = new Project("My project");
            const name = "My entity";
            const description = "This entity represents an entity";
            const type = "internal";
    
            const entity = new Entity(name, description, type, project);

            expect(entity.isValid()).to.be.true;
        });

        it("should be valid when description is blank", () => {
            const project = new Project("My project");
            const name = "My entity";
            const type = "internal";
    
            const entity = new Entity(name, null, type, project);

            expect(entity.isValid()).to.be.true;
        });

        it("should be invalid when name is missing", () => {
            const project = new Project("My project");
            const description = "My entity";
            const type = "internal";
    
            const entity = new Entity(null, description, type, project);

            expect(entity.isValid()).to.be.false;
        });

        it("should be invalid when project is missing", () => {
            const name = "My entity";
            const type = "internal";
    
            const entity = new Entity(name, null, type, null);

            expect(entity.isValid()).to.be.false;
        });

        it("should be invalid when type is not in ['internal', 'external']", () => {
            const project = new Project("My project");
            const name = "My entity";
            const type = "other";
    
            const entity = new Entity(name, null, type, project);

            expect(entity.isValid()).to.be.false;
        });
    });
});