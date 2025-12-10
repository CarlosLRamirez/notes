---
id: 20251011T094204-model-customization
aliases:
  - Model Customization
tags:
  - IA
  - draft
created: 2025-10-11 09:42
modified: 2025-10-11 10:00
folder: IA
publish: true
title: Model Customization
---
	
## Main Concept

- You can customize or adapt a foundation models for your specific needs
-Different approaches exists, being the most common:
  - [[20251009T072400-prompt-engineering|Prompt Engineering]]
  - [[20251009T073427-retrieval-augmented-generation-rag|Retrieval Augmented Generation (RAG)]]
  - [[20251009T073200-model-fine-tuning|Model Fine-Tuning]]



## Mindmap

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        MODEL CUSTOMIZATION                                  │
│              (How to adapt models for your specific needs)                  │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
                                   │
        ┌──────────────────────────┼──────────────────────────┐
        │                          │                          │
        │                          │                          │
┌───────▼─────────┐    ┌───────────▼──────────┐   ┌─────────▼─────────────┐
│  NO TRAINING    │    │  EXTERNAL KNOWLEDGE  │   │  MODEL TRAINING       │
│  (Easiest)      │    │  (Medium)            │   │  (Most Complex)       │
└───────┬─────────┘    └───────────┬──────────┘   └─────────┬─────────────┘
        │                          │                         │
        │                          │                         │
        │                          │                         │
┌───────▼─────────────────────┐    │              ┌──────────▼──────────────┐
│   PROMPT ENGINEERING        │    │              │  TRANSFER LEARNING      │
│                             │    │              │  (Philosophy)           │
│   Techniques:               │    │              │                         │
│   ├─ Zero-Shot             │    │              │  Use pre-trained        │
│   │  └─ No examples        │    │              │  knowledge for new      │
│   │  └─ Just instructions  │    │              │  tasks                  │
│   │                        │    │              └──────────┬──────────────┘
│   ├─ Few-Shot              │    │                         │
│   │  └─ 1-10 examples      │    │              ┌──────────▼──────────────┐
│   │  └─ In prompt          │    │              │  TRANSFER LEARNING      │
│   │                        │    │              │  METHODS                │
│   ├─ Chain-of-Thought      │    │              │  (Implementations)      │
│   │  └─ Step-by-step       │    │              └──────────┬──────────────┘
│   │                        │    │                         │
│   └─ Role-Playing          │    │                         │
│      └─ "Act as expert"    │    │      ┌──────────────────┼──────────────────┬──────────────────┬─────────────────┬──────────────────┐
│                            │    │      │                  │                  │                  │                 │                  │
│   Cost: $                  │    │      │                  │                  │                  │                 │                  │
│   Time: Minutes            │    │  ┌───▼────────┐  ┌──────▼──────┐  ┌───────▼──────┐  ┌───────▼────────┐  ┌────▼─────────┐  ┌───▼──────────┐
│   Skill: Low               │    │  │  FEATURE   │  │ FINE-TUNING │  │  MULTI-TASK  │  │  META-LEARNING │  │ DISTILLATION │  │ FEW-SHOT     │
│   Data: None or few        │    │  │ EXTRACTION │  │             │  │   LEARNING   │  │                │  │              │  │ LEARNING     │
│                            │    │  └───┬────────┘  └──────┬──────┘  └───────┬──────┘  └───────┬────────┘  └────┬─────────┘  │  (Training)  │
└────────────────────────────┘    │      │                  │                  │                 │                  │             └───┬──────────┘
                                  │      │                  │                  │                 │                  │                 │
                         ┌────────▼──────▼──────────────────▼──────────────────▼─────────────────▼──────────────────▼─────────────────┤
                         │                                                                                                             │
                         │                                RAG (RETRIEVAL-AUGMENTED GENERATION)                                        │
                         │                                                                                                             │
                         │   What: Give model access to external documents at inference time                                          │
                         │   Components:                                                                                               │
                         │   ├─ Knowledge Base (your documents)                                                                        │
                         │   ├─ Vector Database (OpenSearch, Pinecone)                                                                │
                         │   ├─ Embeddings (convert text to vectors)                                                                  │
                         │   ├─ Retrieval (semantic search)                                                                           │
                         │   └─ Generation (model uses retrieved context)                                                             │
                         │                                                                                                             │
                         │   Process:                                                                                                  │
                         │   1. User asks question                                                                                     │
                         │   2. Search relevant documents in vector DB                                                                 │
                         │   3. Retrieve top matches                                                                                   │
                         │   4. Send context + question to model                                                                       │
                         │   5. Model generates answer using context                                                                   │
                         │                                                                                                             │
                         │   AWS Implementation:                                                                                       │
                         │   ├─ Amazon Bedrock Knowledge Bases                                                                         │
                         │   ├─ Amazon OpenSearch (vector store)                                                                       │
                         │   ├─ Amazon Kendra (search)                                                                                 │
                         │   └─ S3 (document storage)                                                                                  │
                         │                                                                                                             │
                         │   Cost: $$ (medium)                                                                                         │
                         │   Time: Hours-Days (setup)                                                                                  │
                         │   Skill: Medium                                                                                             │
                         │   Data: Your documents (unlabeled)                                                                          │
                         │   Changes Model: NO                                                                                         │
                         └─────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Hierarchy


