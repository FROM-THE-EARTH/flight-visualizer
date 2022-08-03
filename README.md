# Flight Visualizer

飛行中の機体の姿勢を可視化する[ウェブアプリケーション](https://from-the-earth.github.io/flight-visualizer/)です。

## Requirements

- [Node.js](https://nodejs.org/ja/)
- Yarn

## Development

```bash
git clone https://github.com/FROM-THE-EARTH/flight-visualizer.git
cd flight-visualizer
yarn
yarn dev
```

## Scripts

`package.json`の `scripts`の説明です。`yarn ***`で実行できます。

- `dev`: 開発用にローカルでサーバーを立ち上げ、現在のソースコードをブラウザで実行可能にします。ホットリロード対応です。
- `build`: 公開用にアプリをビルドします。ビルドしたファイルは `dist/`に保存されます。
- `preview`: ローカルでサーバーを立ち上げ、`dist/`をブラウザで実行可能にします。

## Input

以下の形式の CSV ファイルを読み込んでください。ヘッダの有無は問いません。

詳細は[`public/sample.csv`](https://github.com/FROM-THE-EARTH/flight-visualizer/blob/main/public/sample.csv)を参照してください。

**z 軸方向が機軸方向です。**

| time[s] | gyro_x[deg/s] | gyro_y[deg/s] | gyro_z[deg/s] |
| ------- | ------------- | ------------- | ------------- |
| 0.1     | 0.1           | 0.1           | 0.1           |
| 0.2     | 0.1           | 0.1           | 0.1           |
| ...     | ...           | ...           | ...           |
