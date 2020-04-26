import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { addCustomAttribute } from 'newrelic'
import ping from './ping';
import checkout from './checkout';
import { failure, fullstoryHeader } from './response';

exports.main = async (event: APIGatewayProxyEvent, context: Context) => {
  //console.log(JSON.stringify(event));
  addCustomAttribute('FullStoryURL', event.headers ? event.headers[fullstoryHeader] : '')
  switch (event.path) {
    case '/ping':
      return ping();
    case '/checkout':
      return checkout(event);
    default:
      return failure(JSON.stringify({ message: 'not found' }), 404);
  }
}