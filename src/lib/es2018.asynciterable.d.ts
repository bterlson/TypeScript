/// <reference lib="es2015.symbol" />
/// <reference lib="es2015.iterable" />

interface SymbolConstructor {
    /**
     * A method that returns the default async iterator for an object. Called by the semantics of
     * the for-await-of statement.
     */
    readonly asyncIterator: symbol;
}

interface AsyncIterator<T, TReturn = any, TNext = undefined> {
    // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
    next(...args: [] | [TNext]): Promise<IteratorResult<T, TReturn>>;
    return?(value?: TReturn | PromiseLike<TReturn>): Promise<IteratorResult<T, TReturn>>;
    throw?(e?: any): Promise<IteratorResult<T, TReturn>>;
}

interface AsyncIterable<T, TReturn = any, TNext = undefined> {
    [Symbol.asyncIterator](): AsyncIterator<T, TReturn, TNext>;
}

interface AsyncIterableIterator<T, TReturn = any, TNext = undefined> extends AsyncIterator<T, TReturn, TNext> {
    [Symbol.asyncIterator](): AsyncIterableIterator<T, TReturn, TNext>;
}
