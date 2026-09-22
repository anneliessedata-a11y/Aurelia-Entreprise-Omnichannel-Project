# Aurelia Omnichannel Data Science Portfolio

Aurelia is an enterprise-style data-science portfolio built around the analytical chain:

**Business Problem → Data → Analysis → Model → Evidence → Decision**

The portfolio contains **13 connected projects** covering customer analytics, marketing, sales, inventory, operations, profitability, service, payment risk, supply chain and customer voice/NLP.

## Portfolio structure

- **Project 01 — Customer Retention and Churn** — Identify customer behaviours associated with inactivity and churn.
- **Project 02 — Customer Value and Lifetime Value** — Understand customer economic value and the drivers of lifetime value.
- **Project 03 — Campaign ROI and Conversion** — Assess campaign effectiveness and connect marketing exposure with commercial outcomes.
- **Project 04 — Marketing Engagement and Conversion** — Understand engagement behaviour and its relationship with downstream conversion.
- **Project 05 — Sales and Order Value** — Understand order economics, basket composition and commercial performance.
- **Project 06 — Inventory Demand and Stockout Risk** — Identify demand patterns and conditions associated with inventory pressure.
- **Project 07 — Store Performance and Productivity** — Compare store-level commercial activity and operating productivity.
- **Project 08 — Product Profitability and Mix** — Understand product economics, demand and return exposure.
- **Project 09 — Customer Service and Satisfaction** — Understand service demand, resolution patterns and customer outcomes.
- **Project 10 — Returns and Refund Risk** — Identify product, customer and order conditions associated with returns.
- **Project 11 — Payment Risk and Fraud** — Identify payment patterns that warrant risk investigation.
- **Project 12 — Supplier Reliability and Delivery** — Assess supplier shipment reliability and delivery performance.
- **Project 13 — Product Reviews and Customer Voice** — Connect customer feedback with product and customer behaviour.

## Scientific workflow

Each project is organised around:

1. Business Problem
2. Data Audit
3. Data Cleaning
4. Data Profiling
5. Feature Engineering
6. Business EDA
7. Feature Engineering EDA
8. Modelling / Analysis
9. Business Conclusions and Limitations

The repository retains the complete notebook collection, raw/project data, outputs, model artifacts and supporting documentation.

## Portfolio scale

- 13 enterprise-style projects
- 303 Jupyter notebooks
- 86 CSV files
- Customer analytics, LTV, marketing, sales, inventory, store performance, profitability, service, returns, payment risk, supplier reliability and NLP/customer voice
- Reproducible Python/Jupyter workflow with project-level requirements

## Flagship scientific case study

**Customer Retention & Churn** is the flagship case study. It investigates customer behaviours associated with inactivity and churn through the complete Aurelia workflow.

## Important analytical boundary

Project 11 is framed as **payment-failure risk investigation**. The supplied data does not provide a fraud ground-truth label, so the portfolio does not present that project as a validated fraud classifier.

## Website

The repository root contains a static, GitHub Pages-compatible portfolio website. The homepage is intentionally business-facing; technical notebooks and supporting artifacts are accessed through individual project pages.

## Local use

Install the project dependencies:

```bash
pip install -r requirements.txt
```

Then explore the notebooks within each numbered project directory.

## Data and limitations

The repository documents its project data sources and analytical limitations in the project-level documentation. Model outputs should be interpreted in the context of the supplied datasets, feature definitions and documented assumptions.
