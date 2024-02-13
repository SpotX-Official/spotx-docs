
# SpotX Docs

Before you edit/correct this docs, read this


- All the files for [Guide](https://spotx-official.github.io/spotx-docs/guide/quickstart) is inside `guide` directory
- All the files for [FAQ](https://spotx-official.github.io/spotx-docs/faq/introduction) is inside `faq` directory
- **Don't** edit files in any other directory other than above two, unless you intend to change website structure or styling!

## Tech Used

- [Docusaurus](https://docusaurus.io/) - Framework
- [Tailwind CSS](https://tailwindcss.com/) - For additional styling
- Markdown with [MDX](https://mdxjs.com/)

## To Add a Page

- Create `<serial-no>_<page-name>.md` in desired directory (`guide` or `faq`), *ex:* `/guide/advanced-guides/06_conclusion.md`
- You can use [basic markdown syntax](https://www.markdownguide.org/basic-syntax/), refer [this](https://docusaurus.io/docs/markdown-features) for details
- Sidebar entries are automatically generated with default or preferred label (`sidebar_label` below)
- Try to follow recommended format for every file for best results:

```mdx
---
sidebar_position: 2 # optional
sidebar_label: Getting Started # optional

id: getting-started # recommended 
title: Getting Started # recommended
description: Create a doc page with rich content. # optional
slug: /getting-started-page # optional
---

<!-- Below head tag block is completely optional, it's not required in normal pages, it is ony added for super important pages -->
<head>
  <html className="some-extra-html-class" />
  <body className="other-extra-body-class" />
  <title>Head Metadata customized title!</title>
  <meta charSet="utf-8" />
  <meta name="twitter:card" content="summary" />
</head>

# Heading

content

## Sub heading, it will be listed in TOC, menu on the right side

content
```

#### Explanation

- **sidebar_position**: Position of page in sidebar, it can also be achieved by prefixing name with serialised numbers, `01_quickstart.md`, `02_installation.md`, ...
- **sidebar_label**: Label text in the sidebar, Use if you want a different text as label. By default it is same as *Heading*
- **id**: Unique identification for page
- **slug**: Custom slug for page url.by default it is automatically generated
- **title** and **description**: These values are added to html head


> Refer [[1]](https://docusaurus.io/docs/create-doc#doc-tags), [[2]](https://docusaurus.io/docs/sidebar/autogenerated#autogenerated-sidebar-metadata) and [[3]](https://docusaurus.io/docs/markdown-features/head-metadata) for detailed explanation

## To Create a Category

- Nested directories will turn into category in sidebar, read [this](https://docusaurus.io/docs/create-doc#organizing-folder-structure) to understand folder structure
- create a **directory** or **nested directory** inside `guide` or `faq` directories
- Add `_category_.json` (or `.yml`) in the following format:

    ```json
    {
        "position": 2,
        "label": "Tutorial",
        "collapsible": true,
        "collapsed": false,
        "className": "red",
        "link": {
            "type": "generated-index",
            "title": "Tutorial overview",
            "description": "Tutorial guides"
        }
    }
    ```

Refer [this](https://docusaurus.io/docs/sidebar/autogenerated#category-item-metadata) for YAML format

- Create `.md` files inside it
