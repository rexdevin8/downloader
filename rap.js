const {DownloadWorker, utils} = require("rapid-downloader");

const worker = new DownloadWorker("https://54-38-216-6.xyz/Getintopc.com/Rotr_Ana_Pro_2022_Multi_Win_64bit.iso?md5=u5m7rMEP3PnGhp4pCBUZNw&expires=1642998017", "100MB.zip", {
    forceSingleConnection: true
});
worker.on('ready', () => {
    worker.on('start', () => console.log('started'))
    worker.on('progress', (progress) => {
        const speed = utils.dynamicSpeedUnitDisplay(progress.bytesPerSecond, 2);
        console.log(`${progress.completedPercent}% - ${speed}`)
    });
    worker.on('finishing', () => console.log('Download is finishing'));
    worker.on('end', () => console.log('Download is done'));
    worker.on('error', error => console.log(error));
    worker.start();
});