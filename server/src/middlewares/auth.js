const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
    const authReader = req.header("Authorization");
    
    if(authReader){
        const token = authReader.split(' ')[1];
        
        if(token == null) {
            return res.status(401).json({error: "Erro"});
        }
        
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err) {
                return res.status(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.status(401).json({error:"Dont even know who you are brotha"}); 
    }
}

module.exports = { authenticateToken };