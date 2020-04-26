import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { addCustomAttribute } from 'newrelic'
import ping from './ping';
import checkout from './checkout';
import { failure, fullstoryHeader } from './response';

exports.main = async (event: APIGatewayProxyEvent, context: Context) => {
  const fullstoryUrlKey = Object.keys(event.headers || {}).find(key => {
    return key.toLocaleLowerCase() === fullstoryHeader.toLocaleLowerCase();
  }) || '';
  const fullstoryURL = event.headers ? event.headers[fullstoryUrlKey] : undefined;
  addCustomAttribute('FullStoryURL', fullstoryURL || 'none provided');
  switch (event.path) {
    case '/ping':
      return ping();
    case '/checkout':
      return checkout(event);
    default:
      return failure(JSON.stringify({ message: 'not found' }), 404);
  }
}