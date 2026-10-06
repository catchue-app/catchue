# CatcHue の Web ページ

GitHub Pages でそのまま公開できる静的なページ（サーバー不要・アクセス解析なし）。

- `index.html` … アプリの紹介
- `hunt/index.html` … 友達を誘うリンクの行き先（`hunt/?c=red&end=1791120600&g=9`）。アプリが無い人にもお題を見せ、「アプリで参加する」で `colorhunt://hunt?...` を開く
- `privacy/index.html` … プライバシーポリシー（App Store の申請に使う URL）

公開したら、アプリの `AppInfo.inviteWebBase` に `https://<ユーザー名>.github.io/<リポジトリ>/hunt/` を入れる。
App Store に出したら、`hunt/index.html` の `APP_STORE_URL` と紹介ページのボタンを差し替える。
