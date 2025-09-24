---
id: 20250917T103414-data-types-and-formats-in-ai
aliases:
  - Data type and formats in AI
tags: []
created: 2025-09-17 10:34
folder: AI
modified: 2025-09-24 07:55
publish: true
title: Data types and formats in AI
---

# Data types and formats in AI

In AI, we can classify data according to how it is structured, labeled, type or purpose

## Data classification by structure

### Structured Data

- It's organized in rows and columns (like spreadsheets/databases)
- It's easy to process with traditional Machine Learning algorithms
- Some formats are CSV files, SQL databases, Excel sheets
- Examples: Customer records, financial transactions, sensor readings.

### Semi-structured data

- It has some type of organization but not rigid table format
- It may needs to be parsed, but contains valuable structured elements.
- Some formats are Key-value pairs, nested structures
- Examples JSON files, XML, web logs, emails and metadata.

### Unstructured Data

- Data which doesn't have any predefined organization or format, just raw data.
- It requires specialized processing, like [[20250907T2005-natural-language-processing|NLP]] or [[20250907T113120-computer-vision|Computer Vision]]
- Some examples are text documents, images, videos or audio files.
- Up to 80% of the enterprise data is unstructured.

## Data classification by presence of labels

Depending on the type of Learning we are applying data can have labels or not, for instance:

### Labeled Data

- It's used on [[Supervised Learning]] to identify the "correct answer" or target outputs that you want your model to learn to predict.
- Examples: A photo of an animal, has a label "dog" or "cat", so the model can predict the correct label for new photos.

### Unlabeled data

- It's used in [[Unsupervised Learning]] when the data has no label to tell the model the "correct answer"
- Example: you group similar images and the goal is the model can find patterns

## Data Type or Formats

Depending on the AI application, data can be presented on different types and formats, or a combination of them

### Numerical Data

- Data can be Continuous (Like temperature or height)
- Data can be Discrete (number of customers, age in years)

### Categorical Data

- It can be Nominal: without natural order (color, nationality, etc.)
- It also can be Ordinal, like sizes, ratings, age.

### Text Data

- Examples: reviews, documents, social media posts, emails
- It requires tokenisation, cleaning, vectorization for AI models

### Tabular Data

- Different type of data (numerical, categorical, text, etc..) can be presented in form of a table.

### Time-series Data

- Data points collected over time intervals
- Some examples are: weather data, website traffic, room capacity over time
- In this type of data, the order matters

### Media Data

- Includes:
  - Images: Pixel values, requires [[20250907T113120-computer-vision|Computer Vision]] techniques
  - Audio: Sound waves, requires signal processing
  - Video: Combines images and audio over time
