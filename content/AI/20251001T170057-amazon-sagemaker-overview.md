---
id: 20251001T170057-amazon-sagemaker-overview
aliases:
  - Amazon SageMaker Overview
tags:
  - AI
  - amazon-sagemaker
created: 2025-10-01 17:00
modified: 2025-10-09 06:30
folder: AI
publish: true
title: Amazon SageMaker Overview
---

## What is Amazon SageMaker?
- SageMaker is AWS's platform for **building your own custom AI/ML** models from scratch.
- It contains all the tools you need to:
	- **Prepare** your data
	- **Build** a model
	- **Train** the model
	- Test It
	- **Deploy** it to production
- SageMaker has different versions for different skill levels (Canvas, Autopilot, Studio)
- Depending the steps you are in the process of building your model, SageMaker has different tools that can help you in the process.

## Key components

### SageMaker Studio

- Integrated development environment (IDE) for ML
- Jupyter notebooks
- Visual tools for ML workflow

### SageMaker Canvas

- No-code ML
- Visual interface
- AutoML capabilities
- Business analysts can build models

### SageMaker Data Wrangler

- Data preparation
- Visual data transformation
- Feature engineering

### SageMaker Autopilot

- Automated ML (AutoML)
- Automatically builds, trains, and tunes models
- Generates explainable models

### SageMaker Training

- Distributed training
- Built-in algorithms
- Bring your own algorithm
- Spot instance training

### SageMaker Inference

- Real-time endpoints
- Batch transform
- Serverless inference
- Multi-model endpoints

### SageMaker Pipelines

- ML workflow orchestration
- CI/CD for ML (MLOps)

### SageMaker Feature Store

- Centralized feature repository
- Online and offline feature storage

### SageMaker Model Monitor

- Monitor model performance
- Detect data drift
- Model quality monitoring

### SageMaker JumpStart
- Pre-trained models
- Solution templates
- One-click deployment of popular models

## High level process of building a model

### Data Preparation & Feature Engineering
- You have: Raw messy data (CSV files, images, text, etc.)
- SageMaker helps: Clean it, transform it, organize it
- Tools: 
  - SageMaker Data Wrangler
  - SageMaker Feature Store 

### Build the Model
- You want: A Model that predicts something
- SageMaker provides:
  - Pre-build algorithms (ready recipes)
  - Option to write your own code
  - AutoML (automatic model building)
- Tools depends of your skills
  - SageMaker Canvas (No Code - Visual Interface)
  - SageMaker Autopilot (Low Code - Automated ML)
  - SageMaker Studio (Full Code - Complete Control)
  - SageMaker JumpStart (Pre-built Models)

### Train the Model
- You want: Teach (train) the model by showing examples
- SageMaker provides: Power computers (GPUs) to do the training
- Tool: SageMaker Training Jobs

### Test & Evaluate
- You want: Test if the model actually works well
- SageMaker provides: Tools to measure accuracy
- Tools: 
  - SageMaker Model Monitor (for production monitoring)
  - SageMaker Model Evaluation (Built into SageMaker Training Jobs)
  - SageMaker Clarify (for bias and fairness)
  - SageMaker Experiments
  - SageMaker Model Cards
  - SageMaker Debugger

> [!NOTE]
> Evaluation happens at multiple stages (during the training, after training, in production)


### Deploy to Production
- You want: Make your model available for real use
- SageMaker provides: Hosting infrastructure
- Tool: SageMaker Endpoints (Part of SageMaker Inference)


