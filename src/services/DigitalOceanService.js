/* eslint-disable import/prefer-default-export */
import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';

import {
  endpoint,
  bucket,
  acl,
  accessKeyId,
  secretAccessKey,
} from '../config/s3';

const spacesEndpoint = new aws.Endpoint(endpoint);
const s3 = new aws.S3({
  endpoint: spacesEndpoint,
  accessKeyId,
  secretAccessKey,
});

const upload = multer({
  storage: multerS3({
    s3,
    bucket,
    acl,
    key(request, file, cb) {
      cb(null, file.originalname);
    },
  }),
}).array('upload', 1);

const DigitalOceanService = {
  upload,
};

export default DigitalOceanService;
