const SELF_REFERRER = `
'mysite.com',
'payment-gateway-to-ignore.com'
`;                                              //Comma seperate list of domains to ignore when looking for refferals

const START_DATE = "'2024-01-01'";              //Start date if you are running a full refresh

const GA4_PROJECT = "your-gcp-project";         //Project ID in GCP where your GA4 data is located
const GA4_DATASET = "analytics_12345678";       //Dataset in BigQuery where your GA4 data is located

const GADS_PROJECT = "your-gcp-project";        //Project ID in GCP where your Google Ads data from Transfer is located
const GADS_DATASET = "google_ads_transfer";     //Dataset in BigQuery where your Google Ads data from Transfer is located
const GADS_ACCOUNT = "987654321";               //AccountID for you Google Ads Account

module.exports = {SELF_REFERRER,START_DATE,GA4_PROJECT,GA4_DATASET,GADS_PROJECT,GADS_DATASET,GADS_ACCOUNT}
