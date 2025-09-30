import * as path from 'path'
import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as s3 from 'aws-cdk-lib/aws-s3'
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment'
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront'
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins'
import * as acm from 'aws-cdk-lib/aws-certificatemanager'
import z from 'zod'

const stageSchema = z.union([z.literal('staging'), z.literal('production')])

const deployStageMap: Record<
    'staging' | 'production',
    { domainName: string; certificateArn: string }
> = {
    staging: {
        domainName: 'staging.billjohnston.dev',
        certificateArn:
            'CHANGEME',
    },
    production: {
        domainName: 'billjohnston.dev',
        certificateArn:
            'arn:aws:acm:us-east-1:829151516027:certificate/eead002c-874a-4973-bfb6-c77bdc9b2208',
    },
}

export class ResumeNextjsInfraStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props: cdk.StackProps) {
        super(scope, id, props)

        const websiteBucket = new s3.Bucket(this, 'WebsiteBucket', {
            websiteIndexDocument: 'index.html',
            websiteErrorDocument: '404.html',
            publicReadAccess: true,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS_ONLY,
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            // autoDeleteObjects: true,
            // versioned: true,
        })

        new cdk.CfnOutput(this, 'WebsiteBucketName', {
            value: websiteBucket.bucketName,
        })

        new cdk.CfnOutput(this, 'WebsiteURL', {
            value: websiteBucket.bucketWebsiteUrl,
        })

        const stageValue = stageSchema.parse(this.node.tryGetContext('stage'))
        const { domainName, certificateArn } = deployStageMap[stageValue]

        const certificate = acm.Certificate.fromCertificateArn(
            this,
            'WebsiteCertificate',
            certificateArn
        )

        const distribution = new cloudfront.Distribution(
            this,
            'WebsiteDistribution',
            {
                defaultRootObject: 'index.html',
                domainNames: [domainName],
                certificate,
                defaultBehavior: {
                    origin: new origins.HttpOrigin(
                        websiteBucket.bucketWebsiteDomainName,
                        {
                            protocolPolicy:
                                cloudfront.OriginProtocolPolicy.HTTP_ONLY,
                        }
                    ),
                    viewerProtocolPolicy:
                        cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
                    cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
                },
                errorResponses: [
                    {
                        httpStatus: 403,
                        responseHttpStatus: 404,
                        responsePagePath: '/404.html',
                        ttl: cdk.Duration.minutes(5),
                    },
                    {
                        httpStatus: 404,
                        responseHttpStatus: 404,
                        responsePagePath: '/404.html',
                        ttl: cdk.Duration.minutes(5),
                    },
                ],
            }
        )

        new cdk.CfnOutput(this, 'CloudFrontDistributionId', {
            value: distribution.distributionId,
        })

        new cdk.CfnOutput(this, 'CloudFrontDistributionDomain', {
            value: distribution.distributionDomainName,
        })

        new s3deploy.BucketDeployment(this, 'DeployWebsite', {
            destinationBucket: websiteBucket,
            sources: [
                s3deploy.Source.asset(
                    path.resolve(__dirname, '..', '..', 'apps', 'web', 'out')
                ),
            ],
            distribution,
            distributionPaths: ['/*'],
        })
    }
}
