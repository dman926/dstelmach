export interface Token<T> {
	expires: Date;
	data: T;
}
