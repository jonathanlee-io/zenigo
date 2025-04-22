# Zenigo - All-in-One Release Management & Feedback Platform

**Zenigo** is a performant, open-source platform designed for developers who need reliable and fast feature flagging, release management, **and user feedback collection** without the complexity. Built with an emphasis on **simplicity and low-latency response times**, Zenigo helps you take control of your releases, experiment safely, gather insights, and deliver value to your users faster. It provides an integrated solution for the entire release lifecycle.

## Why Zenigo?

*   **Blazing Fast & Scalable:** Engineered for high performance and low latency, ensuring flag evaluations and feedback processing remain fast, even as your usage grows. Avoid the slowdowns experienced with other solutions.
*   **Simple & Intuitive:** Get started quickly with a clean user interface and straightforward concepts. Spend less time managing flags and feedback, and more time building features.
*   **Open Source & Transparent:** Benefit from the transparency and flexibility of open-source. Host it yourself or use our upcoming cloud offering. Contribute, customize, and trust the code you run.
*   **Effortless Feature Flagging:** Easily toggle features on or off for specific users, segments, or percentages without deploying new code.
*   **Controlled Rollouts:** Gradually release new features, monitor their impact, and roll back instantly if needed.
*   **Targeted Releases:** Define user segments based on various attributes for tailored experiences.
*   **A/B Testing Ready:** Provides the foundation to test feature variations and make data-driven decisions.
*   **Integrated Feedback Loop:** Collect valuable user feedback directly within the platform to close the loop and inform your development cycle.
*   **Reduced Risk:** Minimize the impact of issues by controlling feature exposure and gathering user sentiment quickly.

## Key Features

*   Lightweight & Performant Core
*   Intuitive Management Dashboard
*   Flexible Feature Flag Types (Boolean, Multivariate, Percentage-based)
*   Advanced User Segmentation
*   User Feedback Collection & Management
*   Real-time Flag Updates (via Server-sent events (SSE))
*   SDK for JavaScript/TypeScript
*   Audit Logs
*   Role-Based Access Control (RBAC)

## Tech Stack
This project is a NestJS / Angular project.

A monorepo of monorepos.
API is NestJS microservices with an API Gateway, all sharing code using NestJS monorepo functionality.
UI is Angular Nx Monorepo, all UI applications share code using Nx monorepo functionality.
