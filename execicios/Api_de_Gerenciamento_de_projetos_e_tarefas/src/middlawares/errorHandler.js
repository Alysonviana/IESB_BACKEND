function errorHandler(err, req, res, next) {
    console.error(err.stack);
  
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Erro interno no servidor';
  
    res.status(statusCode).json({
      success: false,
      status: statusCode,
      message: message,
      // Envia stack trace somente em desenvolvimento para facilitar debug
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
  }
  
module.exports = errorHandler;
  