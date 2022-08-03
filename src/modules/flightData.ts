export type Gyro = {
    x: number; // [deg/s]
    y: number; // [deg/s]
    z: number; // [deg/s]
}

export type FlightDataStep = {
    time: number    // [s]
    gyro: Gyro      // [deg/s]
}

export class FlightData {
    readonly steps: FlightDataStep[] = []

    constructor(csvString: string) {
        const lines = csvString.split("\n")
        for (const line of lines) {
            const cells = line.split(",")

            if (cells.length !== 4) {
                continue;
            }

            try {
                const cellsNumber = cells.map((cell) => {
                    const num = Number(cell)
                    if (isNaN(num)) {
                        throw Error();
                    }
                    return num;
                });

                this.steps.push({
                    time: cellsNumber[0], gyro: {
                        x: cellsNumber[1], y: cellsNumber[2], z: cellsNumber[3]
                    }
                })
            } catch { };
        }
    }
}