## 概要

大学で初めて作成した自作キーボードのためのキーキャップ販売サイトです。メカニカルキーボードが好きなため、自分のキーキャップを撮影し、販売サイト風に仕上げました。

※バックエンドは未実装

期間: 2022 年 12 月

役割: フロントエンド・デザイン

GitHub: https://github.com/Minimalist-00/Key-Caps

URL: https://key-caps.vercel.app/

## アプリ画面

![キーキャップサイト画面1](/images/development/keycaps/image_1.png)

![キーキャップサイト画面2](/images/development/keycaps/image_2.png)

## 工夫した点

**デザイン面**

- BootstrapとMaterial-UIでミニマルなデザイン
- 細かい演出（カーソル、アラート等）
- グリッドレイアウトで統一感のある配置

**コード面**

- データを別ファイルに分離し、propsで受け渡し
- 機能ごとにファイルを分割
- Bootstrapを活用してcssを削減
