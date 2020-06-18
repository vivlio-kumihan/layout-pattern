# Next.js Practical Introduction: Pages and Layout

## Learn how to use Next.js to create server-side rendered React applications.

In this tutorial series, you'll be provided with a practical introduction to how Next.js can help you build web applications.

Created by Vercel, a cloud company for hosting frontends and serverless functions, Next.js is a React framework capable of creating applications that run both on the client and the server, otherwise known as Universal JavaScript applications. This framework helps you build universal apps faster by streamlining basic features like client-side routing and page layout while simplifying advance features like server-side rendering and code splitting.

In this first part of the series, you'll learn how to create pages and a page layout using Next.js 9, the most recent framework version at the time of writing. Familiarity with the React library is recommended.

### Getting Started

To start, you need to bootstrap a React project with next as a dependency. Anywhere in your system, create a folder named whatabyte and make it your current directory:

```
$ mkdir whatabyte
$ cd whatabyte
```

Then, initialize a default Node.js project under the whatabyte directory and install core dependencies by issuing these commands:

```
$ npm init -y
$ npm install --save react react-dom next
```

As the name suggests, next is the package that will allow you to use the Next.js framework in your project with all of its modules, components, and dependencies.

Next.js is flexible but has one major structural requirement for it to work. Every Next.js project needs to have a `pages` subdirectory child to the project directory. Therefore, create a new `pages` subdirectory like so:

```
$ mkdir pages
```

Every page of your web app will be defined as a React component in a JavaScript file under the pages subdirectory. For example, the file index.js represents the root path, / and a file named user.js represents the /user path. You'll get a more detailed explanation of these mechanics in the next section.

To make running and building your Next.js application easy, replace the NPM scripts of your package.json with the following: