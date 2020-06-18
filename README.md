# Next.js Practical Introduction: Pages and Layout

## Learn how to use Next.js to create server-side rendered React applications.

In this tutorial series, you'll be provided with a practical introduction to how Next.js can help you build web applications.

このチュートリアルシリーズでは、Next.jsがWebアプリケーションの構築にどのように役立つかを実践的に紹介します。

Created by Vercel, a cloud company for hosting frontends and serverless functions, Next.js is a React framework capable of creating applications that run both on the client and the server, otherwise known as Universal JavaScript applications. This framework helps you build universal apps faster by streamlining basic features like client-side routing and page layout while simplifying advance features like server-side rendering and code splitting.

フロントエンドやサーバーレス機能をホスティングするクラウド企業であるVercel社が作成したNext.jsは、クライアントとサーバーの両方で動作するアプリケーションを作成できるReactフレームワークで、別名Universal JavaScriptアプリケーションと呼ばれています。このフレームワークは、クライアントサイドのルーティングやページレイアウトなどの基本的な機能を合理化することで、ユニバーサルアプリをより速く構築するのに役立ちますが、サーバーサイドのレンダリングやコード分割などの高度な機能も簡素化されます。

In this first part of the series, you'll learn how to create pages and a page layout using Next.js 9, the most recent framework version at the time of writing. Familiarity with the React library is recommended.

シリーズの第1回目となる今回は、執筆時点で最新のフレームワークであるNext.js 9を使ってページを作成する方法とページレイアウトについて解説します。React ライブラリに精通していることが推奨されます。

### Getting Started

To start, you need to bootstrap a React project with next as a dependency. Anywhere in your system, create a folder named whatabyte and make it your current directory:

開始するには、nextを依存関係にしてReactプロジェクトをブートストラップする必要があります。システム上の任意の場所に、whatabyteという名前のフォルダを作成し、それをあなたのカレントディレクトリにします。

```
$ mkdir whatabyte
$ cd whatabyte
```

Then, initialize a default Node.js project under the whatabyte directory and install core dependencies by issuing these commands:

次に、whatabyteディレクトリの下にあるデフォルトのNode.jsプロジェクトを初期化し、以下のコマンドを実行してコアの依存関係をインストールします。

```
$ npm init -y
$ npm install --save react react-dom next
```

As the name suggests, next is the package that will allow you to use the Next.js framework in your project with all of its modules, components, and dependencies.

nextはその名の通り、Next.jsフレームワークをすべてのモジュール、コンポーネント、依存関係でプロジェクトで使えるようにするためのパッケージです。

Next.js is flexible but has one major structural requirement for it to work. Every Next.js project needs to have a `pages` subdirectory child to the project directory. Therefore, create a new `pages` subdirectory like so:

Next.jsは柔軟性がありますが、動作させるためには大きな構造的な要件が1つあります。すべてのNext.jsプロジェクトは、プロジェクトディレクトリの子ディレクトリとして `pages` サブディレクトリを持つ必要があります。そのため、新しい `pages` サブディレクトリを以下のように作成する。

```
$ mkdir pages
```

Every page of your web app will be defined as a React component in a JavaScript file under the `pages` subdirectory. For example, the file `index.js` represents the root path, `/` and a file named `user.js` represents the `/user` path. You'll get a more detailed explanation of these mechanics in the next section.

ウェブアプリの各ページは `pages` サブディレクトリの下の JavaScript ファイルで React コンポーネントとして定義されます。例えば、ファイル `index.js` はルートパス `/` を表し、ファイル名 `user.js` は `/user` のパスを表します。これらのメカニックについては、次の章で詳しく説明します。

To make running and building your Next.js application easy, replace the NPM scripts of your `package.json` with the following:

Next.jsアプリケーションの実行とビルドを簡単にするには、`package.json`のNPMスクリプトを以下のように置き換えます。

```
{
  ...
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },
  ...
}
```

Save the changes made to `package.json`. To run the project, execute this command in the terminal:

変更した内容を `package.json` に保存する。プロジェクトを実行するには、ターミナルでこのコマンドを実行します。

```
$ npm run dev
```

Head to `http://localhost:3000/` and bask in the glory of a `404 error`. You haven't done anything wrong. This error shows up because the `pages` directory is empty. It needs an index.js file inside to render the default `/` home route. You'll do that... Next!

http://localhost:3000/` に向かい、`404エラー`の栄光に酔いしれてください。何も悪いことはしていない このエラーは `pages` ディレクトリが空なので表示されます。デフォルトの `/` ホームルートをレンダリングするためには、内部に index.js ファイルが必要です。お前がやればいいんだよ......。次！

### Creating Your First Next.js Page

To understand how Next.js works, it helps to think about creating websites the classical way using HTML pages. The `index.html` file is the entry point of a website and it contains logic that takes the visitor to any other pages, like about.html and profile.html.

