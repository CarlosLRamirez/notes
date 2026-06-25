---
created: 2026-06-19 17:57
modified: 2026-06-24 06:31
tags:
  - AWS
  - AI
  - AIF-C01
title: Amazon Rekognition
aliases: Amazon Rekognition
publish: true
folder: AI
---

## Main Concept

Amazon Rekognition is a fully managed computer vision service that uses ML to analyze images and videos — identifying objects, people, text, scenes, and faces automatically. No ML expertise or model training required for standard capabilities.

> [!TIP] Key Idea
> 
> - **Input** → images or video files.
>     
> - **Output** → labels, attributes, detections, and analysis about the visual content.
>     
> - **Underlying technology** → computer vision powered by deep learning.
>     

## Core Pre-built Capabilities

### Object and Scene Labeling

Detects and labels what is in an image — objects, animals, activities, environments.

> [!example] Example
> 
> Image of a mountain trail: labels → Person, Rock, Outdoors, Mountain Bike, Crest.
> 
> Use case: automatically tag and categorize large media libraries without human review.

### Face Detection and Analysis

Detects faces in images and extracts attributes from them.

```
Attributes detected: gender, age range, emotions (happy, sad, angry),
eyes open/closed, smiling, wearing glasses, and more.
```

> [!example] Example
> 
> Use case: analyze audience photos at an event to understand demographics and emotional response.

### Face Search and Verification

Compares a detected face against a database of known faces — for identity verification or people counting.

> [!example] Example
> 
> Use case: verify that the person in a selfie matches the ID photo on file during onboarding.

### Celebrity Recognition

Automatically identifies well-known public figures in images and videos.

> [!example] Example
> 
> Rekognition detects Werner Vogels in a conference photo without any prior training.
> 
> Use case: automatically tag celebrity appearances in media archives.

### Text Detection

Reads and extracts text that appears within images or video frames.

> [!example] Example
> 
> Use case: detect racer numbers on vehicles in a sports broadcast to track positions.

### Face Liveness

Determines whether the face shown in a video call or photo is a real, live person — not a photo, mask, or deepfake.

> [!example] Example
> 
> Use case: prevent identity fraud during remote onboarding by verifying the person is physically present.

### Pathing

Tracks the movement path of people or objects across video frames over time.

> [!example] Example
> 
> Use case: sports analytics — track the path a player or ball takes across the field during a game.

## Two Custom Capabilities

### Custom Labels

Train Rekognition to recognize YOUR specific objects, logos, or products that the pre-built model does not know about. Requires only a few hundred labeled images.

> [!TIP] Key Idea
> 
> - **Pre-built labeling** → detects general objects (person, car, tree).
>     
> - **Custom Labels** → detects YOUR specific objects (your logo, your products, your proprietary categories).
>     
> - **Process** → label images → store in Amazon S3 → train Custom Labels model → deploy.
>     

> [!example] Example
> 
> The NFL uses Rekognition Custom Labels to automatically detect their logo appearing in social media images posted by fans — something the generic model cannot do since it does not know what the NFL logo looks like.
> 
> Process: upload hundreds of labeled logo images to S3 → train Custom Labels → analyze social media images → Rekognition flags every image containing the logo.

### Content Moderation

Automatically detects inappropriate, unwanted, or offensive content in images and videos. Reduces the volume of content requiring human review to only 1–5% of total volume.

> [!TIP] Key Idea
> 
> - **Rekognition** → handles the automated moderation of 95–99% of content.
>     
> - **Amazon Augmented AI (A2I)** → handles the human review of the remaining 1–5% that Rekognition is uncertain about.
>     
> - **Feedback loop** → human review results from A2I can be fed back into retraining Rekognition, improving accuracy over time.
>     

> [!example] Example: Content moderation in a chatbot pipeline
> 
> User requests an image from a generative AI chatbot → chatbot generates the image → image is sent to Rekognition DetectModerationLabels API → if labels are clear of harmful content, image is returned to the user → if flagged, image is blocked or sent for human review via Amazon A2I.

### Custom Moderation Adapter

Extends the default content moderation capability with your own labeled images — defining what is acceptable or not acceptable specifically for your use case or audience.

> [!example] Example
> 
> A children's education platform has stricter content standards than the default moderation model. A Custom Moderation Adapter trains Rekognition on the platform's specific standards — flagging content that the default model would pass.

## Common Exam Scenarios

> [!TIP] Key Idea: When the answer is Amazon Rekognition
> 
> - "Automatically detect inappropriate images uploaded by users" → Content Moderation.
>     
> - "Verify a user's identity by comparing their selfie to their ID photo" → Face Search and Verification.
>     
> - "Detect our company logo appearing in social media posts" → Custom Labels.
>     
> - "Analyze sports footage to track player movements" → Pathing.
>     
> - "Prevent fake identity documents during remote onboarding" → Face Liveness.
>     
> - "A moderation system needs human review for uncertain cases" → Rekognition + Amazon A2I.
>     
> - Any scenario involving **analyzing images or video with computer vision** → Amazon Rekognition.
>     

## Rekognition + Amazon A2I Integration

> [!TIP] Key Idea
> 
> Rekognition and Amazon Augmented AI (A2I) are designed to work together for content moderation:
> 
> - **Rekognition** → automated decision for clear cases (95–99% of volume).
>     
> - **A2I** → human review for uncertain cases (1–5% of volume).
>     
> - **Feedback loop** → human decisions feed back into Rekognition training, continuously improving accuracy.
>     

## Exam Scope

You will not be asked how to implement Rekognition. You need to:

- Know what Rekognition does (computer vision — images and video).
- Recognize all core capabilities and match them to scenarios.
- Distinguish Custom Labels (recognize your objects) from Content Moderation (filter harmful content).
- Know that A2I handles the human review layer for uncertain moderation cases.
- Know the Custom Moderation Adapter extends default moderation for specific use cases.
- Know that content moderation reduces human review to 1–5% of content volume.

## Exam Domain

- Domain 1, Task Statement 1.2: "Explain the capabilities of AWS managed AI/ML services (for example, **Amazon Rekognition**)."
- Domain 1, Task Statement 1.2: "Identify examples of real-world AI applications (for example, **computer vision**)."
- Domain 4, Task Statement 4.1: content moderation connects to responsible AI and safety tools.

## Related Notes

- [[20260602T1055-aws-ai-ml-managed-services-index|AWS AI/ML Managed Services — Index]]
- [[20260619T1838-amazon-augmented-ai-a2i|Amazon Augmented AI (A2I)]]
- [[Amazon S3]]
- [[20250907T113120-computer-vision|Computer Vision]]
- [[Content Moderation]]
- [[Custom Labels vs Pre-built Models]]
- [[Responsible AI]]
