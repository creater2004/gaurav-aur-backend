const asyncHendler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolvere(requestHandler(res, res, next)).catch((err) => next(err));
  };
};

export { asyncHendler };
