---
created: 2026-06-19 18:27
modified: 2026-06-19 18:28
tags:
  - AWS
  - AI
  - AIF-C01
title: Amazon Textract
aliases: Amazon Textract
publish: true
folder: AI
---
# Amazon Textract

## Main Concept

Amazon Textract is a fully managed ML service that automatically extracts text, handwriting, and structured data from scanned documents, PDFs, and images. It goes beyond simple OCR (Optical Character Recognition) — it also understands the structure of documents, extracting data from forms and tables in addition to plain text.

> [!TIP] Key Idea
> 
> - **Input** → scanned documents, PDFs, images (photos of forms, IDs, invoices, etc.).
>     
> - **Output** → extracted text, handwriting, form fields, and table data as structured data files.
>     
> - **Key differentiator** → not just OCR — understands document structure (forms, tables, key-value pairs).
>     

## What It Extracts

```
Plain text        → any printed text in a document or image
Handwriting       → handwritten notes, signatures, filled forms
Forms             → key-value pairs (field name + field value)
Tables            → structured tabular data with rows and columns
IDs and documents → specific fields from identity documents (name, DOB, ID number)
```

## Common Exam Scenarios

> [!TIP] Key Idea: When the answer is Amazon Textract
> 
> - "Automatically extract patient information from scanned medical records" → Amazon Textract.
>     
> - "Process thousands of paper invoices and extract line items into a database" → Amazon Textract.
>     
> - "Read a driver's license photo and extract the date of birth and document ID" → Amazon Textract.
>     
> - "Extract data from tax forms submitted as PDF scans" → Amazon Textract.
>     
> - Any scenario involving **extracting text or data from documents, scans, or images** → Amazon Textract.
>     

## Use Cases by Industry

```
Financial services  → process invoices, financial reports, loan applications
Healthcare          → extract data from medical records, insurance claims
Public sector       → process tax forms, ID documents, passports
Legal               → extract clauses and data from scanned contracts
```

## Critical Distinctions

```
Amazon Textract    → EXTRACTS text and data FROM documents and images
                     (reads what is written in a document)

Amazon Comprehend  → UNDERSTANDS text meaning
                     (sentiment, entities, topics — needs text already extracted)

Amazon Rekognition → ANALYZES images for visual content
                     (objects, faces, scenes — not document text extraction)
```

> [!example] A common pipeline combining all three
> 
> Scanned medical record arrives as an image. Step 1 → Amazon Textract extracts the text from the image. Step 2 → Amazon Comprehend analyzes the extracted text for medical entities (drug names, diagnoses). Step 3 → Results are stored and flagged for review.
> 
> Textract reads the document. Comprehend understands what it says. They are complementary, not interchangeable.

> [!example] Analogy: A very fast, very accurate data entry clerk
> 
> Imagine hiring a clerk to manually read thousands of scanned forms and type all the data into a spreadsheet. Amazon Textract does the same job — instantly, at any scale, without errors from fatigue — extracting every field, value, and table from every document automatically.

## Exam Scope

You will not be asked how to implement Textract. You need to:

- Know what Textract does (extract text, handwriting, forms, and tables from documents and images).
- Know it understands document structure — not just plain text extraction (OCR).
- Recognize the industries and use cases it serves.
- Distinguish Textract from Comprehend (extract vs understand) and Rekognition (documents vs visual content).

## Exam Domain

- Domain 1, Task Statement 1.2: "Explain the capabilities of AWS managed AI/ML services."
- Domain 1, Task Statement 1.2: "Identify examples of real-world AI applications."

## Related Notes

- [[AWS AI/ML Managed Services — Index]]
- [[Amazon Comprehend]]
- [[Amazon Rekognition]]
- [[Natural Language Processing (NLP)]]
- [[Computer Vision]]
- [[OCR - Optical Character Recognition]]