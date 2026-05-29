---
created: 2026-04-26 06:56
modified: 2026-05-22 17:35
tags:
  - AI
  - machine-learning
  - AIF-C01
title: Reinforcement Learning (RL)
aliases:
  - Reinforcement Learning (RL)
  - Reinforcement Learning
publish: true
folder: AI
---

## Main Concept

Reinforcement Learning is a type of [[20260129T1102-machine-learning-ml|Machine Learning]] where an **agent** learns to make decisions by interacting with an **environment**. The agent receives feedback in the form of **rewards** or penalties for each action it takes, and over time learns the strategy (**policy**) that maximizes cumulative reward.

Unlike [[20260421T0644-supervised-learning|Supervised Learning]], there are no labeled examples — the agent discovers the right behavior entirely through trial and error.

## Key Concepts

| Concept         | Description                                                 |
| --------------- | ----------------------------------------------------------- |
| **Agent**       | The learner or decision-maker                               |
| **Environment** | The external system the agent interacts with                |
| **State**       | The current situation of the environment                    |
| **Action**      | A choice made by the agent                                  |
| **Reward**      | Feedback from the environment based on the action taken     |
| **Policy**      | The strategy the agent uses to select actions given a state |

## How It Works

![[Pasted image 20260426T071357.png]]

1. The Agent observes the current **State** of the Environment
2. It selects an **Action** based on its current Policy
3. The Environment transitions to a **new State** and returns a **Reward**
4. The Agent updates its **Policy** based on the reward received
5. This loop repeats — **Goal:** maximize cumulative reward over time

## Example — Robot in a Maze

**Scenario:** Train a robot to escape a maze using the shortest path possible.

![[Pasted image 20260426T065801.png]]

**Reward structure:**

- Move to a free cell → **-1** point
- Hit a wall → **-10** points
- Reach the exit → **+100** points

![[Pasted image 20260426T070023.png]]

At the start, the robot has no knowledge of the maze and explores randomly, hitting walls and losing points. After simulating many times, it learns which paths cost fewer points and which lead to the exit.

![[Pasted image 20260426T070739.png]]

Eventually the agent learns the optimal route — the one that reaches the exit with the minimum number of steps. It's the equivalent of letting an AI play a video game hundreds of times: at first it loses constantly, but eventually it masters the game.

## Context — Why It Matters for the Exam

Reinforcement Learning is distinct from supervised and unsupervised learning in a fundamental way: **there is no dataset**. The model generates its own experience by interacting with an environment. This makes it well-suited for sequential decision problems where the right answer isn't known in advance.

**[[20251016T034417-rlhf|RLHF (Reinforcement Learning from Human Feedback)]]** applies this same principle to fine-tune LLMs — human raters provide reward signals that teach the model to produce better responses.

## Applications

- **Gaming** — AlphaGo, chess engines, video game AIs
- **Robotics** — navigation and object manipulation in dynamic environments
- **Finance** — portfolio management and trading strategies
- **Healthcare** — optimizing treatment plans
- **Autonomous Vehicles** — path planning and real-time decision-making

---

## Related Concepts

- [[20260129T1102-machine-learning-ml|Machine Learning (ML)]]
- [[20260421T0644-supervised-learning|Supervised Learning]]
- [[20260422T1813-unsupervised-learning|Unsupervised Learning]]
- [[20251016T034417-rlhf|RLHF — Reinforcement Learning from Human Feedback]]
- [[20260129T1102-deep-learning-dl|Deep Learning (DL)]]

## Exam Domain (AIF-C01)

**Domain 1 — Fundamentals of AI and ML**

- Task Statement 1.1: Types of ML — supervised, unsupervised, and reinforcement learning.

---

## Links

- [AI Agent Learns to Escape (deep reinforcement learning)](https://youtu.be/2tamH76Tjvw?si=AqbPg0LL-tnSWg6u)
