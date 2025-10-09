---
id: 20251009T073200-model-fine-tuning
aliases:
  - Model Fine-Tunning
tags:
  - AI
created: 2025-10-09 07:32
modified: 2025-10-09 12:14
folder: AI
publish: true
title: Model Fine-Tuning
---

## Main Concept

**Fine-tuning** is the process of taking a pre-trained foundation model and improve it by training on a specific dataset to specialize it for a particular task, domain, or behavior.

**Key principle:** You're NOT training from scratch -you're adjusting and exiting model

## Why is needed?

- Problems solved with fine-tuning
  - The model doesn't understand your domain-specific terminology
  - The model doesn't follow your company's tone/style
  - The model isn't accurate enough for your specific task
  - The model needs to learn proprietary knowledge
  - You need consistent, specialized behavior

- When NOT to do fine-tuning
  - You just need access to current information -> Use [[20251009T073427-retrieval-augmented-generation-rag|RAG]] instead
  - Simple instruction changes -> Use prompt Engineering
  - You don't have training data 🤷‍♂️
  - Pre-training model already works well enough

## Fine Tuning Classification

### Primary classification: Based on Label Requirements

```
FINE-TUNING
│
├─── WITH LABELS (Supervised)
│    └─ Traditional Fine-tuning
│       • Input-output pairs
│       • Instruction Tuning
│       • Task-specific training
│       • Examples: Classification, Q&A, Style transfer
│
└─── WITHOUT LABELS (Unsupervised)
     └─ Continued Pre-training
        • Domain-specific text corpus
        • No explicit targets
        • Examples: Domain adaptation, terminology learning
```

## Fine Tuning Methods

### Fine-tuning WITH Labels (Supervised)

- You use example data that is labeled to train the model.
- The data has input-output format (question-answer, prompt-completion, description-category, etc...)
- You need hundreds to thousands of labeled example, high-quality i/o pairs, clear, consistent labeling.
- Benefits are, the model learn your specific style/format, better performance, consistent outputs, match your standard/use case.
- Use cases: Specific writing style, domain expertise, task specialization
- Example: A customer support ticket classification, data example:

  ```json
  {"input": "My password reset email never arrived and I can't log in",
  "output": "Authentication"}

  {"input": "The mobile app crashes every time I try to upload a photo",
  "output": "Technical_Bug"}

  {"input": "I was charged twice for my subscription this month",
  "output": "Billing"}

  {"input": "How do I change my profile picture?",
  "output": "General_Support"}

  {"input": "The website is loading very slowly on my browser",
  "output": "Technical_Bug"}

  {"input": "I want to upgrade to the premium plan",
  "output": "Sales"}

  {"input": "Can you delete my account and all my data?",
  "output": "Account_Management"}
  ```

#### Instruction Tuning

- Is an specific method of fine-tuning
- It's focuses on teaching the model to respond to instructions, rather than just expanding its general knowledges.
- A typical dataset for instruction fine-tuning consists Instruction, Input Query and Output Response.
  - Instruction: A natural language prompt that specifies the task to be performed.
  - Input: The data on which the task is to be executed.
  - Output: The expected result after performing the task on the given input.
- The objective is made the model be good on follow any instructions, and not only an specific task.
- Example of dataset:

```json
{"instruction": "Tranlsate the following English sentence to Spanish",
 "input": "Hello, how are you?",
 "output": "Hola, ¿cómo estás?"}

{"instruction": "Summary the following text",
 "input": "[long text...]",
 "output": "brief summary"}

{"instruction": "Answer the question?",
 "input": "¿What is the capital of France?",
 "output": "The capital of France is París"}
```

- Famous models
  - InstructGPT (OpeAI)
  - FLAN (Google)
  - Alpaca (Standoford)

### Continued Pre-training (WITHOUT Labels)

- You continue training the model with your domain-specific text
- You need to provide large amount of unlabeled text of your own topics
- The goal is to improve the general knowledge in your specific field.
- Only certain Amazon models support Continued Pre-training in Amazon Bedrock
  - Amazon Titan Text G1 - Express
  - Amazon Titan Text G1 - Lite
- Example: You're building an AI assistant for doctors, but foundation models don't have deep medical knowledge or use proper medical terminology consistently.

```text
Medical textbooks (no labels needed - just raw text):
"Myocardial infarction occurs when blood flow to the heart muscle is blocked, typically due to coronary artery thrombosis. The left anterior descending artery is most commonly affected..."

Clinical guidelines:
"For acute management of ST-elevation myocardial infarction,immediate reperfusion therapy is indicated. Primary percutaneous coronary intervention should be performed within 90 minutes..."

Research papers:
"The pathophysiology of atherosclerosis involves endothelial dysfunction, lipid accumulation, and inflammatory responses. Macrophages play a crucial role in plaque formation..."

Patient case studies (anonymized):
"A 58-year-old male presented with chest pain radiating to the left arm. ECG showed ST-segment elevation. Troponin levels were elevated at 2.5 ng/mL..."
```

