# Google Analytics 4 Data Transformation with Dataform

This repository contains Dataform scripts for transforming Google Analytics 4 data. 

## Introduction

This project provides an example for managing and transforming Google Analytics 4 data using Dataform, an SQL workflow tool that enables teams to manage data operations in BigQuery. By using this repository, you can streamline the transformation of your raw GA4 data into structured tables. 

## Features today
- Create an events table with unnested event parameters
- Create an session table, with two attribution models
- Join data from Google Ads transfer to get correct Campaign name for Google paid ads traffic

## Prerequisites

Before you begin, ensure you have the following:
- Access to Google Cloud Platform (GCP) with BigQuery enabled.
- A Google Analytics 4 account with data you wish to analyze.
- Access to Dataform within your GCP project.

**Configure Dataform**:

- Navigate to Dataform within your Google Cloud project.
- Create a new Dataform project and link it to this repository.
- Configure your BigQuery credentials in Dataform to access your GA4 dataset.
