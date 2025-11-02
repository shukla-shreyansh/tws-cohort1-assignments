# Security Testing with OWASP ZAP

This document outlines the process and findings of a security scan conducted on `http://testphp.vulnweb.com` using OWASP ZAP.

## Scan Process

1.  **Launch OWASP ZAP:** Start the ZAP application.
2.  **Automated Scan:** Use the "Automated Scan" feature with the URL `http://testphp.vulnweb.com`.
3.  **Spidering:** ZAP spiders the website to discover all pages and resources.
4.  **Active Scan:** ZAP then performs an active scan to find vulnerabilities.
5.  **Review Findings:** The results are analyzed in the "Alerts" tab.

## Vulnerabilities Found

Here are three of the vulnerabilities identified during the scan:

### 1. SQL Injection

-   **Risk:** High
-   **Description:** The application is vulnerable to SQL injection in various input fields. An attacker can execute arbitrary SQL commands on the database.
-   **Example:** A malicious user could use a crafted input like `' OR '1'='1` to bypass authentication or extract sensitive data.

### 2. Cross-Site Scripting (XSS) - Reflected

-   **Risk:** Medium
-   **Description:** The application is vulnerable to reflected XSS. An attacker can inject malicious scripts into a URL, which are then executed in the victim's browser.
-   **Example:** A URL like `http://testphp.vulnweb.com/search.php?test=query<script>alert('XSS')</script>` could be sent to a user, and the script would execute when they click the link.

### 3. Insecure Cookies

-   **Risk:** Low
-   **Description:** The application uses cookies that are not flagged as `Secure` or `HttpOnly`.
-   **Impact:**
    -   **No `Secure` flag:** The cookie can be transmitted over unencrypted channels.
    -   **No `HttpOnly` flag:** The cookie can be accessed by client-side scripts, making it vulnerable to theft via XSS.
