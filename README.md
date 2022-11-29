# Nextjs Simple Form Template

This project is an example of a simple nextjs form template with basic form fields and API sending data to Airtable.

## Technologies

- Nextjs
- Tailwindcss
- AIRTABLE API

## Using this template

### Vercel / Netlify / AWS Amplify Deployment

1.  Create a project in above platforms, or any other platforms that comes with the similar git-based deployment functionality.
2.  Reference `.env.example` to add your own environment variables into the Vercel / Netlify / AWS Amplify console

### Airtable Configurtions

1. Go to this [Airtable base template](https://airtable.com/shrEx9F5HrXikWXii)
2. Click "Copy base" button on the top left to duplicate the base into your own Airtable workspaces
3. Navigate to your base, look for the path in the url right after "airtable.com/". It is your AIRTABLE_BASE_ID and it should start with "app". For example "app0asshduihCd"
4. If you did not update the table name in your base, the AIRTABLE_TABLE_NAME will be "subscriptions"
5. Locate your AIRTABLE_API_KEY in https://airtable.com/account
