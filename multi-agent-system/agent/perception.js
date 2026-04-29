const BaseAgent = require('./baseAgent');

class PerceptionAgent extends BaseAgent {
    constructor() {
        super("Perception");
    }

    async process(task) {
        return {
            ...task,
            parsed: {
                type: "create_task",
                content: task.input
            }
        };
    }
}

module.exports = PerceptionAgent;