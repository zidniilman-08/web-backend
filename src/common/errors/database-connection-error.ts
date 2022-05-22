import { CustomError } from './custom-error';

export class DatabseConnectionError extends CustomError {
  statusCode = 500;
  reason = 'Error connecting to databse!';

  constructor() {
    super('Error connecting to db!');

    Object.setPrototypeOf(this, DatabseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
