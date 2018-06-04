export interface Cases<T, U> {
    present: (value: T) => U
    empty: () => U
}

export type Option<T> = Present<T> | Empty<T>

export interface Present<T> {
    kind: "present";
    value: T;
}

export interface Empty<T> {
    kind: "empty";
}