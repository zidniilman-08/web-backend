import { ApolloError } from 'apollo-server-errors';

export class DuplicateError extends ApolloError {  
  constructor(message: string) {
    super(message, '409');

    Object.defineProperty(this, 'name', { value: 'DuplicateError' });
  }
}