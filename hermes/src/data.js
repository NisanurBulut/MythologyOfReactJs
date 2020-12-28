const chessPieces = [
  {
    id: 1,
    name: 'Queen',
    text:
      'The queen (♕, ♛) is the most powerful piece in the game of chess. Each player starts the game with one queen, placed in the middle of the first rank next to the king. Because the queen is the strongest piece, a pawn is promoted to a queen in the vast majority of cases.',
    job:
      'The queen (♕, ♛) is able to move any number of squares vertically, horizontally or diagonally.',
    image:
      'https://images.unsplash.com/photo-1543092587-d8b8feaf362b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
  {
    id: 2,
    name: 'Castle',
    text:'The rook (♖ ♜) is one of the chess pieces used in the game of chess. This piece has two in one player (2 in black, 2 in white), placed on the far right and far left in the appropriate order on the chessboard.',
    job:'The rook can go forward, backward, right and left. The rook cannot jump over its own pieces or opponent pieces. However, in moves called castling, it only jumps over the king.',
    image: 'https://t.ly/SeGX',
  },
  {
    id: 3,
    name: 'Horse (chess)',
    text:'The knight (♘,♞) is a piece in the game of chess and is represented by a horse`s head and neck.',
    job:'Each player starts with two knights, which are located between the rooks and bishops in the standard starting position.',
    image: 'https://t.ly/nAwk',
  },
  {
    id: 4,
    name: 'Pawn',
    text:'The pawn (♙,♟) is the most numerous piece in the game of chess and, in most circumstances, also the weakest. ',
    job: 'In the game of chess, the pawn always moves straight and forward.',
    image: 'https://t.ly/IBl2',
  },
  {
        id: 5,
        name: 'King',
        text: 'The king can only move one square in any direction at a time. Up, down, right, left and cross. There is a special rule regarding the king.',
        job: 'The king (♔,♚) is the most important piece in the game of chess. If a player`s king is threatened with capture, it is said to be in check, and the player must remove the threat of capture on the next move. If this cannot be done, the king is said to be in checkmate, resulting in a loss for that player. Players cannot make any move that places their own king in check. Although the king is the most important piece, it is usually the weakest piece in the game until the game`s ending phase.',
        image: 'https:t.ly/qxc3',
    },
  {
    id: 6,
    name: 'Bishop',
    text: 'The bishop (♗,♝) is a piece in the game of chess. Each player begins the game with two bishops. One starts between the king`s knight and the king, the other between the queen`s knight and the queen.',
    job: 'The bishop has no restrictions in distance for each move, but is limited to diagonal movement.',
    image: 'https://t.ly/6hjF',
  },
];
export default chessPieces;
