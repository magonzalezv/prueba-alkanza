import { Injectable } from '@angular/core';
import { LINES,
         NOUNS,
         RULES_NOUNS,
         VERBS,
         RULES_VERBS,
         PREPOSITIONS,
         RULES_PREPOSITIONS,
         PRONOUNS,
         RULES_PRONOUNS,
         ADJECTIVES,
         RULES_ADJECTIVES
        } from '../../repo/repo';
import { UtilsService } from '../utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class LineService {

  line = '';

  constructor(
    public _utilsService: UtilsService
  ) { }

  // Pick a noun, preposition or pronoun random
  selectRandomLine() {
     let randomLine = '';

     // Select a random rule
     randomLine = this._utilsService.selectRandomItem(LINES);

     switch (randomLine) {
       case 'noun':
          this.line += this.getNoun();
          break;
       case 'preposition':
          this.line += this.getPreposition();
          break;
       case 'pronoun':
           this.line += this.getPronoun();
           break;
     }
  }

  ///////////////////////////////////////////////////////////////
  // OBTAIN A RANDOM NOUN
  ///////////////////////////////////////////////////////////////
  getNoun() {
    let randomNoun = '';

    // Select a random noun
    randomNoun = this._utilsService.selectRandomItem(NOUNS);

    // Select a random rule VERB/PREPOSITION
    switch (this._utilsService.selectRandomItem(RULES_NOUNS)) {
      case 'end':
        return randomNoun;
      case 'verb':
        return randomNoun = randomNoun + ' ' + this.getVerb();
      case 'preposition':
        return randomNoun = randomNoun + ' ' + this.getPreposition();
    }
  }

  ///////////////////////////////////////////////////////////////
  // OBTAIN A RANDOM VERB
  ///////////////////////////////////////////////////////////////
  getVerb() {
    let randomVerb = '';

    // Select a random verb
    randomVerb = this._utilsService.selectRandomItem(VERBS);

    // Select random rule PREPOSITION/PRONOUN
    switch (this._utilsService.selectRandomItem(RULES_VERBS)) {
      case 'end':
        return randomVerb;
      case 'preposition':
        return randomVerb = randomVerb + ' ' + this.getPreposition();
      case 'pronoun':
        return randomVerb = randomVerb + ' ' + this.getPronoun();
    }
  }

  ///////////////////////////////////////////////////////////////
  // OBTAIN A RANDOM PREPOSITION
  ///////////////////////////////////////////////////////////////
  getPreposition() {
    let randomPreposition = '';

    // Select a random preposition
    randomPreposition = this._utilsService.selectRandomItem(PREPOSITIONS);

    // Select random rule NOUN/PRONOUN/ADJECTIVE
    switch (this._utilsService.selectRandomItem(RULES_PREPOSITIONS)) {
      case 'noun':
        return randomPreposition = randomPreposition + ' ' + this.getNoun();
      case 'pronoun':
        return randomPreposition = randomPreposition + ' ' + this.getPronoun();
      case 'adjective':
        return randomPreposition = randomPreposition + ' ' + this.getAdjective();
    }
  }

  ///////////////////////////////////////////////////////////////
  // OBTAIN A RANDOM PRONOUN
  ///////////////////////////////////////////////////////////////
  getPronoun() {
    let randomPronoun = '';

    // Select a random pronoun
    randomPronoun = this._utilsService.selectRandomItem(PRONOUNS);

    // Select random rule NOUN/ADJECTIVE
    switch (this._utilsService.selectRandomItem(RULES_PRONOUNS)) {
      case 'noun':
        return randomPronoun = randomPronoun + ' ' + this.getNoun();
      case 'adjective':
        return randomPronoun = randomPronoun + ' ' + this.getAdjective();
    }
  }

  ///////////////////////////////////////////////////////////////
  // OBTAIN A RANDOM ADJECTIVE
  ///////////////////////////////////////////////////////////////
  getAdjective() {
    let randomAdjective = '';

    // Select a random adjective
    randomAdjective = this._utilsService.selectRandomItem(ADJECTIVES);

    // Select random rule NOUN/ADJECTIVE
    switch (this._utilsService.selectRandomItem(RULES_ADJECTIVES)) {
      case 'end':
        return randomAdjective;
      case 'noun':
        return randomAdjective = randomAdjective + ' ' + this.getNoun();
      case 'adjective':
        return randomAdjective = randomAdjective + ' ' + this.getAdjective();
    }
  }

  emptyLine() {
    this.line = '';
  }

  getLine() {
   this.selectRandomLine();
   return this.line;
  }





}
