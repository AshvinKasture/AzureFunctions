const { app } = require("@azure/functions");

app.timer("Health-Check", {
  schedule: "0 */10 * * * *", // Every 10 minutes
  handler: async (myTimer, context) => {
    const timestamp = new Date().toISOString();
    const invocationId = context.invocationId;

    const healthInfo = {
      status: "Healthy",
      functionName: "Health-Check",
      functionApp: "func-worker-common-prod-cin",
      timestamp: timestamp,
      invocationId: invocationId,
      runtime: process.version,
      platform: process.platform,
      memoryUsageHeapUsed: process.memoryUsage().heapUsed,
      memoryUsageHeapTotal: process.memoryUsage().heapTotal,
      memoryUsageRss: process.memoryUsage().rss,
      memoryUsageExternal: process.memoryUsage().external,
      uptimeSeconds: parseFloat(process.uptime().toFixed(2)),
      isPastDue: myTimer.isPastDue,
    };

    context.log("Health Check completed", healthInfo);
  },
});
