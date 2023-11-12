/**
 * install jsonwebtoken
 * require
 * 
 * jwt.sign(payload, secret,{expireIn:})
 * tokenclient
 */


/**
 * How to store in client side
 * 1. memory --> ok
 * 2. local storage --> ok type (xss)
 * 3. cookies : http only
 */


/**
 * set cookies with http only
 * 2.cors 
 * app.use(cors({
    origin: ['http://localhost:5173/'],
    credentials: true
 }));
 * 3. client side axios setting
 */