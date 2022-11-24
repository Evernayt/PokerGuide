import {IPart} from '../models/IPart';
import {IMAGES} from './images';

export const PARTS: IPart[] = [
  {
    num: 1,
    title: 'Playing a Round of Texas Hold’em',
    steps: [
      {
        num: 1,
        image: IMAGES.img1_1,
        text: 'Learn the 10 basic 5-card hands and their ranking. No matter what type of poker you play, the hands will always be the same. To start familiarizing yourself with the different hands, print out a "cheat sheet" and study it. Then, memorize the different hands so you can easily recognize them. Here are the winning poker hands, from highest to lowest:',
        lists: [
          'The highest-ranking hand is a royal flush (the royal straight flush). This hand includes a 10, Jack, Queen, King, and Ace of the same suit, one kind (all clubs, diamonds, hearts or spades). It can only be tied but not beaten by the royal flush of another suit.',
          'A straight flush is made up of 5 consecutive cards of the same suit.',
          '4 of a kind means you have 4 cards of the same rank (but different suits, of course) and a fifth card of any rank (such as 4 aces and a 9). If you have 4 aces, then no one can have any hand with an ace, so no royal flush is available.',
          'A full house contains 3 matching cards of 1 rank and 2 matching cards of another rank.',
          'A flush contains any 5 cards of the same suit. These skip around in rank or sequence, but are from the same suit.',
          'A straight contains 5 cards of consecutive rank but from more than one suit.',
          '3 means you have 3 cards of the same rank, plus two unmatched cards.',
          '2 pair is made up of two cards of one rank, plus two cards of another rank (different from the first pair), plus one unmatched card.',
          'Pair means you have 2 cards of the same rank, plus 3 other unmatched cards.',
          'High card is the lowest-ranking (called a "nothing") hand, when no two cards have the same rank, the five cards are not consecutive, and they are not all from the same suit.',
        ],
        tip: 'Keep in mind that if two people face off with the same type of hand, the hand with the higher-ranking cards wins. If the hands have the exact same ranks of cards (suit does not matter), it is a tie and the prize, if any, is split evenly.',
      },
      {
        num: 2,
        image: IMAGES.img1_2,
        text: 'In poker, bets are placed at the beginning of the game in one of 2 ways. In Texas Hold’em, the player next to the dealer typically places a small blind bet that’s half of the usual minimum bet, while the player to that person’s left places a big blind that’s at least the minimum bet. As another option, each player can "ante up" the minimum starting bet, which means placing a minimum starting bet into the pool.',
        lists: [
          'Aside from Texas Hold’em, most poker variants use an "ante up" system.',
        ],
      },
      {
        num: 3,
        image: IMAGES.img1_3,
        text: 'Look at the 2 cards the dealer gives you, which is your hand. The dealer will "burn" the first card on the deck, which means placing it out of play. Then, they’ll pass out 2 cards to each player. Check your cards to see what you’re holding.',
        lists: [
          'In poker, the dealer will burn a card every round of dealing. That way, it’s harder for players to anticipate what card is coming up and the game becomes more of a gamble.',
          'The dealer will always pass out the cards in a clockwise direction, starting on the left.',
        ],
        tip: 'Players don’t show their hands to anyone else until they reach the showdown. Even if another player is out, it’s best to keep your cards a secret. You don’t want them to accidentally (or purposely) reveal the value of your cards.',
      },
      {
        num: 4,
        image: IMAGES.img1_4,
        text: 'Bet, call or raise after each round is dealt if you want to. Every time the dealer puts out new cards, you’ll make a bet, with the first bet being made solely based on the two cards the players have in their hands. Betting happens in a circle – when it’s your turn to bet, you have a few options. At this point you can:',
        lists: [
          'Place an initial bet if no one else has yet.',
          'Say "check" to avoid betting.',
          'Say "call" to match the bet someone else has made.',
          'Say "raise" to add more money to the betting pool. If you "raise," the other players will go around in a circle and choose to either "call" your new bet or fold.',
          'Say "fold" if someone else has bet and you don’t want to match their bet. If you fold, turn your cards into the dealer face-down to avoid giving the other players any advantages!',
        ],
      },
      {
        num: 5,
        image: IMAGES.img1_5,
        text: 'Look at the "flop" to see if you have a good hand. After the first round of betting, the dealer will "burn" the top card on the deck. Then, they’ll put 3 cards face-up on the table, which is called the "flop." These are the community cards that every player can use to build their hand. Compare these cards and the cards in your hand, then place a bet, call a bet, or fold.',
        lists: [
          'In total, the dealer will reveal 5 cards. You will have 7 cards total to use to create your best hand of 5: your two personal cards in your hands, and the five community cards on the table. While your luck can turn later on in a game, take some time to analyze the table after the "flop" – are you well-positioned to end the game with a good hand?',
          'Depending on the rules where you’re playing, you can also draw replacement cards for the cards in your hand. This is usually done during or just after the betting round.',
        ],
      },
      {
        num: 6,
        image: IMAGES.img1_6,
        text: 'Check the "turn" card after the second round of betting. The dealer will "burn" the top card, then they’ll place 1 card face up next to the flop. This is called the "turn" card or the "fourth street" card. Check all of the cards on the table and the cards in your hand to see if you want to bet, call, or raise.',
        lists: [
          'Your game may also allow a card exchange at this point, but this isn’t typical in professional games.',
          'As you look at the cards, think about the possible hands other players might have. For instance, if all 4 cards on the table are spades, then any player who has a spade in their hand will have a flush, which means they have 5 cards from the same house.',
          'Similarly, if the cards on the table are 5,6,7, and 8, then anyone with a 4 or 9 will have a straight.',
          'If you have nothing good in your hand but the cards on the table make for an easy winning hand, then you may want to fold, as it’s likely another player has a winning card.',
        ],
      },
      {
        num: 7,
        image: IMAGES.img1_7,
        text: 'Examine the "river" card and decide on the hand you’ll play.',
        lists: [
          'If the rules allow it, you may be able to exchange your hand 1 final time before or after betting.',
        ],
      },
      {
        num: 8,
        image: IMAGES.img1_8,
        text: 'Reveal each player’s hand clockwise in the final "showdown." After each player calls, folds, or bets in the last round, each remaining player will participate in the "showdown." Starting to the left of the dealer, all players involved will reveal their cards face up. Then, everyone looks at the turned over hands to see who has the highest value hand to win the entire pot.',
        lists: [
          'If there is a tie, the tied players split the pot.',
          'If you fold your hand, then you don’t have to show your cards.',
          'In Texas Hold’em, there are 5 cards on the table and 2 cards in your hand. You can create any 5-card combination using these 7 cards. The remaining cards aren’t counted.',
          'If you want to play the cards on the table only, this is called "playing the board." However, it’s an option that everyone has, so it may not be the best strategy.',
        ],
      },
    ],
  },
  {
    num: 2,
    title: 'Adding Betting and Strategy',
    steps: [
      {
        num: 1,
        image: IMAGES.img2_1,
        text: 'Guesstimate the risks on your starting hand. Look at your cards to see what you’re holding. Check for a pair, 2 consecutive numbers, cards that are from the same house, or face cards, which may be good cards. Then, decide if it’s worth placing a bet to see what the community cards will be.',
        lists: [
          'You should almost always raise when your hand is a pair, face cards, or aces. An ace and a king or an ace and a queen are strong hands as well. If you have these hands, bet before the flop to raise the value of the pot.',
          'If the card you need doesn’t turn up, you can either bluff or fold. Sometimes, with good bluffing skills and some luck, a bad hand can win the whole game.',
        ],
      },
      {
        num: 2,
        image: IMAGES.img2_2,
        text: 'Start the bidding with the player to the left of the big blind or dealer. In the first round, bidding starts to the left of the big blind. In later rounds, the bidding starts to the left of the dealer. From there, the bidding goes clockwise.',
        lists: [
          'If you’re playing a game with an ante instead of a blind, always start betting with the player to the left of the dealer.',
        ],
      },
      {
        num: 3,
        image: IMAGES.img2_3,
        text: 'Call the bet if you want to stay in but don’t have great cards. This means you want to stay in the game but don’t want to raise the bet. When you call, match the bet of the person before you by adding your chips or money to the pot. Your turn is now over.',
        lists: [
          'If the flop comes and you’re holding a hand that doesn’t play, check and fold. You don’t want to keep betting money at a hand that won’t win.',
          'If the flop comes and you have a strong hand, bet at it. This will force weaker hands out and raise the value of your pot.',
        ],
      },
      {
        num: 4,
        image: IMAGES.img2_4,
        text: 'Raise the bet if you have a good hand. When the bet comes to you, tell the other players you want to raise. Then, say how much you are betting and place your money or chips into the pot. This ends your turn.',
        lists: [
          'Say, "I raise the bet to $30."',
          'You can’t raise the bet above the maximum for your game.',
        ],
        tip: 'You might decide to go ahead and raise the bet to trick everyone into thinking you have good cards. This is called "bluffing." It’s a strategy used to win a hand even with bad cards. You can "bluff" at any point in the game, but it’s a risky strategy because your bluff might get called.',
      },
      {
        num: 5,
        image: IMAGES.img2_5,
        text: 'Fold if the current bet is too high or you have a bad hand. This means quitting the round of poker. To fold, place your cards face down on the table and say, "I fold." Then, add your cards to the discard pile.',
        lists: [
          'Don’t show your cards when you fold during a game, as this can spoil which cards are out of play. That may give certain players an upper hand.',
          'The key to being successful at poker is knowing when to fold your hand and accept a smaller loss or when to hold onto it and risk a larger loss for a chance to win the pot.',
        ],
      },
      {
        num: 6,
        image: IMAGES.img2_6,
        text: 'Decide if you want to draw any cards (if the game allows it). Look at your cards and decide if you want to play this hand. If you’d like to try for better cards, discard the cards you don’t want. Then, draw replacement cards from the draw pile at the center of the table.',
        lists: [
          'You can discard as many cards as you’d like.',
          'You may not be allowed to draw new cards when playing Texas Hold’em, so check the rules for your game before you start playing.',
        ],
      },
      {
        num: 7,
        image: IMAGES.img2_7,
        text: 'Play only with money you’re willing to lose. When you are learning, you should never gamble more than you would consider acceptable to lose. During the game, don’t add to your bankroll or dive back in after losing everything you planned to gamble. Wait until you’re comfortable losing that amount again before you play another game.',
        lists: [
          'The general rule of thumb is you should be able to easily afford to lose 200 bets at the highest limit. So if the limit is $5 bets, then your bankroll should be $1000, and stop there.',
          'Track your wins and losses if you start getting more serious about poker. This will help you figure out whether you are winning or losing in the long run.',
          'Remember that you must keep records and pay taxes on your gambling income to avoid legal trouble.',
        ],
      },
      {
        num: 8,
        image: IMAGES.img2_8,
        text: 'Learn to read basic tells. Playing your opponents is arguably even more important than playing your cards in poker. This is a more advanced aspect of the game, but it’s always good to be aware of players’ tells—especially your own. Watch for betting patterns such as betting early, very often (probably with weak hands), or late in a hand (as intimidation). Physical tells can also give you an estimation of your opponent’s strength of hand and help you keep your own strategy secret by avoiding such patterns.',
        lists: [
          'Some classic tells include shallow breathing, sighing, nostrils flaring, flushing red, eyes watering, blinking, swallowing excessively, or an increasing pulse seen in the neck or temple.',
          'A hand over the mouth is usually to conceal a smile, while shaking hands usually reveal nerves.',
          'If a player glances at their chips when the flop comes, they probably have a strong hand.',
          'If a mediocre player tries to impress you by staring you down, they are likely bluffing.',
        ],
      },
      {
        num: 9,
        image: IMAGES.img2_9,
        text: 'Identify conservative players from aggressive players. This will help you determine players betting patterns and read them more easily. You can tell if players are more conservative by noticing those folding early—evidently only staying in a hand when their cards are good.',
        lists: [
          'Very conservative players won’t lose as much money, but they’re easily spotted by more experienced players. Because they tend to avoid high betting, they can often be bluffed into folding.',
          'Aggressive players are risk-takers that often bet high early in a hand before seeing how the other players are acting on their cards.',
        ],
      },
    ],
  },
  {
    num: 3,
    title: 'Looking Like a Pro',
    steps: [
      {
        num: 1,
        image: IMAGES.img3_1,
        text: 'Practice and watch others play to develop quick instincts. The more you play and watch, the faster and better you’ll get. Since every poker game is different, it’s important to develop good instincts rather than try to memorize and apply tricky systems. Observe experienced players and imagine how you’d react in their position. Then, watch how the experienced players react to build your own instincts.',
        lists: [
          'While you do this, consider how successful you’d have been if you were playing and reacted as you did. Would you have won, or would you have lost? Then, decide how you can improve your strategy going forward.',
        ],
      },
      {
        num: 2,
        image: IMAGES.img3_2,
        text: 'Shuffle the cards and cut the deck before they’re dealt. Shuffling the cards mixes them up to make the game fairer. To do a basic shuffle, split the deck into 2 stacks. Next, hold a stack in each hand close together and facing each other. Use your thumbs to flip through the cards, combining the deck into one. After the cards are shuffled, get someone who isn’t the dealer to cut the deck by separating it into 2 stacks and placing the bottom stack on top.',
        lists: [
          'Do several shuffles to make sure the cards are mixed up.',
          'You can cut the deck more than once if you’d like.',
          'The dealer typically does the shuffling and bets last, which is called the "button" position. After each hand, you’ll pass the dealer/button position to the next player on the left. If the dealer is always the same person, like in a casino, the button position will still pass clockwise around the table.',
        ],
      },
      {
        num: 3,
        image: IMAGES.img3_3,
        text: 'Say "check" to skip placing a bet or simply tap the table twice with two fingers. You can say this if you are the first better or if all those already betting have checked. If you say "check" when it’s your turn at the beginning of a new hand, that means you are choosing not to place a bet at that point. Instead, you pass the chance to open to the next player.',
        lists: [
          'In the following rounds, if you say "check," that means you’re staying with the bets you already paid into the pot during this hand, and you won’t pay more until someone else raises during their turn.',
          'If another player does raise on that hand, then you nor anyone else can say "check" or maintain your "check"—so when the play comes around to you again you have to either match or raise the latest bet or fold your hand.',
        ],
      },
      {
        num: 4,
        image: IMAGES.img3_4,
        text: 'Say "I open" if a bet hasn’t been placed yet and you want to open too betting. For example, you could raise the ante $1 or at least the agreed minimum raise. If you choose not to open, take turns in clockwise order, until someone else has opened or every player checked. If everyone checks, then it is time to choose to discard and draw 1 to 3 cards, or "hold pat" on the cards you have. When there are fewer than 3 cards available to draw, replacements will be drawn.',
        lists: [
          'The dealer will have to shuffle the discards and add them to the bottom of the draw stack.',
        ],
      },
      {
        num: 5,
        image: IMAGES.img3_5,
        text: 'Say "call" if you want to bet the same as the last person. Calling means making a bet equal to the last bet or raise. For example, if the person right of you just bet $10 and it’s now your turn, you would say "call" or "I call" to match that bet. Then you would place $10 in chips or cash in the pot.',
        lists: [],
      },
      {
        num: 6,
        image: IMAGES.img3_6,
        text: '"Raise" to increase the current betting amount. This is also known as "sweetening the pot." Raise or re-raise requires finishing this round and making another round to now allow any others to "call" or "raise" the amount of that last bet to stay in the game, or else "fold". The ones who already called can check on this turn and the hand is finished unless someone re-raises.',
        lists: [
          'If someone before you bets $20 and you think you have a winning hand or you want to bluff, you can raise when it’s your turn by saying "raise to $30."',
          'However, do not say "I see your 20, and I’ll raise you 10…" Despite being popular in movies, this is actually frowned upon as sloppy table talk.',
        ],
      },
      {
        num: 7,
        image: IMAGES.img3_7,
        text: 'Say "I fold" when you’re ready to quit a hand. Folding means forfeiting your cards and giving up that pot with any bets you’ve made into it. Wait to be dealt into the next hand if you have chips or have not reached your limit of losses. To fold when it’s your turn, put your cards face down on the table and place them onto the discard pile.',
        lists: ['You can fold at any point in a hand when it’s your turn.'],
      },
      {
        num: 8,
        image: IMAGES.img3_8,
        text: '"Cash-in" when you’re ready to quit the game. This means exchanging your poker chips for money. If you still have chips but don’t want to play anymore, take your chips to the bank and tell them you’re ready to cash in. The bank will determine how much money your chips represent, then they’ll hand you cash.',
        lists: ['You can usually return and watch the game after you cash in.'],
      },
    ],
  },
  {
    num: 4,
    title: 'Learning Popular Poker Variations',
    steps: [
      {
        num: 1,
        image: IMAGES.img4_1,
        text: 'Master the basics of five-card draw. This variation has optional rules that can be agreed on before the game begins, such as whether or not to use jokers and wildcards, or which cards are high and low. The object of the game is similar to Texas Hold ‘Em: to get the best 5-card hand, but within the bounds of your own 5-card hand, without common cards.',
        lists: [
          'Determine the betting structure by deciding if you’ll play fixed-limit, pot-limit, or no-limit.',
          'Decide on the dealer by asking "Who deals first?". Depending on the group you’re with and where you’re playing, a dealer may be elected or each player could draw for the position. The organizer or host may also choose to deal first.',
        ],
      },
      {
        num: 2,
        image: IMAGES.img4_2,
        text: 'In this game, the players start by making an ante bet. The dealer and each of the players then get 3 cards, and the players must decide whether to make a play bet or fold. Finally, the dealer reveals their cards for a showdown and whoever has the best hand wins.',
        lists: [
          'Like with a 5-card draw, you can choose to vary the rules if you’re playing at home. For instance, jokers can be wild, meaning they can be used to represent any card value.',
        ],
      },
      {
        num: 3,
        image: IMAGES.img4_3,
        text: 'Study some of the more obscure variations. If you really get into the game or just want to impress others with your knowledge of poker, learn the rules of the other variations. These include Straight Poker, 5-Card Stud, 7-Card Stud, Lowball, Omaha, Pineapple, Crazy Pineapple, Cincinnati, and Dr. Pepper.',
        lists: ['You can learn more about these games online.'],
      },
    ],
  },
];
