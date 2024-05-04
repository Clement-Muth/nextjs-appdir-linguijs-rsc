<a href="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*5n9DCelXWxHTIYQdsKeKtA.jpeg"> <img src="public/image.png" height="300px" width="100%" style="object-fit: cover" alt="Illustration from medium.com" /></a>

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Lingui.js](https://img.shields.io/badge/linguijs-EF4242?style=for-the-badge)

# Linguijs Integration with Next.js 14 appdir and React Server Components

This repo showcases an example of integrating the Linguijs library with Next.js 14 appdir and React Server Components for building multilingual applications.

## Features

- [x] Full Integration of Linguijs with Next.js 14 appdir

## Frameworks

- Linguijs
- Next.js 14
- React Server Components

## Version

For this example, we use the follow versions :

```json
"dependencies": {
  "@lingui/cli": "4.8.0",
  "@lingui/core": "4.8.0",
  "@lingui/react": "4.8.0",
  "next": "14.1.0"
},
"devDependencies": {
  "@lingui/cli": "4.8.0",
  "@lingui/loader": "4.8.0",
  "@lingui/macro": "4.8.0",
  "@lingui/swc-plugin": "4.0.6"
}
```

## SWC Compatibility

SWC Plugin support is still experimental. Semver backwards compatibility between different `next-swc` versions is not guaranteed.

Therefore, you need to select an appropriate version of the Lingui plugin to match compatible `NextJs` version.
You also need to add the `@lingui/swc-plugin` dependency with strict version without a range specifier.

```json
{
  "devDependencies": {
    "@lingui/swc-plugin": "4.0.6"
  }
}
```

For more information on compatibility, please refer to the [Compatibility section](https://github.com/lingui/swc-plugin#compatibility).

## Important Notes
- You **should not have** a babel config in the project, otherwise Next will turn off SWC compiler in favor of babel.
- The actual code is compiled with SWC + Lingui SWC plugin.

## Installation

### Prerequisites

Node.js v16 or higher
npm or yarn

### Installation

#### Clone this repo :
```Bash
git clone git@github.com:Clement-Muth/nextjs-appdir-linguijs-rsc.git
```

#### Access the project directory :
```Bash
cd nextjs-appdir-linguijs-rsc
```

#### Install dependencies - Start the development server :
```Bash
make up
```

#### Open your browser to http://localhost:3000/en.

## ⚡ Deploy Now

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Clement-Muth/nextjs-appdir-linguijs-rsc)

## Documentation

[Documentation Linguijs](https://lingui.dev/)
[Documentation Next.js](https://nextjs.org/)
[Documentation RSC](https://vercel.com/blog/understanding-react-server-components)

## Contribution

Try this repo and share your feedback with me! I would be delighted to receive your suggestions and contributions.

## Mention

This repository is based on the [Lingui's documentation](https://github.com/fromthemills/js-lingui/blob/sc-docs-example/examples/nextjs-app/README.md)
