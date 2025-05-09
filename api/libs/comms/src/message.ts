export interface Message<TPayload, TResponse> {
  payload: TPayload;
  response: TResponse;
}
