import * as core from '@aws-cdk/core';
import * as iam from '@aws-cdk/aws-iam';
import dynamodb = require('@aws-cdk/aws-dynamodb');

export class ReactshoppeDatabase extends core.Construct {
  private table: dynamodb.Table;
  constructor(scope: core.Construct, id: string) {
    super(scope, id);

    this.table = new dynamodb.Table(this, TableNames.Order, {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PROVISIONED,
      readCapacity: 1,
      writeCapacity: 1,
      tableName: TableNames.Order,
      removalPolicy: core.RemovalPolicy.DESTROY,
    });
    
  }

  allowCrud(grantee: iam.IGrantable) {
    this.table.grantReadData(grantee);
    this.table.grantWriteData(grantee);
  }
};

export enum TableNames {
    Order = 'Order'
};