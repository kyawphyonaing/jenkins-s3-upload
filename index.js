var aws = require('aws-sdk');
aws.config.region = 'ap-northeast-1';
var bucket = 'mochicachi';
var s3 = new aws.S3();


exports.handler = function(event, context) {
    var param = {
            Bucket: bucket,
            Key: 'sp/assets/json/csvtojson.json',
            Body: 'me me me'};
    console.log("s3");
    s3.upload(param, function(err, data) {
        if (err) console.log(err, err.stack);
        else console.log(data);

        console.log('actually done!');
        context.done();
    });
    console.log('done?');
};
// exports.handler = function(event, context) {
//
//     var params = {
//         Bucket: bucket,
//         Key: 'sp/assets/json/mochicachi.csv'
//     };
//     s3.getObject(params, function(err, data) {
//         if (err) {
//             console.log(err, err.stack);
//         } else {
//             //var object = JSON.parse(data.Body.toString());
//             //console.log(data.Body.toString('utf8'));
//             const csv=require('csvtojson')
//             csv({noheader:true})
//             .fromString(data.Body.toString('utf8'))
//             .on('csv',(csvRow)=>{
//                 console.log(csvRow)
//                 s3Upload(csvRow);
//             })
//             .on('done',()=>{
//                 console.log('end')
//             })
//         }
//     });
// }
// function s3Upload(statusJson) {
//     const updateParams = {
//         Bucket: bucket,
//         Key: 'sp/assets/json/csvtojson.json',
//         Body: statusJson,
//         ContentType: 'application/json',
//         ACL: 'public-read-write'
//     };
//
//     s3.upload(updateParams, function(err, data) {
//         if(err) {
//             console.log('error, err');
//         } else {
//             console.log('actually done!');
//         }
//     });
// }
