---
created: 2026-02-27 18:24
modified: 2026-03-10 06:13
tags:
  - AI
  - RAG
title: RAG Vector Databases in Amazon Bedrock
aliases:
  - RAG Vector Databases in Amazon Bedrock
publish: true
folder: AI
---

## Main Concept

When building a Knowledge Base in Amazon Bedrock for RAG, you must select a Vector Database to store the embeddings. AWS offers several native options, each suited for different use cases.

## AWS Native Options

### Amazon OpenSearch Service (Serverless & Managed Cluster)

A search and analytics database designed for real-time similarity queries. It supports storing millions of vector embeddings, scalable index management, and fast nearest-neighbor (kNN) search capability. It is the most common choice for large-scale RAG implementations.

### Amazon Aurora PostgreSQL

A relational database, proprietary to AWS, with vector search extensions. It is a good option when your application already uses Aurora and you want to avoid introducing a new service.

### Amazon Neptune Analytics

A graph database that enables high-performance graph analytics and graph-based RAG (GraphRAG) solutions. It is useful when relationships between data points matter, such as knowledge graphs or fraud detection scenarios.

### Amazon DocumentDB (with MongoDB compatibility)

A document database compatible with MongoDB workloads. Useful when your data is document-oriented and you already work with MongoDB-style queries.

### Amazon RDS for PostgreSQL

A managed relational database with vector search support via the pgvector extension. Similar to Aurora PostgreSQL but on standard RDS infrastructure.

### Amazon S3 Vectors

Cost-effective and durable vector storage with sub-second query performance. This is a newer option not yet explicitly listed in the current exam guide version, so treat it as supplementary context.

## External Options (Beyond Exam Scope)

MongoDB, Redis, and Pinecone are also supported by Amazon Bedrock but are not listed in the exam guide.

## 📊 Comparison: AWS Vector Databases for RAG

| Service | Primary Strength | Engine / Extension | Best for... | Exam Tip (AI Practitioner) |
| :--- | :--- | :--- | :--- | :--- |
| **Amazon OpenSearch** | Scale & Performance | k-Nearest Neighbor (kNN) | Large-scale, real-time similarity search. | The "default" choice for high-scale RAG. |
| **Amazon Aurora** | SQL Integration | PostgreSQL + `pgvector` | Teams already using Aurora who want to avoid new services. | Look for "Relational" + "Vector search". |
| **Amazon Neptune** | GraphRAG | Graph Analytics + Vectors | When the *relationship* between data points is key. | Keywords: "Knowledge Graphs", "Relationships". |
| **Amazon RDS** | Familiarity | PostgreSQL + `pgvector` | Standard managed PostgreSQL workloads. | Similar to Aurora but for standard RDS. |
| **Amazon DocumentDB** | JSON Flexibility | MongoDB compatibility | Document-oriented data and MongoDB-style queries. | Keywords: "Document-oriented", "MongoDB". |
| **Amazon S3** | Cost-Efficiency | Object Storage Vectors | Durable, low-cost vector storage. | Supplementary context (newer option). |

> [!abstract] Key Takeaway for the Exam
> Focus on **identifying** these services as valid "Vector Stores" for Amazon Bedrock Knowledge Bases. You don't need to be a DBA, just know which AWS tools can hold your "embeddings."

## Key Aspects

- The exam expects you to _identify_ which AWS services can serve as vector databases for RAG, not to decide when to use each one.
- The level of detail in this note (kNN, GraphRAG, pgvector) goes beyond what the exam requires, but it is useful context for understanding what differentiates each option.


## Summary/Conclusion

AWS offers multiple vector database options for RAG in Amazon Bedrock. For the exam, focus on recognizing the native AWS services: OpenSearch Service, Aurora, Neptune, DocumentDB, and RDS for PostgreSQL. Understanding their general purpose helps contextualize why multiple options exist.

---

## Related Notes

- [[20260220T0733-rag-and-knowledge-bases-with-amazon-bedrock|RAG and Knowledge Bases with Amazon Bedrock]]
- [[20260226T0616-domain-3-task-statement-3-1-describe-design-considerations-for-applications-that-use-foundation-models|Domain 3 - Task Statement 3.1 - Describe design considerations for applications that use foundation models]]
