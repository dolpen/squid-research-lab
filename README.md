# squid-research-lab

[Angular2 チュートリアルの TypeScript版](https://angular.io/docs/ts/latest/tutorial/)
から SystemJS を外して webpack を代わりに入れ、プロダクションビルドできるようにした構成を元に開発していきます。

* ```npm install``` で必要なものが全部入ります。
* ```npm run start``` でホットデプロイ用のサーバーが実行されます。
* ```npm run build``` で開発用のjsが一度だけ作成されます。
* ```npm run build:prod``` で本番用の圧縮された配布形態が作成されます。

