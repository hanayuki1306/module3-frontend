import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// Khai báo class phía dưới là một service, và nó
// được đặt trong scope của root, như thế sẽ
// tồn tại service này trong cả app
export class DictionaryService {
  private words: IWord[] = [
  {key: 'service', meaning: 'dịch vụ'},
  {key: 'service provider', meaning: 'nhà cung cấp dịch vụ'},
  {key: 'provide', meaning: 'cung cấp'},
  {key: 'efficient', meaning: 'hiệu quả'},
  {key: 'snow', meaning: 'tuyết'}
  ];

  search(word: string): string {
    if (!word) {
    return '';
    }
    const w = this.words.find(item => item.key === word.toLowerCase());
    if (w) {
    return w.meaning;
    }
    return 'Not found';
    }
    
  constructor() {}
  }

export interface IWord {
  key: string;
  meaning: string;
  }