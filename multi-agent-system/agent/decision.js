const BaseAgent = require('./baseAgent');

class DecisionAgent extends BaseAgent {
    constructor() {
        super("Decision");
    }

    async process(data) {
        return {
            action: "store_task",
            payload: data.parsed
        };
    }
}

module.exports = DecisionAgent;