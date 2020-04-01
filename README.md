# nuxt-firebase-demo

> Nuxt/Firebase/Typescript

## Firebase Setup
.envを作成し、firebaseプロジェクト設定を追記する

``` bash
$ touch .env
$ echo APP_URL=XXXXXXXXX >> .env
$ echo FB_APY_KEY=XXXXXXXXX >> .env
$ echo FB_AUTH_DOMAIN=XXXXXXXXX >> .env
$ echo FB_DATABASE_URL=XXXXXXXXX >> .env
$ echo FB_PROJECT_ID=XXXXXXXXX >> .env
$ echo FB_STORAGE_BUCKET=XXXXXXXXX >> .env
$ echo FB_MESSAGING_SENDER_ID=XXXXXXXXX >> .env
$ echo FB_APP_ID=XXXXXXXXX >> .env
$ echo FB_MEASUREMENT_ID=XXXXXXXXX >> .env
```

## Firebase Deploy
``` bash
# プロジェクトを使用できるアカウントでログインする (ブラウザが開く)
$ firebase login

# functionsをビルドする
# cd functions
$ npm install
$ npm run build

# nuxtをビルドする
# cd ~
$ yarn
$ yarn generate

# デプロイする
$ firebase deploy

# デプロイでよく使うオプション
# --only hosting # ホスティングのみデプロイする場合
# --only functions # functionsのみデプロイする場合
# --except functions # functionsをデプロイしない場合
# -P XXXXX # デプロイする環境を指定する (.firebasercに書いてあるプロジェクト)
```

## Firebase

### プラグイン

以下ファイル参照

- ~/plugins/firebase

auth、db、functionsそれぞれ分けてプラグイン化している

### auth

以下のファイル参考

- ~/middleware/auth.ts
- ~/pages/login/index.vue

ストア(~/store/.auth.ts)を使用し認証情報を保持する

認証情報の永続化には~/plugins/firebase/authでsetPersistenceまたはvuexの永続化を行うことで可能

### Firestore

以下のファイル参考

- ~/models

データ取得はqueries、データ書き込みはcommandsで行うようにしている

NoSQLでデータの非正規化を行う可能性があるためCURDではなくCQRSのようなに近い設計としている

### functions

以下のファイル参考

- ~/functions

src以下のソースを修正する

functionsディレクトリでビルドを行うことでlibディレクトリに出力される

modules以下に各functionをファイル単位で作成し、index.tsで読み込むようにしている
