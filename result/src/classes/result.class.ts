// Enums
import { ResultState } from "../enums/result-state.enum";

/**
 * Result
 * @description Class to carry result between parts 
 * of code and application.
 */
export class Result<TData, TMessage = string> {

    /**
     * State
     * @description Current state getter.
     */
    public get state(): ResultState { return this._state; }

    // Init state
    private _state: ResultState = ResultState.Valid;

    // Init warnings
    private _warnings: TMessage[] = [];
    // Init errors
    private _errors: TMessage[] = [];
    // Init messages
    private _messages: TMessage[] = [];

    /**
     * Is valid
     * @description Whether the result is valid.
     */
    public get isValid(): boolean {
        // Check state
        switch (this._state) {
            // Valid or with warnings
            case ResultState.Valid:
            case ResultState.ValidWithWarnings:
                return true;

            // Invalid or default
            case ResultState.Invalid:
            default:
                return false;
        }
    }

    /**
     * Add message
     * @param message 
     */
    public addMessage(message: TMessage): void {
        // Add message to messages
        this._messages.push(message);
    }

    /**
     * Add error
     * @param message 
     */
    public addError(message: TMessage): void {
        // Add message to errors
        this._errors.push(message);
    }
}