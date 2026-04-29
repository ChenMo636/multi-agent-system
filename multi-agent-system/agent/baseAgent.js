class BaseAgent {
    constructor(name) {
        this.name = name;
    }

    async handle(input) {
        console.log(`🤖 [${this.name}] 处理输入:`, input);
        return this.process(input);
    }

    async process(input) {
        throw new Error("必须实现 process 方法");
    }
}

module.exports = BaseAgent;