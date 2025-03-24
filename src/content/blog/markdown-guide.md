---
title: A Guide to Markdown
description: Markdown is a lightweight markup language for creating formatted
  text using a plain-text editor. John Gruber created Markdown in 2004 as a
  markup language that is appealing to human readers in its source code form.
  Markdown is widely used in blogging, instant messaging, online forums,
  collaborative software, documentation pages, and readme files. Markdown files
  end with .md extension.
tags: ["documentation"]
date: 2023-07-08T06:30:00.000Z
---

## Headers

```
# This is a Heading h1
## This is a Heading h2
###### This is a Heading h6
```

# This is a Heading h1

## This is a Heading h2

###### This is a Heading h6

## Emphasis

```
*This text will be italic*
_This will also be italic_
```

_This text will be italic_  
_This will also be italic_

```
**This text will be bold**
__This will also be bold__
```

**This text will be bold**  
**This will also be bold**

```
_You **can** combine them_
```

_You **can** combine them_

## Lists

### Unordered

```
- Item 1
- Item 2
- Item 3
- Item 4
```

- Item 1
- Item 2
- Item 3
- Item 4

### Ordered

```
1. Item 1
1. Item 2
1. Item 3
1. Item 4
```

1. Item 1
1. Item 2
1. Item 3
1. Item 4

## Images

```
![This is an alt text.](https://picsum.photos/200 "This is a sample image.")
```

![This is an alt text.](https://picsum.photos/200 "This is a sample image.")

## Links

```
For writing markdown with live preview use [Markdown Live Preview](https://markdownlivepreview.com/).
```

For writing markdown with live preview use [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

```
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, mi quis faucibus elementum, est eros ornare nisl, ut imperdiet sem massa lacus.
>
>> Maecenas eget laoreet lectus. Curabitur ut molestie nisi. Maecenas eleifend varius eleifend. Nam tincidunt eget felis blandit faucibus. Aliquam sit amet efficitur felis. Aenean non turpis nisi.
```

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, mi quis faucibus elementum, est eros ornare nisl, ut imperdiet sem massa lacus.
>
> > Maecenas eget laoreet lectus. Curabitur ut molestie nisi. Maecenas eleifend varius eleifend. Nam tincidunt eget felis blandit faucibus. Aliquam sit amet efficitur felis. Aenean non turpis nisi.

## Tables

```
| Left columns  | Right columns |
| ------------- | ------------- |
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |
```

| Left columns | Right columns |
| ------------ | ------------- |
| left foo     | right foo     |
| left bar     | right bar     |
| left baz     | right baz     |

## Blocks of code

You wrap your snippet of code with three backticks at the start and three backticks at the end and mention programming language used at the end of top backticks.

````markdown
    ```js
    let message = "Hello world";
    alert(message);
    ```
````

```js
let message = "Hello world";
alert(message);
```

## Inline code

You wrap your code with one backtick at the start and one at end just like quotation marks.

This is hello world in javascript: `console.log("Hello World")`
