import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('MAIL_SERVICE') private clienteMail: ClientProxy) { }

  getHello(): string {
    return 'Hello World from 3000!';
  }

  newUser(user: any) {
    this.clienteMail.emit('new_mail', user)
    return 'send_queue'
  }
}
