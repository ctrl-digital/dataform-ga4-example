# Google Analytics 4 Data Transformation with Dataform

This repository contains an example for using Dataform for transforming Google Analytics 4 data into tables with structure data.

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
- Create a new Dataform project and link it to a repository.
- Configure your BigQuery credentials in Dataform to access your GA4 dataset.
- Coppy the content of this repository

**Configure workflow_settings.yaml**:

- defaultProject: Change to your project ID
- defaultLocation Change to your location

**Configure constants.js**:

- GA4_PROJECT: Project ID in GCP where your GA4 data is located
- GA4_DATASET: Dataset in BigQuery where your GA4 data is located

**Configure Google Ads Transfer for campaign data**:

- If you intend to use the Google Ads Transfer to join in correct campaign data based on gclid parameter
- Set up the transfer of Google Ads data to BigQuery https://cloud.google.com/bigquery/docs/google-ads-transfer
- GADS_PROJECT: Project ID in GCP where your Google Ads data from Transfer is located
- GADS_DATASET: Dataset in BigQuery where your Google Ads data from Transfer is located
- GADS_ACCOUNT: AccountID for you Google Ads Account
- In the gclid.sqlx, adjust the code so you use the ClickStats and Campaign SQL code instead of the placeholder code 





