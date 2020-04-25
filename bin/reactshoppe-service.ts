#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ReactshoppeServiceStack } from '../lib/reactshoppe-service-stack';

const app = new cdk.App();
new ReactshoppeServiceStack(app, 'ReactshoppeServiceStack', { description: 'Simple sample ecommerce service with New Relic' });
