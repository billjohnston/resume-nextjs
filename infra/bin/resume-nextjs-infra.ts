#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ResumeNextjsInfraStack } from '../lib/resume-nextjs-infra-stack';

const app = new cdk.App();

new ResumeNextjsInfraStack(app, 'ResumeNextjsInfraStack', {
  env: {
    account: '829151516027',
    region: 'us-east-1',
  },
});
