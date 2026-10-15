# Catchue の Web ページ

GitHub Pages でそのまま公開できる静的なページ（サーバー不要・アクセス解析なし）。

- `index.html` … アプリの紹介
- `home.js` … 日本語・英語の切り替えと、5色のお試し色選択（実際の配信色とは別）
- `style.css` … 紹介・ポリシー・旧招待ページで共通の見た目
- `assets/` … アプリと同じ猫・ネズミ・ロゴの軽量WebP画像
- `hunt/index.html` … 以前のカラーハントの招待リンクの行き先（現行の限定ルーム招待とは別）（`hunt/?c=red&end=1791120600&g=9`）。アプリが無い人にもお題を見せ、「アプリで参加する」で `colorhunt://hunt?...` を開く
- `privacy/index.html` … プライバシーポリシー（App Store の申請に使う URL）
- `privacy/en/index.html` … 英語のプライバシーポリシー

公開先: https://catchue-app.github.io/catchue/ （GitHub: catchue-app/catchue、このフォルダが main の中身）。
更新は、このフォルダで変更をコミットして `git push` するだけ（1〜2 分で反映）。
アプリの `AppInfo.inviteWebBase` は `https://catchue-app.github.io/catchue/hunt/`。
App Store に出したら、`hunt/index.html` の `APP_STORE_URL` と紹介ページのボタンを差し替える。

2026-10-16: 現行アプリの猫とネズミを使い、クリーム色・パステル・太い輪郭のデザインに統一。紹介ページは `?lang=ja` / `?lang=en` で明示的に言語を切り替え可能。外部フォント・外部JavaScript・アクセス解析は使用しない。
公開前にブラウザで日本語320/390/768/1024/1280px、英語320px、全5色の選択、日英ポリシーと旧招待ページを確認。
