//week-6-Coding-Assignment //Card War Game


class Deck {
    constructor() {
      this.suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds'];
      this.ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
      this.cards = [];
  
      for (let suit of this.suits) {
        for (let rank of this.ranks) {
          this.cards.push({ suit, rank });
        }
      }
    }
  
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  }
  
  class WarGame {
    constructor() {
      this.deck = new Deck();
      this.deck.shuffle();
  
      this.player1Deck = [];
      this.player2Deck = [];
  
      for (let i = 0; i < this.deck.cards.length; i++) {
        if (i % 2 === 0) {
          this.player1Deck.push(this.deck.cards[i]);
        } else {
          this.player2Deck.push(this.deck.cards[i]);
        }
      }
    }
  
    play() {
      let round = 0;
  
      while (round < 26) {
        round++;
        const card1 = this.player1Deck.pop();
        const card2 = this.player2Deck.pop();
  
        console.log(`Round ${round}:`);
        console.log(`Player 1 plays ${card1.rank} of ${card1.suit}`);
        console.log(`Player 2 plays ${card2.rank} of ${card2.suit}`);
  
        if (this.compareCards(card1, card2) > 0) {
          console.log('Player 1 wins the round!');
          this.player1Deck.unshift(card1, card2);
        } else if (this.compareCards(card1, card2) < 0) {
          console.log('Player 2 wins the round!');
          this.player2Deck.unshift(card1, card2);
        } else {
          console.log('It\'s a tie!');
          this.player1Deck.unshift(card1);
          this.player2Deck.unshift(card2);
        }
      }
  
      if (this.player1Deck.length > this.player2Deck.length) {
        console.log('Player 1 wins the game!');
      } else if (this.player2Deck.length > this.player1Deck.length) {
        console.log('Player 2 wins the game!');
      } else {
        console.log('It\'s a tie game!');
      }
    }
  
    compareCards(card1, card2) {
      const rank1Index = this.deck.ranks.indexOf(card1.rank);
      const rank2Index = this.deck.ranks.indexOf(card2.rank);
      
      
  
      return rank1Index - rank2Index;
    }
  }
  
  const warGame = new WarGame();
  warGame.play();