import { MessagesRepository } from './message.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {

  constructor(public messagesRepo: MessagesRepository) {}
  async findOne(id: string) {
    return await this.messagesRepo.findOne(id);
  }

  async findAll() {
    return await this.messagesRepo.findAll();
  }

  async create(content: string) {
    return await this.messagesRepo.create(content);
  }
}
