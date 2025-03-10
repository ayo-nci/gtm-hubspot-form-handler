# HubSpot Form Tracking for Google Tag Manager

A universal solution for tracking HubSpot form submissions in Google Tag Manager that works with both legacy and new form implementations.

## The Problem

HubSpot has been evolving their form implementation, creating compatibility challenges for tracking form submissions:

- **Legacy forms** built directly into the page use one communication method
- **New V3/V4 forms** loaded within iframes use different messaging systems
- **V4 API** implementations use custom DOM events

This makes it difficult to maintain consistent form tracking across websites with different HubSpot implementations.

## The Solution

This script provides a unified approach to capture form submissions from all HubSpot form types and send them to the Google Tag Manager dataLayer with a consistent event format.

## Implementation

1. Add `gtm-hubspot-form-handler.js` to your website either directly or through Google Tag Manager's Custom HTML tag
2. Create a GTM trigger that listens for the custom event `hubspot-form-success`
3. Create your conversion tracking tags using this trigger
4. Test with both legacy and new form types

## How It Works

The script:

1. Listens for iframe messages from both legacy and new forms
2. Listens for DOM events from the newest form API
3. Prioritizes getting the form ID from the container element's data attribute
4. Pushes a consistent event format to the dataLayer for GTM to capture

## Example Usage in GTM

```
Trigger Type: Custom Event
Event Name: hubspot-form-success
```

This trigger can then be used for conversion tags, custom HTML events, or any other tags that need to fire on successful form submissions.

## License

Free for use. 

