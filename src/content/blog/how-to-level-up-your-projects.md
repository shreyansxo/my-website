---
title: How To Level Up Your Projects
description: If you want to stand out from others in this job market, you need to level up your projects.
tags: ["coding"]
date: 2024-12-26
---

## Table of Contents

1. Landing Page
2. Open Source
3. User Management
4. Documentation
5. Security
6. Offline First
7. Custom Domain
8. Share In Public

### Landing Page

If you are building a software project, whether a web app or mobile app. You need a landing page. It makes your project look more legit. It gives your users some info about your project before using it. You can use no-code tools.

A landing page should mandatorily contain these sections:

- **Hero section:** It should sum up what your project is at first glance.
- **Feature List:** It should either be the user's workflow of your app through features or simply display app features in a grid using appropriate icons and small descriptions.
- **Pricing Details:** If your app is paid, be clear with the pricing. Compare the perks of each pricing plan. Prefer one-time payments over a subscription model for payments. Let the user first try the app without payment just to test the app.
- **Testimonials:** Once you share your app with others, get their feedback and testimonials and display them in your app. It adds a good impression.
- **FAQs:** Answer common questions regarding your app in a concise manner. If you don't have questions, explain your project to ChatGPT and ask it to generate FAQs.
- **Privacy Policy:** If you are deploying your app to real users, it is mandatory. Ask ChatGPT to generate this. It would work fine.
- **Terms of Service:** Like Privacy Policy, it is something that can be generated using ChatGPT. Keep things transparent; don't annoy your users.

### Open Source

Whatever you are building, just push the code to GitHub as a public repository. Nobody is going to steal your app. Make sure you are not initializing a git repo after building your app. It is something you do when you start working. Push changes incrementally after making small changes to your code with an informative commit message.

Add an appropriate license to your git repo; you can ask ChatGPT for it. In most of the cases, the MIT License works fine.

Make sure your README.md file is informative; include these points:

- **Description:** What is your app? What problem are you solving? Answer such questions in your description.
- **Installation Guide:** With and without Docker, add an installation guide with relevant code snippets wherever needed with commands to run the project and where to expect the output.
- **How To Use Guide:** Explain user workflow in simple words with respect to features in your app.
- **Documentation:** Link to your documentation website (if you have one; you should).
- **Contribution Guide:** Write a small guide for someone interested in collaborating in your project, with a guide to git commit message syntax, code formatting standards, etc. Later you can add a dedicated CONTRIBUTION.md file for this.

### User management

Authentication and authorization are really important. Hash your passwords. Manage user roles and use a data access layer for better security.

If a recruiter or any user wants to test your app, they won't like to put their real credentials in for privacy reasons. Make sure your app is usable without authentication, and only some parts of it need authentication required. Another approach would be to add anonymous login. It is easy to implement and gets the job done.

Don't forget to add OAuth2 provider authentication like Google, Apple, Facebook, etc. It's just convenient for the user and is more secure than email + password authentication.

If you plan to add email and password authentication, then follow these steps:

- **Sanitize Inputs:** To avoid XSS attacks or SQL injection attacks, sanitize them and display appropriate error messages wherever needed.
- **Email Verification:** Send an email to your users after signing up to your application to verify their account and block access to some features till they do that.
- **Forgot Password:** Your users will forget their passwords; it is expected. Send an email to reset their password.
- **Reset Password:** This is different from Forget Password; here the user is authenticated. It should be easy to implement.
- **Switch Accounts:** If you can manage to add this, it would look really great. It is convenient for users. You can ask ChatGPT how to do that.
- **Delete Account:** Give freedom to the user to delete their account. It is easy to implement.

### Documentation

If you plan to share your project with others. A documentation site is a must. You can explain everything in your app in that documentation site. You can open-source it for improvements from the community. If someone gets stuck using your application, they can refer to the documentation site. It's just so convenient.

Use some static site generator framework like Docusaurus, Hugo, MkDocs, etc. What they do is they convert your markdown files into an HTML website.

If your app is consuming data from a backend API, make sure you have set up openapi.json Swagger docs for that API. It makes things so clear, like how many endpoints are available and all the combinations of responses certain endpoints can return. If you are using a tool like Postman for testing your API, why not include Postman collection files in your project?

