import { ApolloError } from 'apollo-server-errors';

export class NotFoundError extends ApolloError {  
  constructor(message: string) {
    super(message, '404');

    Object.defineProperty(this, 'name', { value: 'NotFoundError' });
  }
}