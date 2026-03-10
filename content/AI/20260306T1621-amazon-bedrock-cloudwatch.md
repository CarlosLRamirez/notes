---
created: 2026-03-06 16:21
modified: 2026-03-06 18:17
tags:
  - AI
  - amazon-bedrock
  - cloudwatch
  - AWS
title: Amazon Bedrock & CloudWatch
aliases: Amazon Bedrock & CloudWatch
publish: true
folder: AI
---

## Main Concept 
*What is it? What is it about?*
You can integrate Amazon Bedrock with CloudWatch to monitor and log different metrics and events of the services, this include CloudWatch logs and CloudWatch metrics
## Context
*Why is it important? How does it relate to other topics?*
It's important to monitor resources status and usage to prevent any issue and control the costs.
## Key Aspects
### CloudWatch logs
- You can log every model invocation and sent to CloudWatch logs or S3 (input and outputs)
- Logs can include text, images.
- You can use CloudWatch Logs Insights to do more analysis and build alerts.

> [!NOTE]
> S3 is significantly cheaper than CloudWatch Logs for storage—especially for heavy logging.

### CloudWatch metrics
- Several metrics are sent from Amazon Bedrock to CloudWatch Metrics, 
from the model itself and from Guardrails.
- You can set alarms based on thresholds on these metrics.
- For instance, you can use the metric called ContentFilteredCount and set 
an alarm when the number of matches exceeds a certain number, allowing you 
to verify that Guardrails are working correctly.

> [!NOTE]
> We use CloudWatch to monitor infrastructure and operation, however with Amazon SageMaker Model Monitor we can monitor the model quality.

---
## Related Concepts:
- [[20250907T100953-amazon-bedrock-overview|Amazon Bedrock Overview]]
- [[20260306T0347-guardrails-in-amazon-bedrock|Guardrails en Amazon Bedrock]]
- [[Amazon CloudWatch]]

---
## Links:
*References*


## Exam Domain
- [[Domain 5, Task Statement 5.1]] - security and privacy considerations for AI systems, best practices for secure data engineering.
- [[Domain 2, Task Statement 2.3]]