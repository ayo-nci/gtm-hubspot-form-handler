/**
 * HubSpot Form Tracking for Google Tag Manager
 * MIT License - Copyright (c) 2025 Ayoola Idris-Animashaun
 * https://github.com/ayo-nci/hubspot-form-tracking-gtm
 */

<script type="text/javascript">
    //window.dataLayer = window.dataLayer || [];
    window.addEventListener("message", function (event) {
        if (!event.data) return;
        // For old legacy forms (v1)
        if (event.data.type === 'HS_CTA_FORM_SUBMITTED') {
            window.dataLayer.push({
                'event': 'hubspot-form-success',
                'hs-form-guid': event.data.id || event.data.formId
            });
        }
        // For recent legacy forms (v3)
        if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
            var formContainer = document.querySelector('.hs-form-frame');
            var formId = formContainer ? formContainer.getAttribute('data-form-id') : event.data.id;
            window.dataLayer.push({
                'event': 'hubspot-form-success',
                'hs-form-guid': formId
            });
        }
        
    });
    // For the latest forms (v4 api)
    if (document) {
        document.addEventListener('hs-form-event:on-submission:success', function (event) {
            var formContainer = document.querySelector('.hs-form-frame');
            var formId = formContainer ? formContainer.getAttribute('data-form-id') :
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
