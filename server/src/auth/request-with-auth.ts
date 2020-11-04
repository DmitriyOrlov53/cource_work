export interface RequestWithAuth {
	authData: AuthData;
	parameters: Record<string, unknown>;
}

export interface AuthData {
	login: string;
	password: string;
}
