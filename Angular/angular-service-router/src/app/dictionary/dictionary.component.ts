import { Component, OnInit } from '@angular/core';
import { IWord, DictionaryService } from '../dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent {
  word: IWord;
  constructor(private dictionaryService: DictionaryService) { }
  search(word: string) {
    let meaning = this.dictionaryService.search(word);
    this.word = {
      key: word,
      meaning: meaning
    };
  }
}