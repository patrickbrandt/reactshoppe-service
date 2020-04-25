import * as cdk from '@aws-cdk/core';
import { ReactshoppeApi } from './reactshoppe-api';
import { ReactshoppeDatabase } from './reactshoppe-database';

export class ReactshoppeServiceStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const api = new ReactshoppeApi(this, 'ReactshoppeApi');
    const db = new ReactshoppeDatabase(this, 'ReactshoppeDatabase');

    // db.allowCrud(api.getHandler());
  }
}