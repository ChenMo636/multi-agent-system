const { TaskQueue } = require('./taskQueue');
const PerceptionAgent = require('./agent/perception');
const DecisionAgent = require('./agent/decision');
const ExecutionAgent = require('./agent/execution');

const queue = new TaskQueue();

// 初始化 Agent
const agents = {
    perception: new PerceptionAgent(),
    decision: new DecisionAgent(),
    execution: new ExecutionAgent()
};

// 模拟任务输入
queue.addTask({
    id: 1,
    input: "用户创建一个新任务：完成作业"
});

// 调度循环
async function run() {
    while (true) {
        const task = queue.getNextTask();
        if (!task) continue;

        console.log("\n🚀 新任务:", task);

        // 1. 感知
        const perception = await agents.perception.handle(task);

        // 2. 决策
        const decision = await agents.decision.handle(perception);

        // 3. 执行
        const result = await agents.execution.handle(decision);

        console.log("✅ 最终结果:", result);
    }
}

run();