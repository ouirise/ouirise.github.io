touch .continue/checks/security-review.md
```

Now that we have a new directory and file, let's fill in the required information:

```markdown
# src/main.py

tool

--- 

name: Security Review 
description: Flag hardcoded secrets and missing input validation
---
Review this pull request for security issues.
Flag as failing if any of these are true:
- Hardcoded API keys, tokens, or passwords in source files
- New API endpoints without input validation
- SQL queries built with string concatenation
- Sensitive data logged to stdout
If none of these issues are found, pass the check.
```

**Writing Checks**

With our new file created and populated with required information, we can now write concrete pass/fail criteria.

Let's assume we have a function that checks if API keys are hardcoded in source files. We'll implement this as part of our `security-review` check:

```python
import re

def is_api_key_hardcoded(file_content):
    # Check for hardcoded API keys, tokens, or passwords
    api_keys_pattern = r'API_KEY|token|password'
    if re.search(api_keys_pattern, file_content):
        return True
    else:
        return False
```

Next, we'll add this function to our `security-review` check:

```markdown
---
name: Security Review 
description: Flag hardcoded secrets and missing input validation
---
Review this pull request for security issues.
Flag as failing if any of these are true:
- Hardcoded API keys, tokens, or passwords in source files
  - Use the following regular expression to match hardcoded API keys:
    ```
    api_keys_pattern = r'API_KEY|token|password'
```
- New API endpoints without input validation
- SQL queries built with string concatenation
- Sensitive data logged to stdout
If none of these issues are found, pass the check.