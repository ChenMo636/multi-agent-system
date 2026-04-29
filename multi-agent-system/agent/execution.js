const BaseAgent = require('./baseAgent');

class ExecutionAgent extends BaseAgent {
    constructor() {
        super("Execution");
        this.database = [];
    }

    async process(decision) {
        if (decision.action === "store_task") {
            this.database.push(decision.payload);
            return {
                status: "stored",
                data: decision.payload
            };
        }
    }
}

module.exports = ExecutionAgent;