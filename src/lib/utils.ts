import jwt from 'jsonwebtoken';

export const randomToken = () => Date.now().toString(32) + Math.random().toString(32).substring(32);

export const createJWT = (id:string) => {
    const privateKey = process.env.PRIVATE_KEY_JWT;
    
    if (!privateKey) {
        throw new Error('Private key is not defined in the environment variables');
    }

    return jwt.sign({ id: id }, privateKey,{
        expiresIn: '30d'
    });
}