import * as fs from 'fs';
import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';

export interface ResumeNextjsInfraStackProps extends cdk.StackProps {
  /**
   * Optional directory to deploy instead of the default Next.js `out` export.
   * Relative paths resolve from the repository root.
   */
  readonly exportDir?: string;
}

export class ResumeNextjsInfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: ResumeNextjsInfraStackProps) {
    super(scope, id, props);

    const websiteBucket = new s3.Bucket(this, 'WebsiteBucket', {
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: '404.html',
      publicReadAccess: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      autoDeleteObjects: false,
      versioned: true,
    });

    new cdk.CfnOutput(this, 'WebsiteBucketName', {
      value: websiteBucket.bucketName,
    });

    new cdk.CfnOutput(this, 'WebsiteURL', {
      value: websiteBucket.bucketWebsiteUrl,
    });

    const exportDir = this.resolveExportDir(props?.exportDir);

    if (fs.existsSync(exportDir)) {
      new s3deploy.BucketDeployment(this, 'DeployWebsite', {
        destinationBucket: websiteBucket,
        sources: [s3deploy.Source.asset(exportDir)],
        prune: true,
      });
    } else {
      cdk.Annotations.of(this).addWarning(
        `Static export directory not found at ${exportDir}. Run \"yarn build && next export\" before deploying or provide --context exportPath=/path/to/output.`,
      );
    }
  }

  private resolveExportDir(explicit?: string): string {
    const contextValue = this.node.tryGetContext('exportPath');
    const candidate = explicit ?? (typeof contextValue === 'string' ? contextValue : undefined);
    if (!candidate) {
      return path.resolve(__dirname, '..', '..', 'out');
    }

    if (path.isAbsolute(candidate)) {
      return candidate;
    }

    const repoRoot = path.resolve(__dirname, '..');
    return path.resolve(repoRoot, candidate);
  }
}
