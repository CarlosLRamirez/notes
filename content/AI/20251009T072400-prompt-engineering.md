---
id: 20251009T072400-prompt-engineering
aliases:
  - Prompt Engineering
tags:
  - AI
created: 2025-10-09 07:24
modified: 2026-03-06 22:34
title: Prompt Engineering
publish: true
folder: AI
---
##  Main Concept
Prompt engineering is the practice of developing, designing and optimizing the inputs you give to an Foundation Model to get better, more accurate, or more consisten output. Since you can't modify the model itself, the prompt is your main level of control.

## Key Aspects
- 4-block framework for an enhanced prompt:
	- **Instructions** - a task for the model to do (decribe how the model should perform a task)
	- **Context** - external information to guide de model
	- **Input data** - the input for which you want a response
	- **Output Indicator** - the output type or format

## Example

```md
[INSTRUCTIONS]
You are a customer service agent for a bank. 
Analyze the customer complaint and provide a empathetic 
response with a concrete solution. Do not offer refunds 
unless the error was caused by the bank.

[CONTEXT]
The customer has been with us for 10 years and has a 
premium account. Our policy allows fee reversals only 
for system errors, not user errors.

[INPUT DATA]
Customer complaint: "I was charged a $35 overdraft fee 
yesterday but I'm sure I had enough money in my account. 
I've been a loyal customer for years and this is 
unacceptable."

[OUTPUT INDICATOR]
Respond in a professional and empathetic tone.
Structure your response as:
1. Acknowledgment
2. Explanation
3. Next steps
Maximum 150 words.
```


## Related Notes
- [[20260306T2234-negative-prompting]] 