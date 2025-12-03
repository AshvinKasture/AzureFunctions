# Azure Worker Function App

A common Azure Function App designed to run scheduled background jobs and perform automated tasks.

## Overview

This repository contains a shared Azure Function App (`func-worker-common-prod-cin`) that hosts multiple functions for various background operations. Each function within this app may be related or entirely independent of the others, serving different purposes within the organization's workflow automation.

## Function App Details

| Property | Value |
|----------|-------|
| **Function App Name** | `func-worker-common-prod-cin` |
| **Environment** | Production |
| **Region** | Central India (cin) |

## Project Structure

```
AzureFunctions/
├── README.MD
├── host.json
├── local.settings.json
└── [ServiceName]-[FunctionName]/    # Individual functions
    └── function.json
```

## Naming Convention

Functions follow the naming pattern: **`[ServiceName]-[FunctionName]`**

Examples:
- `Billing-GenerateInvoices`
- `Notifications-SendReminders`
- `Reports-DailyExport`

## Features

- **Scheduled Execution**: Functions are timer-triggered, running on configurable CRON schedules
- **Background Processing**: Designed for long-running or periodic background tasks
- **Shared Resources**: All functions share the same function app resources and configuration
- **Modular Design**: Each function is self-contained and operates independently

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Azure Functions Core Tools](https://docs.microsoft.com/azure/azure-functions/functions-run-local)
- [Azure CLI](https://docs.microsoft.com/cli/azure/install-azure-cli)

### Local Development

1. Clone this repository
2. Copy `local.settings.json.example` to `local.settings.json` and configure your settings
3. Run `func start` to start the function app locally

### Deployment

Deploy to Azure using:

```bash
func azure functionapp publish func-worker-common-prod-cin
```

Or via Azure DevOps / GitHub Actions CI/CD pipelines.

## Functions

| Function Name | Description | Schedule |
|---------------|-------------|----------|
| *Add your functions here* | | |

## Adding a New Function

1. Create a new folder following the naming convention: `[ServiceName]-[FunctionName]`
2. Add the function code and `function.json`
3. Update this README with function details
4. Test locally before deploying

## License

[Add your license information here]
