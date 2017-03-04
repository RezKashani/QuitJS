const PDFDocument = require('pdfkit');
const fs = require('fs');
const callArgs = process.argv.slice(2);
callArgs.map(argss => console.log(argss));

let shitEmployee = {
  firstName: callArgs[0] ? callArgs[0] : ' کارمند',
  LastName: callArgs[1] ? callArgs[1] : ' کارمند پور',
  EmployeeNo: callArgs[2] ? callArgs[2] : ' ۶۶۶',
  quitReason: callArgs[3] ? callArgs[3] : ' شکم سیری'
};
const companyName = callArgs[4] ? callArgs[4] : 'تخیل گستر بیهوده پرداز شرق'
console.log(shitEmployee.firstName);
const doc = new PDFDocument();

doc.pipe(fs.createWriteStream('quit.pdf'));
doc.font('fonts/Behdad-Regular.ttf');
doc.fontSize(15);
doc.text('استعفا نامه', { align: 'center' });
doc.moveDown();
doc.text('مدیریت محترم شرکت ' + companyName, { align: 'right' });
doc.moveDown();
doc.text('اینجانب ' + shitEmployee.firstName + ' ' + shitEmployee.LastName + ' به شماره کارمندی' + shitEmployee.EmployeeNo + ' ' +
  'به علت ' + shitEmployee.quitReason + ' ' + 'می‌خوام استعفا کنم. بای',
  { align: 'right' });
doc.end();
