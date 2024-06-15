import { Color, PieceSymbol, Square } from "chess.js";

export const Chessboard = ({ board }: {
    board: ({
        square: Square;
        type: PieceSymbol;
        color: Color;
    } | null)[][]
}) => {
    return (
        <div className="text-white-200">
            {board.map((row, i) => {
                return (
                    <div key={i} className="flex">
                        {row.map((square, j) => {
                            return (
                                <div 
                                    key={j} 
                                    className={`w-16 h-16 ${(i+j)%2 === 0 ? 'bg-green-500' : 'bg-white'}`}
                                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    {square ? (
                                        <span style={{ color: square.color === 'w' ? 'black' : 'black' }}>
                                            {square.type.toUpperCase()}
                                        </span>
                                    ) : ""}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};
