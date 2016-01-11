# Backboneを始めよう

### 下準備

1. [node.js](https://nodejs.org/en/) をインストール 
1. このディレクトリの直下でnpm installを行う
``` npm install ```
1. gulpをグローバルでインストール 
``` npm install -g gulp ```
1. gulpを実行する ```gulp serve:tutorial01```

### 利用するモジュールについて

BackboneJSと言いつつ、以下のモジュール、プラグインを利用しています。
適宜参照してください。

* [handlebarsjs](http://handlebarsjs.com/)
* [marionettejs](http://marionettejs.com/)

### チュートリアルについて

gulpタスクで各チュートリアルが立ち上がります。
コマンドは ``` gulp serve:tutorialXX ``` で実行します。XXにはtutorialの番号が入ります。

serveタスクはブラウザが自動的に立ち上げ、各チュートリアルに関連するファイルを監視し、ブラウザをリロードします。
> うまくいかない場合はnpm installを 数回繰り返すと良い

各チュートリアルに関連するファイル群は以下のディレクトリに格納しています。

* app/tutorial/tutorialXX.html
* app/scripts/tutorialXX/**

チュートリアルの概要ついては以下の通りです。

1. tutorial05 ... CompositeViewとCollection
1. tutorial06 ... Rest通信
1. tutorial07 ... View処理の共通化
1. tutorial08 ... Viewのレイアウト化
