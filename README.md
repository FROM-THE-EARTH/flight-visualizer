# Flight Visualizer

飛行中の機体の姿勢を可視化する[ウェブアプリケーション](https://from-the-earth.github.io/flight-visualizer/)です。

## Usage

**姿勢を再現するためには、発射時の機体と IMU の姿勢をアプリ上の座標軸と一致させる必要があります。**

- 座標系：右手
- 回転順序：X-Y-Z

### Input

以下の形式の CSV ファイルを読み込んでください。ヘッダの有無は問いません。

詳細は[`public/sample.csv`](https://github.com/FROM-THE-EARTH/flight-visualizer/blob/main/public/sample.csv)を参照してください。

**z 軸方向が機軸先端方向です。**

| time[s] | gyro_x[deg/s] | gyro_y[deg/s] | gyro_z[deg/s] | height[m] |
| ------- | ------------- | ------------- | ------------- | --------- |
| 0.1     | 0.1           | 0.1           | 0.1           | 0         |
| ...     | ...           | ...           | ...           | ...       |

## Development

### Requirements

- [Node.js](https://nodejs.org/ja/)
- Yarn

### Setup

```bash
git clone https://github.com/FROM-THE-EARTH/flight-visualizer.git
cd flight-visualizer
yarn
```

### Scripts

`package.json`の `scripts`の説明です。

以下のコマンドをターミナルで`yarn {command}`とすると実行できます。

- `dev`: ローカルでサーバーを立ち上げ、現在のソースコードをブラウザで実行可能にします。ホットリロード対応で、開発時はこのコマンドを使います。
- `build`: 公開用にアプリをビルドします。ビルドしたファイルは `dist/`に保存されます。
- `preview`: ローカルでサーバーを立ち上げ、`dist/`をブラウザで実行可能にします。
