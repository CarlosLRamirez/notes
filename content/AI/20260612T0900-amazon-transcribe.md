---
created: 2026-06-12 09:00
modified: 2026-06-19 17:42
tags:
  - AI
  - ML
  - AWS
  - AIF-C01
title: Amazon Transcribe
aliases: Amazon Transcribe
publish: true
folder: AI
---
# Amazon Transcribe

## Main Concept

Amazon Transcribe is a fully managed speech-to-text service that automatically converts audio into written text. It uses a deep learning technique called ASR (Automatic Speech Recognition) to process speech quickly and accurately — no ML expertise required.

> [!TIP] Key Idea
>
> - **Input** → audio (customer calls, meetings, videos, voice recordings).
>
> - **Output** → text transcription of that audio.
>
> - **Underlying technology** → ASR (Automatic Speech Recognition).

## Core Features

### PII Redaction
Automatically removes Personally Identifiable Information (PII) from transcriptions — names, ages, social security numbers, and other sensitive data are detected and redacted before the text is stored or processed.

> [!example] Example
>
> Customer call audio: "My name is John Smith and my SSN is 123-45-6789."
> Transcribe output with redaction: "My name is [PII] and my SSN is [PII]."
>
> Use case: compliance-sensitive industries (healthcare, finance, legal) that cannot store customer PII in transcription logs.

### Automatic Language Identification
Detects and transcribes multilingual audio automatically — if a speaker switches between French, English, and Spanish in the same recording, Transcribe identifies each language and transcribes accordingly.

> [!example] Example
>
> Use case: a global customer support center receiving calls in multiple languages — no manual routing or pre-selection of language needed.

### Toxicity Detection
Analyzes audio for toxic content using a combination of two signal types:

> [!TIP] Key Idea
>
> - **Speech cues** → tone and pitch of the audio (angry voice, aggressive delivery).
>
> - **Text cues** → the actual words spoken (profanity, hate speech, threats).
>
> - **The combination of both** makes toxicity detection more accurate than text-only analysis.

Toxicity categories detected: sexual harassment, hate speech, threats, abuse, profanity, insult, and graphic content.

> [!example] Example
>
> Use case: a contact center wants to automatically flag abusive customer calls for supervisor review — without a human having to listen to every recording.

## Improving Transcription Accuracy

### Custom Vocabularies
Teaches Transcribe new WORDS — specific terms, brand names, acronyms, and jargon it has never encountered before. You can also provide pronunciation hints.

> [!example] Example
>
> Without custom vocabulary: Transcribe hears "AWS Microservices" and outputs "USA my crow services."
> With custom vocabulary: Transcribe learns the word "microservices" and outputs "AWS Microservices" correctly.
>
> Use case: technical companies, medical practices, legal firms — any domain with specialized terminology.

### Custom Language Models
Teaches Transcribe the CONTEXT of your domain — not new words, but how words relate to each other in your specific field.

> [!example] Example
>
> The word "crow" could mean a bird or a shortening of "microservice" depending on context. Without a custom language model, Transcribe guesses based on general language patterns. With a custom language model trained on your IT documentation, Transcribe understands that in your context "crow" likely means "microservice."
>
> Use case: when your domain uses common words in uncommon ways.

> [!TIP] Key Idea: Custom Vocabularies vs Custom Language Models
>
> - **Custom Vocabularies** → teach new WORDS (brand names, acronyms, jargon).
>
> - **Custom Language Models** → teach CONTEXT (how words relate in your domain).
>
> - **Use both together** → for highest transcription accuracy.

## Use Cases

```
Transcribe customer service calls → quality assurance, compliance  
Automated closed captioning → video accessibility  
Subtitle generation → media and entertainment  
Searchable media archive → generate metadata from audio/video  
Toxicity detection in calls → contact center safety  
Medical dictation → clinical documentation
```
[[Minuta 2026-06-19 Amazon Polly]]
## Critical Distinction: Transcribe vs Polly

```
Amazon Transcribe → Speech TO Text (audio in, text out)  
Amazon Polly → Text TO Speech (text in, audio out)
```

> [!example] Analogy: A court stenographer vs a narrator
>
> Amazon Transcribe is the court stenographer — listens to everything said and writes it down. Amazon Polly is the narrator — reads written text aloud in a natural voice. Opposite directions, complementary services.

## Exam Scope

You will not be asked how to configure Transcribe. You need to:
- Know what Transcribe does (speech-to-text, ASR).
- Recognize the four key features: PII redaction, automatic language identification, toxicity detection, accuracy improvement.
- Distinguish Custom Vocabularies (new words) from Custom Language Models (context).
- Distinguish Transcribe (speech-to-text) from Polly (text-to-speech).
- Toxicity detection is explicitly flagged by Maarek as exam-relevant — know the two signal types (speech cues + text cues) and the categories.

## Exam Domain

- Domain 1, Task Statement 1.2: "Explain the capabilities of AWS managed AI/ML services (for example, **Amazon Transcribe**)."
- Domain 1, Task Statement 1.2: "Identify examples of real-world AI applications (for example, **speech recognition**)."

## Related Notes

- [[20260602T1055-aws-ai-ml-managed-services-index|AWS AI/ML Managed Services — Index]]
- [[20260619T1742-amazon-polly|Amazon Polly]]
- [[20260610T1637-amazon-comprehend|Amazon Comprehend]]
- [[PII and Data Privacy]]
- [[ASR - Automatic Speech Recognition]]
