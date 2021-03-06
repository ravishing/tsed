import * as Express from "express";

export function statusAndHeadersMiddleware(request: Express.Request, response: Express.Response, next: any) {
  const {
    statusCode,
    response: {headers = {}}
  } = request.ctx.endpoint;

  if (response.statusCode === 200) {
    // apply status only if the isn't already modified
    response.status(statusCode);
  }

  // apply headers
  Object.entries(headers).forEach(([key, schema]) => {
    schema.value !== undefined && response.set(key, String(schema.value));
  });
  next();
}
