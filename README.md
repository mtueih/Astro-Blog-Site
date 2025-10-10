# 我的 Astro 博客网站项目

为了能更细致地控制网站的细节（尤其对于一个**简体中文**的网站来说），且让项目的**模块化**更为极致，所以我使用空的 Astro 模板来从头构建这个博客网站项目。

> 对于一个使用简体中文的 Web 项目而言，一个假定使用者使用英文的 Astro 模板，在很多细节上存在一些问题，比如：
> - 很多地方的 `<html>` 的 `lang` 属性默认为 `en`。
> 这对与一个程序员来说（尤其是像我这样有点强迫症的程序员），是很让人不爽的。虽然我不反对作为一个 IT 技术人员会英语的必要性，但是对于一个博客网站来说，能够清晰且顺利地表达自己的观点是很重要的。

对于一个非常业余的 Web 开发者（只为了写博客）来说，使用一个**长期稳定**、**高性能**的博客框架是非常重要的，且说不定以后会给网站添加**动态**的功能，所以 Astro 对我来说就是一个非常合适的选择。

作为一个从后端开始接触编程的人，我深知模块化的好处和重要性：同样的代码，不应该被写两遍，相似的功能，应该封装成模块。对于一个只想写点博客，对前端技术不那么重视的人来说，更为明显。

根据我对 Astro 的初步了解，Astro 确实是这么做的，但是不够彻底，比如我刚才提到的 `<html>` 的 `lang` 属性的问题，对于一个网站来说，所有的页面的 `<html lang="...">` 应该都是相同的，即使网站涉及多语言，也不应该将 `<html lang="...">` 重复写那么多次，这对于需要修改的人来说是多么的麻烦。而 Astro 的 Blog 模板就是这么做的，我对 Astro 框架不是很了解，对 Web 技术也知之甚少，但是根据我对后端开发的经验，我认为我想要的并不难实现。

这篇 **README.md** 文章将会记录我作为一个前端的门外汉，从零开始，一步一步摸索，逐渐构建自己的博客网站的过程中的一些经验，自己的想法和见解，如有所言不当，还请不吝赐教。

## 我对一个博客网站架构的理解

### 博客网站的骨架

一个网站基本上由 **HTML**、**CSS** 和 **JavaScript** 三大部分组成，但它们只是网站的**源代码**（**src**），一个网站必不可少的，还有**静态资源**（**resources**），比如图片、字体等等。

**服务端软件**，本质上也是在控制上述**源代码**和**静态资源**，而且服务器软件扮演的角色，往往是用于**提供服务**，我们这里只考虑网站最本质的部分。

而所谓的**前端框架**（React、Vue 等），本质上是 **src** 的封装。

对于任何一个网站来说，**静态资源**往往只占很小的一部分，它们大多不会直接和网站放在一起，而是在网站中引用它们（比如图片使用**图床**技术，其它的资源则会使用 **CDN**、**数据库**等技术）。

所以，一个网站的架构，基本上就是 **HTML**、**CSS** 和 **JavaScript**，以及少量的**静态资源**。

所以，一个博客网站的架构是非常简单的，它的目录大概如下（手搓的情况下）：

```
/
├── src/
|    ├── index.html  // 首页 HTML
|    ├── styles/     // 专门用来放 CSS 的文件夹
|    ├── scripts/    // 专门用来放 JavaScript 的文件夹
|    ├── posts/      // 专门用来放博客文章的文件夹
|    |     ├── a-post-name/
|    |     |       └─── index.html
|    |     ├── another-post-name/
|    |     |       └─── index.html
|    |     └── ...
|    ├── about/     // 关于页面
|    |     └─── index.html
|    └── ...        // 其他页面
├── resources/
|     ├── ...       // 这个就比较灵活了
└── ...
```

我个人习惯尽可能地使用 `index.html` 作为 HTML 文件的名字，通过文件夹来控制页面的 URL，并且对于 URL，这一点确实没办法，使用中文 URL 的代价可能会很大，而且对于一个强迫症患者老说，看着由一堆转义字符构成的 URL，内心实在是很不爽，所以对于 URL，统一使用英文，且用连字符（`-`）来代替空格，也就是说尽可能只使用小写英文字母和连字符。

当然这只是为了描述一个博客网站大致的结构，具体的细节其实不是很重要，读者请勿盲目模仿。

如果是**手搓**的话，那么工作量实在是很大，要维护网站目录结构，文件名，网页之间的链接等等，尤其对于一个只想写点博客的人来说，所以可见使用框架的重要性。

## 框架所扮演的角色

上文说到，**框架**（博客框架）对于**博客网站**来说，很重要。

那么它为什么重要呢？上文说了，因为其可以简化很多工作。
- 首先最**核心**的一点，它自动将 **Markdown** 转换成 **HTML**（总不能写个文章靠手写 HTML 吧？）。
- 其次，它简化了维护网站的工作。
  - 通过**配置文件**，而不是通过修改涉及到的每一处 HTML 代码，来简单的，**集中**的控制网站的配置，信息等。
  - ……

对于一个想要通过自建博客网站来写博客的人来说，他核心的目的还是**写作**，输出内容。**搭建和维护网站**只占很小的一部分，它是辅助核心目标的：让自己创作的内容更好的呈现。

而框架做扮演的一个角色，就是尽可能的简化**搭建和维护网站**这项工作，当然，完全避免这项工作几乎是不可能的，毕竟，选择自建博客网站的人，难面会有 DIY 的需求；然后，让框架使用者（博客作者）能够更专注于**写作**这个核心目标。

> 当然，目前的博客框架做的很好了，但是还是不够完美，它们还是会难以避免的暴漏很多具体细节，而这些细节跟实际上几乎没有一个人会用到。简而言之，就是框架不能将**写作**和**搭建和维护网站**这两件事完全隔离（作为一个后端开发者，我认为这并不难实现）。
> 其次就是写作的体验，**Front Matter** 是自建博客网站的人，写作必不可少的一部分，但是，它确实跟**写作**本身关系不大，往往只存在于写作之前（比如开启某些语法的支持）和写作之后（往往是发布的时候才考虑的事情）。而且，写作时的预览，往往不能 100% 模拟出最终的页面效果，这让创作变得割裂。
> 当然，我并不是说这是因为其他的开发人员没有技术水品而导致的，这本来就是个很小众的需求。

## Astro 框架



```sh
pnpm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
