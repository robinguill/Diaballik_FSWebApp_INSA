package diaballik.model;

public class MovePiece extends Command {

	private int x1;

	private int y1;

	private int x2;

	private int y2;

	private Piece piece;

	private Piece pieceToMove;

	private Command command;

	public MovePiece(Piece p, int x1, int y1, int x2, int y2, Game game) {

	}

	public boolean exe() {
		return false;
	}

	public boolean canDo() {
		return false;
	}

}