If you are using a database in your project. Use tools like [dbdocs.io](https://dbdocs.io/) for visualizing your database tables/collections.

Testing is really important. It acts like documentation inside code. There are four types of tests:

- **Unit Testing:** It is the process where you test the smallest functional unit of code.
- **Integration Testing:** It is a type of software testing in which the different units, modules, or components of a software application are tested as a combined entity.
- **End-to-End Testing:** It verifies that all components of a system can run under real-world scenarios. It runs your application like a real user would interact with it.
- **A/B Testing:** You ship new experimental features to some part of users and collect their feedback and later implement it for all users. It doesn't really come under traditional testing, but it is necessary if your app grows big and has tons of users.

### Security

Security is something that should be taken care of even if you have no users. Your users won't trust your application if you take security lightly.

Here are some security tips that can make your application safer:

- **HTTPS:** This goes without saying; your website and your API should be under HTTPS, WSS, and SMTPS. It encrypts the data by default that is being sent from server to client or vice versa.
- **Authorization:** Use a data access layer to block certain features of your application from users without certain privileges.
- **Rate Limit:** To prevent a DDoS attack, add a rate limit to block users who are spamming your application.
- **Bot Protection:** Use services like [Cloudflare Turnstile](https://www.cloudflare.com/en-in/application-services/products/turnstile/) or [hCaptcha](https://www.hcaptcha.com/) to verify whether your users are real or not.
- **Input Validation:** Make sure your user input is validated and sanitized to avoid XSS attacks or SQL injection attacks.
- **Error Handling:** Handle all possible exceptions in your application.
- **OAuth2:** It is much more secure and reliable than email and password authentication.
- **API Key:** Add an X-API-KEY header with a valid API key for more secure communication with the server.
- **Additional Security:** You can use this service called [Arcjet](https://arcjet.com/). You can block disposable emails with this and much more.

### Offline First

Having offline-first as a feature is really convenient. Your app loads instantly by using pre-saved data from a local database and then updates the main database when an active internet connection is available.

There are various ways of implementing offline-first in your application:

- [**Powersync:**](https://www.powersync.com/) It is a managed service, but you can self-host it at the same time. It takes care of merge conflicts between your offline-stored data and the data in your main database for you. They have SDKs for various platforms that you can check. Overall a good option. Currently they support Postgres, MySQL (alpha), and MongoDB (alpha).
- [**Watermelon DB:**](https://watermelondb.dev/docs) It is a much more mature solution compared to Powersync. The only problem is that you have to manage merge conflicts between your local database and the main database by yourself. It is open source and has good documentation.
- [**Replicache:**](https://replicache.dev/) It is a good solution for the web. It is another good alternative to Powersync.

### Custom Domain

If you are building an application that real users will use. A .vercel.app or .netlify.app domain doesn't look professional. It is good for starting out, but it is recommended to get a custom domain. It is fine if you don't get a .com or .ai domain; I know they can get expensive. Even a .net, .app, .org, etc. works fine. If you are struggling to get your domain for cheap, you can tweak the name and add certain prefixes/suffixes that go well with your app. Inspirations are [zeptonow.com](https://zeptonow.com/) (now is the suffix here) and [getbootstrap.com](https://getbootstrap.com/) (get is the prefix here).

### Share In Public

If you want people to use your application, then make sure you are sharing your application on these platforms:

- [**Product Hunt**](https://www.producthunt.com/)
- [**Hacker News**](https://news.ycombinator.com/)
- [**LinkedIn**](https://linkedin.com/)
- [**Twitter/X**](https://x.com/)
- [**Reddit (Relevant subreddits for your app)**](https://reddit.com/)
- [**YouTube**](https://www.youtube.com/)
- [**TikTok (If available in your country)**](https://tiktok.com)

Try to get initial users for your application from these platforms. Get their feedback and testimonials, then implement features/fixes accordingly.

Make sure if your application is a web app, then focus on SEO. If you share your web app's link, a relevant open graph image should appear.

Focus on analytics to know from where your users are using your app, how they are using it, and which pages they visited the most and least. Add a utm_source query param when sharing to these platforms to know from where these users have appeared on your application.

You can use these tools for monitoring analytics of your application: -

- [**Posthog**](https://posthog.com/)
- [**Plausible**](https://plausible.io/)
- [**Google Analytics**](https://analytics.google.com/)

Whenever you market your application, try to follow the current trends. See what other indie hackers are doing or, in general, what is happening in this world. Try to create an advertisement using that trend.

So this is it, for now. In the future I will add a part 2 for the blog. In that I will cover more topics that would make your projects look more professional. Happy Hacking.