* **MODEL CUSTOMIZATION**: [[20251011T094204-model-customization|Model Customization]]
  * **1. NO TRAINING METHODS**
    * 1.1 [[20251009T072400-prompt-engineering|Prompt Engineering]]
		- 1.1.1 [[zero-shot-learning]]
		- 1.1.2 [[Few-Shot Learning (In-Context)]]
		- 1.1.3 [[Chain-of-Thought Prompting]]
      * Role-Playing Prompts
        * "Act as an expert in..."
        * Define persona/context
      * Characteristics
        * Model unchanged
        * No training required
        * Immediate results
        * Limited customization
        * Good for quick tests
  * **2. EXTERNAL KNOWLEDGE METHODS**
    * **RAG (Retrieval-Augmented Generation)**
      * What it is
        * Combines retrieval + generation
        * Model accesses external documents
        * No model training
        * Dynamic knowledge access
      * Components
        * Knowledge Base
          * Your documents (PDFs, docs, text)
          * Stored in S3 or databases
        * Embeddings
          * Convert text to vectors
          * Capture semantic meaning
          * Models: Titan Embeddings, Cohere Embed
        * Vector Database
          * Store document embeddings
          * Amazon OpenSearch
          * Pinecone
          * Enable similarity search
        * Retrieval Process
          * Convert query to vector
          * Search similar vectors
          * Return top K matches
        * Generation Process
          * Combine retrieved docs + query
          * Send to foundation model
          * Model generates answer using context
      * Process Flow
        * Step 1: User asks question
        * Step 2: Question → embedding
        * Step 3: Search vector database
        * Step 4: Retrieve relevant documents
        * Step 5: Context + question → model
        * Step 6: Model generates answer
      * AWS Implementation
        * Amazon Bedrock Knowledge Bases
          * Fully managed RAG solution
          * Automatic indexing
          * Integration with models
        * Amazon OpenSearch
          * Vector database
          * Similarity search
        * Amazon Kendra
          * Intelligent search
          * ML-powered retrieval
        * Amazon S3
          * Document storage
      * Use Cases
        * Customer support with company docs
        * Internal knowledge bases
        * Document Q&A
        * Research assistants
        * Legal/Medical document analysis
      * Characteristics
        * Model unchanged
        * No training required
        * Easy to update (add/remove docs)
        * Access to latest information
        * Higher latency (search step)
      * Cost: $$ (medium)
      * Time: Hours-Days (setup)
      * Skill: Medium
      * Data: Documents (unlabeled)
  * **3. TRANSFER LEARNING METHODS**
    * **What is Transfer Learning**
      * Philosophy: Use pre-trained knowledge for new tasks
      * Like learning guitar after knowing piano
      * Broader concept than fine-tuning
      * Multiple implementation methods
    * **3.1 Feature Extraction**
      * What it is
        * Use pre-trained model as feature extractor
        * Base model frozen (not updated)
        * Train only new classifier layers
        * Transfer learning without full training
      * How it works
        * Pre-trained Model (frozen)
          * Layer 1: Low-level features (edges, colors)
          * Layer 2: Mid-level features (shapes, textures)
          * Layer 3: High-level features (objects, patterns)
          * Output: Feature vectors
        * Your Classifier (trainable)
          * New dense layers
          * Trained on your task
          * Uses extracted features
      * Process
        * Load pre-trained model
        * Freeze all base layers
        * Add new classification head
        * Train only new layers
        * Use extracted features for prediction
      * Example (Image Classification)
        * Base: ResNet trained on ImageNet
        * Freeze: All ResNet layers
        * Add: New layers for medical images
        * Train: Only new layers on X-rays
        * Result: Medical image classifier
      * Use Cases
        * Limited training data (100s-1000s)
        * Task similar to pre-training
        * Quick prototyping
        * Resource-constrained environments
      * Pros
        * Fast training
        * Less data needed
        * Lower overfitting risk
        * Preserves pre-trained knowledge
        * Computationally efficient
      * Cons
        * Less flexible than fine-tuning
        * May not adapt if task very different
        * Can't fix base model issues
      * Cost: $ (low)
      * Time: Hours
      * Skill: Medium
      * Data: Moderate (100s-1000s)
    * **3.2 Fine-tuning**
      * What it is
        * Adjust parameters of pre-trained model
        * Continue training on your data
        * Model weights updated
        * Most common transfer learning method
      * General Characteristics
        * Model changes: YES
        * Training required: YES
        * More flexible than feature extraction
        * Can adapt significantly
      * **3.2.1 Fine-tuning WITH LABELS (Supervised Learning)**
        * **3.2.1.1 Traditional Fine-tuning**
          * What it is
            * Train for ONE specific task
            * Single-task specialization
            * Task-specific optimization
          * Data Format
            * Input-Output pairs
            * Labeled examples
            * Format: {"input": "text", "output": "label"}
          * Data Requirements
            * Volume: 100s-1000s examples
            * Quality: High-quality labels essential
            * Consistency: Same format throughout
          * Process
            * Start with pre-trained model
            * Provide labeled examples
            * Model learns task-specific patterns
            * Update model parameters
            * Optimize for your task
          * Use Cases
            * Sentiment classification
              * Input: "This product is amazing"
              * Output: "Positive"
            * Spam detection
              * Input: Email text
              * Output: "Spam" or "Not Spam"
            * Named Entity Recognition
              * Input: "John lives in Paris"
              * Output: [Person: John, Location: Paris]
            * Product categorization
              * Input: Product description
              * Output: Category name
            * Customer support ticket routing
              * Input: Ticket description
              * Output: Department
            * Medical diagnosis
              * Input: Symptoms
              * Output: Diagnosis
          * Examples
            * Email spam classifier
            * Product review sentiment analyzer
            * Document classifier
            * Image label predictor
          * Characteristics
            * Single task focus
            * High accuracy on that task
            * Consistent outputs
            * Not flexible for other tasks
            * Requires retraining for new tasks
          * Pros
            * Excellent task performance
            * Predictable behavior
            * Optimized for specific use
          * Cons
            * One task only
            * Less versatile
            * Need new model for new task
          * Cost: $$ (medium)
          * Time: Days
          * Skill: Medium-High
          * Data: Labeled input-output pairs (1000s)
        * **3.2.1.2 Instruction Tuning**
          * What it is
            * Train to follow diverse instructions
            * Multi-task learning approach
            * General-purpose assistant
            * More flexible than traditional fine-tuning
          * Data Format
            * Instruction-Response pairs
            * Three components:
              * Instruction: What to do
              * Input: The content (optional)
              * Response: Expected output
            * Format: {"instruction": "...", "input": "...", "response": "..."}
          * Data Requirements
            * Volume: 1000s-10000s examples
            * Diversity: Many different tasks
            * Quality: Clear instructions + responses
          * Example Data
            * Translation task
              * Instruction: "Translate to Spanish"
              * Input: "Hello, how are you?"
              * Response: "Hola, ¿cómo estás?"
            * Summarization task
              * Instruction: "Summarize this article"
              * Input: [Long article text]
              * Response: "Brief summary here"
            * Classification task
              * Instruction: "Classify the sentiment"
              * Input: "I love this product"
              * Response: "Positive"
            * Q&A task
              * Instruction: "Answer the question"
              * Input: "What is the capital of France?"
              * Response: "Paris"
          * Process
            * Collect diverse instruction-response pairs
            * Train model on all tasks together
            * Model learns to follow instructions
            * Can generalize to new instructions
          * Goal
            * Versatile assistant
            * Follow any reasonable instruction
            * Multi-task capability
            * Natural instruction-following
          * Tasks Learned
            * Translation (any language pair)
            * Summarization (any length)
            * Question answering
            * Classification
            * Content generation
            * Code generation
            * Analysis
            * Creative writing
            * Any instruction-based task
          * Famous Examples
            * ChatGPT (OpenAI)
            * Claude (Anthropic)
            * Alpaca (Stanford)
            * FLAN-T5 (Google)
            * Vicuna
          * Characteristics
            * Multi-task capable
            * Instruction-following
            * General assistant behavior
            * More flexible than traditional
            * Can adapt to new instructions
          * Difference from Traditional
            * Traditional: One task, Input → Output
            * Instruction: Many tasks, Instruction + Input → Response
          * Pros
            * Very versatile
            * Follows diverse instructions
            * One model, many tasks
            * Natural interaction
          * Cons
            * More complex to train
            * Requires diverse dataset
            * May not excel at any single task
          * Cost: $$$ (high)
          * Time: Days-Weeks
          * Skill: High
          * Data: Instruction-response pairs (1000s-10000s)
      * **3.2.2 Fine-tuning WITHOUT LABELS (Unsupervised Learning)**
        * **3.2.2.1 Continued Pre-training**
          * What it is
            * Continue training on domain-specific text
            * No labels needed
            * Learn domain knowledge/terminology
            * Domain adaptation approach
          * Data Format
            * Raw unlabeled text
            * Just plain text from domain
            * No structure required
            * Example: "Medical research shows that myocardial infarction occurs when..."
          * Data Requirements
            * Volume: Gigabytes of text
            * Quality: Domain-relevant
            * Diversity: Broad domain coverage
            * Source: Books, papers, documents, articles
          * Process
            * Collect large domain corpus
            * Continue model training
            * Model learns domain patterns
            * No specific task target
            * Improves domain understanding
          * Goal
            * Domain expertise
            * Terminology learning
            * Conceptual understanding
            * Better general comprehension
          * Use Cases
            * General → Medical domain
              * Train on: Medical textbooks, journals, research papers
              * Result: Understands medical terminology
            * General → Legal domain
              * Train on: Case law, statutes, legal briefs
              * Result: Understands legal language
            * General → Financial domain
              * Train on: Financial reports, market analysis
              * Result: Understands financial concepts
            * General → Scientific domain
              * Train on: Scientific papers, research
              * Result: Understands scientific terminology
            * General → Company-specific
              * Train on: Internal docs, code, communications
              * Result: Understands company jargon
          * Examples
            * BioBERT (medical)
            * LegalBERT (legal)
            * FinBERT (financial)
            * SciBERT (scientific)
            * CodeBERT (programming)
          * What it learns
            * Domain vocabulary
            * Technical terminology
            * Domain-specific patterns
            * Conceptual relationships
            * Writing styles
          * What it doesn't learn
            * Specific tasks
            * Output formats
            * Particular behaviors
            * Task completion
          * Characteristics
            * No specific task
            * Improves general understanding
            * Domain knowledge base
            * Foundation for later fine-tuning
          * Often combined with
            * Later: Task-specific fine-tuning
            * Or: RAG for specific information
          * Pros
            * Deep domain understanding
            * Learns terminology naturally
            * No labeling cost
            * Broad knowledge acquisition
          * Cons
            * Requires massive text corpus
            * Very expensive (compute)
            * Time-consuming
            * No task optimization
          * AWS Support
            * Amazon Bedrock: Limited (Titan models only)
            * SageMaker: Full support
          * Cost: $$$$ (very high)
          * Time: Weeks
          * Skill: High
          * Data: Gigabytes of domain text (unlabeled)
    * **3.3 Multi-Task Learning**
      * What it is
        * Train on multiple tasks simultaneously
        * Shared knowledge across tasks
        * Single model for many tasks
        * Tasks help each other learn
      * Architecture
        * Shared Base Layers
          * Common representations
          * Layer 1: Low-level features
          * Layer 2: Mid-level features
          * Layer 3: High-level features
        * Task-Specific Heads
          * Head 1: Sentiment classification
          * Head 2: Named Entity Recognition
          * Head 3: Summarization
          * Head 4: Translation
      * Data Format
        * Multi-task dataset
        * Each example tagged with task
        * Format: {"task": "sentiment", "input": "...", "output": "..."}
        * Mixed batch training
      * Process
        * Collect data for multiple tasks
        * Train model on all tasks together
        * Shared layers learn general patterns
        * Task heads learn specific patterns
        * Simultaneous optimization
      * Benefits
        * Knowledge transfer between tasks
        * Better generalization
        * More efficient than separate models
        * Reduces overfitting
        * Shared representations
        * Complementary learning
      * Use Cases
        * Multiple related NLP tasks
        * Want one model for everything
        * Tasks can share knowledge
        * Limited data per task
      * Examples
        * T5 (Text-to-Text Transfer Transformer)
          * All tasks as text-to-text
          * Translation, summarization, Q&A, etc.
        * BERT
          * Masked language modeling
          * Next sentence prediction
        * GPT
          * Multiple training objectives
        * MT-DNN
          * Multiple NLP tasks
      * Tasks Combined
        * Text classification
        * Named entity recognition
        * Question answering
        * Summarization
        * Translation
        * Sentiment analysis
      * Characteristics
        * One model, many capabilities
        * Shared knowledge base
        * Task-specific outputs
        * Efficient training
      * Pros
        * Efficient (one model)
        * Tasks improve each other
        * Better generalization
        * Shared learning
      * Cons
        * Complex training
        * Task balancing needed
        * May compromise on individual tasks
      * Cost: $$$ (high)
      * Time: Weeks
      * Skill: High
      * Data: Multiple task datasets (high volume)
    * **3.4 Meta-Learning (Learning to Learn)**
      * What it is
        * Learn HOW to learn quickly
        * Train learning strategy, not task
        * Rapid adaptation to new tasks
        * "Learning to learn"
      * Core Concept
        * Instead of: Learn Task A
        * Do: Learn how to quickly learn any task
        * Result: Fast adaptation with few examples
      * Meta-Training Process
        * Episode-based training
        * Episode 1
          * Sample Task A
          * Quick adapt (few examples)
          * Evaluate performance
          * Update learning strategy
        * Episode 2
          * Sample Task B
          * Quick adapt (few examples)
          * Evaluate performance
          * Update learning strategy
        * Repeat thousands of times
        * Result: Model knows how to adapt quickly
      * Deployment
        * New unseen Task appears
        * Model uses learned strategy
        * Adapts with just 1-5 examples
        * Performs well immediately
      * Algorithms
        * MAML (Model-Agnostic Meta-Learning)
          * Optimize for fast adaptation
          * Few gradient steps to new task
        * Reptile
          * Simpler than MAML
          * Averaged gradient updates
        * Prototypical Networks
          * Learn metric space
          * Classify by similarity
        * Matching Networks
          * Attention-based matching
        * Relation Networks
          * Learn relation function
      * Use Cases
        * Many new tasks expected
        * Each task has few examples
        * Rapid adaptation needed
        * Research applications
        * Few-shot classification
      * Difference from Few-Shot Prompting
        * Few-Shot Prompting
          * Examples in prompt
          * No training
          * Model infers from context
        * Meta-Learning
          * Trains adaptation strategy
          * Learns how to learn
          * Actual model updates
      * Characteristics
        * Learns learning strategy
        * Quick task adaptation
        * Few examples needed
        * Research-level technique
      * Pros
        * Extremely fast adaptation
        * Works with very few examples
        * General learning capability
      * Cons
        * Very complex
        * Requires many diverse tasks
        * Computationally expensive
        * Research-level difficulty
      * Cost: $$$$ (very high)
      * Time: Weeks-Months
      * Skill: Very High (research level)
      * Data: Many different tasks (very high)
    * **3.5 Knowledge Distillation (Teacher-Student)**
      * What it is
        * Transfer knowledge from large to small model
        * Teacher: Large, accurate model
        * Student: Small, efficient model
        * Compression technique
      * Architecture
        * Teacher Model (Large)
          * Examples: GPT-4, Claude Opus, Nova Premier
          * 100s of billions to trillions of parameters
          * High accuracy
          * Slow inference
          * Expensive to run
        * Student Model (Small)
          * Examples: GPT-3.5, Claude Haiku, Nova Micro
          * Billions of parameters
          * Good accuracy (retained from teacher)
          * Fast inference
          * Cheap to run
      * Process
        * Step 1: Teacher processes data
          * Generates predictions
          * Provides probability distributions ("soft targets")
          * Offers intermediate representations
        * Step 2: Student trains
          * Tries to match teacher outputs
          * Learns from soft targets
          * Mimics teacher behavior
        * Step 3: Loss calculation
          * Distillation loss: student vs teacher outputs
          * Knowledge transfer loss
        * Step 4: Student optimization
          * Minimize difference from teacher
          * Retain teacher knowledge
        * Result: Small model with big model capabilities
      * Types of Knowledge Transferred
        * Output predictions
          * Final predictions
        * Soft targets
          * Probability distributions
          * More informative than hard labels
        * Intermediate representations
          * Internal activations
          * Hidden states
        * Attention patterns
          * Where model focuses
      * Temperature in Distillation
        * Controls softness of probabilities
        * Higher temperature: Softer distributions
        * Reveals teacher's uncertainty
        * Helps student learn nuances
      * Benefits
        * Model compression (10-100x smaller)
        * Faster inference (10-100x)
        * Lower deployment cost
        * Edge/mobile deployment possible
        * Retains most teacher knowledge (80-95%)
      * Use Cases
        * Mobile deployment
        * Edge computing
        * IoT devices
        * Cost reduction
        * Latency-sensitive apps
        * Resource-constrained environments
      * AWS Implementation
        * Amazon Bedrock Model Distillation
          * Teacher: Nova Premier
          * Student: Nova Micro, Lite, or Pro
          * Automated process
          * Managed service
        * Process
          * Provide prompts (no outputs needed)
          * Bedrock generates teacher responses
          * Trains student automatically
          * Result: Custom small model
      * Characteristics
        * Creates smaller models
        * Preserves performance
        * Deployment-focused
        * Production optimization
      * Pros
        * Much smaller size
        * Much faster inference
        * Lower running costs
        * Maintains quality
        * Enables edge deployment
      * Cons
        * Requires teacher model access
        * Some performance loss
        * Training complexity
        * Need both models
      * Cost: $$$ (teacher + student training)
      * Time: Days-Weeks
      * Skill: High
      * Data: Moderate-High (unlabeled prompts for Bedrock)
    * **3.6 Few-Shot Learning (With Training)**
      * What it is
        * Train model with very few examples
        * Actual training (not just prompting)
        * 5-50 examples per class
        * Learn from minimal data
      * Distinction
        * Few-Shot Prompting
          * Examples in prompt only
          * No training
          * Model infers from context
        * Few-Shot Learning (Training)
          * Actual model training
          * Updates parameters
          * Learns from few examples
      * Techniques
        * Prototypical Networks
          * Learn prototype per class
          * Classify by distance to prototypes
        * Matching Networks
          * Attention-based matching
          * Compare to support set
        * Siamese Networks
          * Learn similarity metric
          * Compare pairs
        * Relation Networks
          * Learn relation function
          * Predict similarity scores
      * Setup
        * Support Set
          * Few examples per class
          * Class A: 5 examples
          * Class B: 5 examples
          * Class C: 5 examples
        * Query Set
          * New examples to classify
          * Model predicts based on support set
      * Process
        * Provide support set (few examples)
        * Model learns embeddings
        * New query arrives
        * Model compares to support set
        * Classifies based on similarity
      * Scenarios
        * 1-shot learning
          * 1 example per class
        * 5-shot learning
          * 5 examples per class
        * 10-shot learning
          * 10 examples per class
      * Use Cases
        * Very limited labeled data
        * Expensive to label more
        * Rare classes/categories
        * Medical rare diseases
        * Specialized image recognition
        * Rapid prototyping
      * Characteristics
        * Minimal data requirement
        * Similarity-based learning
        * Metric learning
        * Episode-based training
      * Pros
        * Works with tiny datasets
        * Fast to deploy
        * Good for rare cases
      * Cons
        * Lower accuracy than full training
        * Requires special architecture
        * More complex than standard training
      * Cost: $$ (moderate)
      * Time: Hours-Days
      * Skill: High
      * Data: Very few examples (5-50 total)
  * **4. CROSS-CUTTING CONCEPT**
    * **Domain Adaptation**
      * What it is
        * GOAL, not a method
        * Adapt model from source to target domain
        * Transfer across domains
        * Can use multiple methods
      * Concept
        * Source Domain: Where model was trained
        * Target Domain: Where you want to use it
        * Goal: Work well in target domain
      * Examples of Domain Shift
        * General English → Medical English
        * News articles → Legal documents
        * Consumer products → Industrial equipment
        * Web text → Scientific papers
        * General images → Medical images
      * Methods to Achieve (Can use ANY)
        * **Method 1: Continued Pre-training** (Most Common)
          * Train on target domain text
          * No labels needed
          * Learn domain vocabulary
          * Gigabytes of domain text
          * Best for: Deep domain knowledge
        * **Method 2: Fine-tuning with domain labels**
          * Train on target domain tasks
          * Labels needed
          * Learn domain-specific tasks
          * 1000s of labeled examples
          * Best for: Specific domain tasks
        * **Method 3: RAG with domain documents**
          * Connect to domain knowledge base
          * No training needed
          * Access domain information
          * Domain documents
          * Best for: Dynamic domain info
        * **Method 4: Feature Extraction**
          * Use pre-trained features
          * Train domain classifier
          * Moderate data
          * Best for: Limited data
        * **Method 5: Multi-Task with domain tasks**
          * Include domain in multi-task training
          * Multiple domain tasks
          * Best for: Multiple related tasks
        * **Method 6: Combination** (Recommended)
          * Continued Pre-training (knowledge)
          * + Fine-tuning (tasks)
          * + RAG (latest info)
          * Best for: Production systems
      * Types of Domain Adaptation
        * Supervised Domain Adaptation
          * Have labels in target domain
          * Easier
          * Better performance
        * Unsupervised Domain Adaptation
          * No labels in target domain
          * Harder
          * Use continued pre-training
        * Semi-supervised Domain Adaptation
          * Some labels in target domain
          * Combine approaches
      * Characteristics
        * Cross-cutting concern
        * Not a single method
        * Multiple implementation options
        * Flexible approach
      * Use Cases
        * Medical: General → Medical AI
        * Legal: General → Legal AI
        * Financial: General → Finance AI
        * Scientific: General → Research AI
        * Company: General → Company-specific AI
      * Challenge
        * Domain shift (distribution difference)
        * Terminology differences
        * Context differences
        * Data scarcity in target domain
      * Best Practices
        * Start with continued pre-training
        * Add task-specific fine-tuning
        * Supplement with RAG
        * Iterate and evaluate
      * Cost: Varies by method
      * Time: Varies by method
      * Skill: Medium-High
      * Data: Varies by method

