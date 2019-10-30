const report = require('multiple-cucumber-html-reporter');
require('dotenv').config();

const reportTitle = 'TestCafe Demo HTML Report';

report.generate({
    jsonDir: 'reports',
    reportPath: 'reports/combined',
    disableLog: true,
    pageTitle: reportTitle,
    reportName: reportTitle,
    displayDuration: true,
    //openReportInBrowser: (process.env.NODE_ENV === 'local'),
    openReportInBrowser:true,
    durationInMS: false,
    saveCollectedJSON: true
});