Next.jsの仕組みを理解するには、HTMLページを使った古典的な方法でWebサイトを作ることを考えるのに役立ちます。index.html` ファイルはウェブサイトのエントリーポイントであり、訪問者をabout.htmlやprofile.htmlのような他のページに誘導するロジックを含んでいます。

With Next.js, each page is represented by a JavaScript file under the pages subdirectory. Each file, instead of having HTML templates, exports a React component that is used by Next.js to render the page with the default root route being `index.js`. Go ahead and create this file under pages subdirectory:

Next.jsでは、各ページはpagesサブディレクトリの下にあるJavaScriptファイルで表現されます。各ファイルはHTMLテンプレートを持つ代わりに、Next.jsがページをレンダリングするために使用するReactコンポーネントをエクスポートし、デフォルトのルートは `index.js` です。ページのサブディレクトリにこのファイルを作成してください。

```
$ touch pages/index.js
```

Populate index.js with this code:

このコードでindex.jsを埋めます。

```
const Index = () => (
  <div>
    <p>Thank u, next</p>
  </div>
);

export default Index;
```

Without having to restart the app, Next.js detects the new index.js and the exported Index component and updates the view in the browser automatically.

アプリを再起動しなくても、Next.jsは新しいindex.jsとエクスポートされたIndexコンポーネントを検出し、ブラウザ上のビューを自動的に更新します。

If you were using `create-react-app` to build your React application, you'd be looking here at rendering an `App` component instead. The `App` component is the parent or shell component for the whole application. With Next.js, you can think of that component as being implied through the `pages` subdirectory and hierarchy.

もしあなたが `create-react-app` を使って React アプリケーションを構築していたとしたら、代わりに `App` コンポーネントをレンダリングすることになるでしょう。App` コンポーネントはアプリケーション全体の親またはシェルコンポーネントです。Next.jsでは、このコンポーネントは `pages` サブディレクトリと階層によって暗示されていると考えることができます。

To achieve a uniform core interface for each page, you'd want to have a common layout that includes a header, a content container, and a navigation bar. This can be easily done with Next just like you'd do it with `create-react-app`: using components.

各ページで統一されたコアインターフェイスを実現するには、ヘッダー、コンテンツコンテナ、ナビゲーションバーを含む共通のレイアウトが必要です。これは、`create-react-app`: コンポーネントを使って行うのと同じように、Nextを使って簡単に行うことができます。

### Creating a Next.js Layout Using React Components

Under the whatabyte root directory, create a components directory:

whatabyteのルートディレクトリの下に、componentsディレクトリを作成します。

```
mkdir components
```

The name of this directory could be really anything, but it makes sense to stick with well-understood file structure names that make it easier for anyone else to understand the structure of your application.

このディレクトリの名前は何でも構いませんが、アプリケーションの構造を誰にでも簡単に理解できるように、よく理解されたファイル構造の名前にこだわるのは理にかなっています。

You need three components for creating a layout:

レイアウトを作成するには3つの要素が必要です。

* Layout to hold the core view in place
* Header to provide a standard header to all views
* NavBar to provide navigation buttons

Thus, create the following files under the components directory:

したがって、componentsディレクトリの下に以下のファイルを作成します。

* Layout.js
* Header.js
* NavBar.js

```
$ touch components/Layout.js components/Header.js components/NavBar.js

```

Open `Header.js `and add the following code to it:

Header.js `を開き、以下のコードを追加してください。


```
const headerStyle = {
  backgroundColor: "blue",
  color: "white",
  width: "100%",
  height: "50px"
};

const Header = () => (
  <div className="Header" style={headerStyle}>
    HEADER
  </div>
);

export default Header;
```

In `NavBar.js` add the following:

NavBar.js`で以下を追加する。


```
const navBarStyle = {
  backgroundColor: "red",
  color: "white",
  width: "100%",
  height: "60px"
};

const NavBar = () => (
  <div className="NavBar" style={navBarStyle}>
    NAVBAR
  </div>
);

export default NavBar;
```

In `Layout.js`, use the `Header` and `NavBar` components to render any content passed through `props.children` within a `Content` container:

Layout.js`では、`Header` と `NavBar` コンポーネントを使用して、`Content` コンテナ内の `props.children` に渡されたコンテンツをレンダリングします。

```
import Header from "./Header";
import NavBar from "./NavBar";

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%"
};

const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column"
};

const Layout = props => (
  <div className="Layout" style={layoutStyle}>
    <Header />
    <div className="Content" style={contentStyle}>
      {props.children}
    </div>
    <NavBar />
  </div>
);

export default Layout;
```

These three components use inline CSS styling to give improve their structure and presentation.

これらの3つのコンポーネントは、インラインCSSスタイリングを使用して、構造とプレゼンテーションを向上させています。

Finally, update `index.js` to use the `Layout` component:

最後に、`index.js`を `Layout` コンポーネントを使用するように更新します。

```
import Layout from "../components/Layout";

const Index = () => <Layout>Welcome to WHATABYTE!</Layout>;

export default Index;
```
