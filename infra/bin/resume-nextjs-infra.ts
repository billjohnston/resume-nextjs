#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ResumeNextjsInfraStack } from '../lib/resume-nextjs-infra-stack';

const app = new cdk.App();

new ResumeNextjsInfraStack(app, 'ResumeNextjsInfraStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