---

## **📊 SUMMARY TABLE**

* **Comparison of All Methods**
  * **Prompt Engineering**
    * Model Changes: NO
    * Training: NO
    * Data Type: None or few examples
    * Data Volume: 0-10
    * Cost: $
    * Time: Minutes
    * Skill: Low
    * Use When: First attempt, quick test
  * **RAG**
    * Model Changes: NO
    * Training: NO
    * Data Type: Documents (unlabeled)
    * Data Volume: Gigabytes
    * Cost: $$
    * Time: Hours-Days
    * Skill: Medium
    * Use When: Need information access
  * **Feature Extraction**
    * Model Changes: Partial (new layers only)
    * Training: YES (new layers)
    * Data Type: Labeled
    * Data Volume: 100s-1000s
    * Cost: $
    * Time: Hours
    * Skill: Medium
    * Use When: Limited data, similar task
  * **Traditional Fine-tuning**
    * Model Changes: YES
    * Training: YES
    * Data Type: Input-Output pairs
    * Data Volume: 1000s
    * Cost: $$
    * Time: Days
    * Skill: Medium-High
    * Use When: One specific task
  * **Instruction Tuning**
    * Model Changes: YES
    * Training: YES
    * Data Type: Instruction-Response pairs
    * Data Volume: 1000s-10000s
    * Cost: $$$
    * Time: Days-Weeks
    * Skill: High
    * Use When: Multi-task assistant
  * **Continued Pre-training**
    * Model Changes: YES
    * Training: YES
    * Data Type: Raw text
    * Data Volume: Gigabytes
    * Cost: $$$$
    * Time: Weeks
    * Skill: High
    * Use When: Domain expertise needed
  * **Multi-Task Learning**
    * Model Changes: YES
    * Training: YES
    * Data Type: Multi-task dataset
    * Data Volume: High
    * Cost: $$$
    * Time: Weeks
    * Skill: High
    * Use When: Multiple related tasks
  * **Meta-Learning**
    * Model Changes: YES
    * Training: YES
    * Data Type: Many tasks
    * Data Volume: Very High
    * Cost: $$$$
    * Time: Weeks-Months
    * Skill: Very High
    * Use When: Research, many new tasks
  * **Knowledge Distillation**
    * Model Changes: YES (student)
    * Training: YES
    * Data Type: Teacher outputs
    * Data Volume: Moderate-High
    * Cost: $$$
    * Time: Days-Weeks
    * Skill: High
    * Use When: Need small/fast model
  * **Few-Shot Learning (Training)**
    * Model Changes: YES
    * Training: YES
    * Data Type: Labeled
    * Data Volume: 5-50
    * Cost: $$
    * Time: Hours-Days
    * Skill: High
    * Use When: Very limited data

---

**Esta es la jerarquía COMPLETA en formato bullets. ¿Necesitas alguna sección expandida o clarificada?** 🎯
