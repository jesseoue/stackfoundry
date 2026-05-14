---
name: openfeature
description: OpenFeature flag guidance for installed feature flag modules.
---

# Openfeature Guidance

- Keep provider adapters behind the OpenFeature interface.
- Document flag keys and fallback values.
- Avoid evaluating private traits on the client unless intended.
- Verify default behavior when provider is unavailable.
