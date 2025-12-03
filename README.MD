# Azure Worker Function Apps

A collection of Azure Function Apps designed to run scheduled background jobs and perform automated tasks.

## Overview

This repository contains multiple Azure Function Apps (referred to as "Worker Function Apps") that execute on a schedule to perform various background operations. Each function app may be related or entirely independent of the others, serving different purposes within the organization's workflow automation.

## Project Structure

```
AzureFunctions/
├── README.MD
└── [FunctionAppName]/        # Individual function app folders
    ├── host.json
    ├── local.settings.json
    └── [FunctionName]/       # Individual functions
```

## Features

- **Scheduled Execution**: All function apps are timer-triggered, running on configurable CRON schedules
- **Background Processing**: Designed for long-running or periodic background tasks
- **Independent Deployment**: Each function app can be deployed and scaled independently
- **Modular Design**: Function apps are self-contained and can operate independently

## Getting Started

### Prerequisites

- [Azure Functions Core Tools](https://docs.microsoft.com/azure/azure-functions/functions-run-local)
- [Azure CLI](https://docs.microsoft.com/cli/azure/install-azure-cli)
- .NET SDK / Node.js / Python (depending on the function app runtime)

### Local Development

1. Clone this repository
2. Navigate to the specific function app directory
3. Copy `local.settings.json.example` to `local.settings.json` and configure your settings
4. Run `func start` to start the function app locally

### Deployment

Each function app can be deployed independently to Azure using:

```bash
func azure functionapp publish <FunctionAppName>
```

Or via Azure DevOps / GitHub Actions CI/CD pipelines.

## Function Apps

| Function App | Description | Schedule |
|--------------|-------------|----------|
| *Add your function apps here* | | |

## Contributing

1. Create a new folder for your function app
2. Follow the existing naming conventions
3. Update this README with your function app details
4. Submit a pull request

## License

[Add your license information here]
