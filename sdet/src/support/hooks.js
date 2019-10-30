const fs = require('fs');
require('dotenv').config();

const createTestCafe = require('testcafe');
const testControllerHolder = require('../support/testControllerHolder');
const {
 AfterAll, setDefaultTimeout, Before, After, Status
 } = require('cucumber');
const errorHandling = require('../support/errorHandling');

const TIMEOUT = 40000;

let isTestCafeError = false;
let attachScreenshotToReport = null;
let cafeRunner = null;
let n = 0;

function createTestFile() {
    fs.writeFileSync(
'test.js',
        'import errorHandling from "./src/support/errorHandling.js";\n' +
        'import testControllerHolder from "./src/support/testControllerHolder.js";\n\n' +

        'fixture("fixture")\n' +
        '.page `' + process.env.BASE_URL +'/`' +
        `.httpAuth({
            username: 'morak',
            password: 'morak123',
        });` +
        'test\n' +
        '("test", testControllerHolder.capture)'
);
}

function runTest(iteration, browser) {
    createTestCafe('localhost', 1338 + iteration, 1339 + iteration)
        .then((tc) => {
            cafeRunner = tc;
            const runner = tc.createRunner();
            return runner
                .src('./test.js')
                .screenshots('reports/screenshots/', true)
                .browsers(browser)
                .run()
                .catch(function(error) {
                    console.error(error);
                });
        })
        .then((report) => {
        });
}


setDefaultTimeout(TIMEOUT);

Before(function () {
    runTest(n, this.setBrowser());
    createTestFile();
    n += 2;
    return this.waitForTestController.then((testController) => {
        return testController.maximizeWindow();
    });
});

After(() => {
    fs.unlinkSync('test.js');
    testControllerHolder.free();
});

After(async function (testCase) {
    const world = this;
    if (testCase.result.status === Status.FAILED) {
        isTestCafeError = true;
        attachScreenshotToReport = world.attachScreenshotToReport;
        errorHandling.addErrorToController();
        await errorHandling.ifErrorTakeScreenshot(testController);
    }
});

AfterAll(() => {
    let intervalId = null;

    function waitForTestCafe() {
        intervalId = setInterval(checkLastResponse, 500);
    }

    function checkLastResponse() {
        if (testController.testRun.lastDriverStatusResponse === 'test-done-confirmation') {
            cafeRunner.close();
            process.exit();
            clearInterval(intervalId);
        }
    }

    waitForTestCafe();
});

const getIsTestCafeError = function () {
    return isTestCafeError;
};

const getAttachScreenshotToReport = function (path) {
    return attachScreenshotToReport(path);
};

exports.getIsTestCafeError = getIsTestCafeError;
exports.getAttachScreenshotToReport = getAttachScreenshotToReport;
