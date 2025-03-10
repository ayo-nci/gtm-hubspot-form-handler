/**
 * HubSpot Form Tracking for Google Tag Manager
 * MIT License - Copyright (c) 2025 Ayoola Idris-Animashaun
 * https://github.com/ayo-nci/hubspot-form-tracking-gtm
 */

<script type="text/javascript">
  //Load datalayer if not available
 // window.dataLayer = window.dataLayer || [];
  
  window.addEventListener("message", function(event) {
    if (!event.data) return;
    
    // For new V3/V4 forms
    if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
      const formContainer = document.querySelector('.hs-form-frame');
      const formId = formContainer ? formContainer.getAttribute('data-form-id') : event.data.id;
      
      window.dataLayer.push({
        'event': 'hubspot-form-success',
        'hs-form-guid': formId
      });
    }
    
    // For legacy forms
    if (event.data.type === 'HS_CTA_FORM_SUBMITTED') {
      window.dataLayer.push({
        'event': 'hubspot-form-success',
        'hs-form-guid': event.data.id || event.data.formId
      });
    }
  });
  
  // For the newest V4 API implementation
  if (document) {
    document.addEventListener('hs-form-event:on-submission:success', function(event) {
      const formContainer = document.querySelector('.hs-form-frame');
      const formId = formContainer ? formContainer.getAttribute('data-form-id') : 
                    (event.detail && event.detail.formId ? event.detail.formId : null);
      
      if (formId) {
        window.dataLayer.push({
          'event': 'hubspot-form-success',
          'hs-form-guid': formId
        });
      }
    });
  }
</script>