---

## Fine-tuning vs. Other Methods

### Fine-tuning vs. RAG:

| **Aspect**           | **Fine-tuning**     | **RAG**              |
| -------------------- | ------------------- | -------------------- |
| **Model changes**    | ✅ Yes              | ❌ No                |
| **Training needed**  | ✅ Yes              | ❌ No                |
| **Updates**          | Retrain needed      | Just update docs     |
| **Knowledge source** | In model parameters | External database    |
| **Best for**         | Behavior/style      | Current information  |
| **Latency**          | Lower               | Higher (search step) |

### Fine-tuning vs. Prompt Engineering:

| **Aspect**        | **Fine-tuning**   | **Prompt Engineering** |
| ----------------- | ----------------- | ---------------------- |
| **Model changes** | ✅ Yes            | ❌ No                  |
| **Cost**          | High (training)   | Low (just API calls)   |
| **Complexity**    | High              | Low                    |
| **Consistency**   | Very high         | Variable               |
| **Token usage**   | Lower per request | Higher (long prompts)  |
| **Best for**      | Repeated tasks    | Ad-hoc instructions    |

### Fine-tuning vs. Training from Scratch:

| **Aspect**         | **Fine-tuning**   | **From Scratch** |
| ------------------ | ----------------- | ---------------- |
| **Starting point** | Pre-trained model | Nothing          |
| **Data needed**    | 100s-1000s        | Millions         |
| **Time**           | Hours-Days        | Months           |
| **Cost**           | $100s-$1000s      | $Millions        |
| **Expertise**      | Medium            | Very High        |

---

## 💰 Cost Considerations

### Fine-tuning WITH Labels:

- **Data preparation**: Manual labeling (most expensive)
- **Training**: $50-$500 (depends on model size)
- **Inference**: Similar to base model
- **Total**: $500-$5000 (mostly labor)

### Continued Pre-training:

- **Data collection**: Automated (cheaper)
- **Training**: $500-$5000 (much more compute)
- **Inference**: Similar to base model
- **Total**: $1000-$10000 (mostly compute)

---

## 📈 Success Metrics

### For Fine-tuning WITH Labels:

- Task-specific metrics (accuracy, F1, etc.)
- Compare against base model
- Human evaluation of outputs
- Consistency checks

### For Continued Pre-training:

- Perplexity on domain text
- Domain-specific benchmarks
- Qualitative assessment
- A/B testing vs. base model

---

## 🚨 Common Pitfalls

### Overfitting:

- **Problem**: Model memorizes training data
- **Symptom**: Great on training, poor on new data
- **Solution**: More data, regularization, early stopping

### Catastrophic Forgetting:\*\*

- **Problem**: Model loses general capabilities
- **Symptom**: Good at new task, bad at everything else
- **Solution**: Mix general and specific data

### Insufficient Data:

- **Problem**: Not enough examples to learn
- **Symptom**: No improvement over base model
- **Solution**: Collect more data or try RAG instead

### Wrong Method:

- **Problem**: Using fine-tuning when RAG would work
- **Symptom**: High cost, unnecessary complexity
- **Solution**: Start simple (prompts/RAG), escalate if needed

---

## Key Takeaways

1. **Fine-tuning = Specialized training on pre-trained model**
2. **Two main types: WITH labels vs. WITHOUT labels**
3. **WITH labels = Task specialization (supervised)**
4. **WITHOUT labels = Domain knowledge (unsupervised)**
5. **NOT the same as training from scratch**
6. **More expensive than RAG/prompts but more powerful**
7. **Changes the model permanently**
8. **Requires retraining for updates**

---

## 🔗 Related Concepts

- **Transfer Learning**: Broader concept (fine-tuning is one type)
- **Prompt Engineering**: Simpler alternative
- **RAG**: Complementary technique
- [[20251009T102549-model-domain-adaptation|Model Domain Adaptation]]: not a method, but an objective
- **Model Distillation**: Creating smaller versions
- **Few-shot Learning**: Learning from few examples (in prompts)
- **Zero-shot Learning**: No examples needed (base model)

---

## 📝 Quick Reference

```
NEED TO REMEMBER:

Fine-tuning = Adjusting pre-trained model

TWO TYPES:
1. WITH labels → Task specialization
2. WITHOUT labels → Domain knowledge

ALWAYS CONSIDER FIRST:
1. Prompt engineering (simplest)
2. RAG (for information access)
3. Fine-tuning (for behavior change)

FINE-TUNING WHEN:
• Have training data
• Need consistent behavior
• Task-specific requirements
• Domain expertise needed
```

---
