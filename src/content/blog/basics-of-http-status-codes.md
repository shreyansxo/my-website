---
title: Basics of HTTP Status Codes
description: Just by using the internet you have probably come across some HTTP
  status codes, such as the 404 status code, but that is just scraping the
  surface of possibilities. There are over 50 unique HTTP status codes across
  five different categories. Luckily, you don’t need to know all of these or
  really even most of them. With this information you can confidently build
  robust APIs that return the proper HTTP status code which will make your API
  easier to use.
tags: ["network", "cs-fundamentals"]
date: 2023-07-08T06:47:40.585Z
---

**These are the 6 most used http status codes I will be covering here.**

## 200 (OK)

The first status code is 200 and is just a generic success status. All this says is that whatever the request was trying to do was successful but it doesn’t give any more information than that. Because of this, the 200 status is the fallback status you should use for any successful request when there is no more specific code to use instead.

# 400 Level Status Codes

400 level status codes represent any error that occurred because of the client. For example, if the client sends along bad or incomplete data to the server.

## 400 (Bad Request)

Similar to the 200 status code, the 400 status code represents a generic bad request. This just means that data being sent to the request (URL params, JSON, etc.) is incorrect, malformed, missing, or in some way unusable by the server. This is the default status message to send back when you have a request that cannot be handled due to the client. For example, if you try to send a request to create a new user but don’t pass a name the server will send a 400 status code to let you know the name field is required.

## 401 (Unauthorized)

The 401 status code is a bit confusing since while it uses the word unauthorized (which means you don’t have permission) this status code actually means you are unauthenticated. The main difference here is that being unauthenticated means you are not logged in or attempted to log in with invalid credentials. This can happen if you pass along an invalid API key or no API key at all when dealing with APIs.

## 403 (Forbidden)

When dealing with permissions you should use the 403 status code. This status informs the client that they do not have permission to perform this request. This should only be returned if the client is sending along valid credentials (such as a valid API key), but lack the permissions to do the action. For example, if a basic user tries to access admin data you would return a 403.

## 404 (Not Found)

This is the most common HTTP status code people are aware of and it just means the resource could not be found. This could be used for example if you try to access a URL that does not exist or if you try to access something from the database that does not exist.

# 500 Level Status Codes

500 level status codes a very similar to the 400 level but 500 level codes deal with errors on the server and not the client.

## 500 (Internal Server Error)

This 500 code just informs the client there was some form of error on the server. This error could be due to anything from an error in the code leading to the program crashing (even if this error is caused by bad client data), to problems accessing the database. This should be used in any situation where the server has an error and there is no more specific code that is applicable.
