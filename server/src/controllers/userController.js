const userModel = require("../Models/userModel");

async function createUser(req, res) {
    const { name, email,password } = req.body;

    try {
        const user = await userModel.createUser(name, email, password);
        res.status(201).json(user);
        } catch (error){
            res.status(500).json({error: "Erro na criação de user"});
        }
}

async function getUsers(req, res) {
    try {
        const users = await userModel.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error:"Erro ao buscar user" })
    }

}

async function loginUser(req, res) {
    const { email, password } = req.body;

    try{
        const user = await userModel.getUsersByEmail(email);
        //compare using bcrypt
        const isCorrect = await bcrypt.compare(password, user.password); 

        if(!isCorrect) {
            console.log("Senha incorreta!");
            res.status(500).json({ error:"Erro ao logar"});
        } else{
            //passado as validaçoes de senha
            const secret = process.env.JWT_SECRET;
            const options = { expiresIn: '900000ms'};
            const token = jwt.sign({ id: user.id }, secret, options);

            res.status(200).json({ accessToken: token });
        }

    } catch(error) {
        res.status(401).json({ error:"Erro ao buscar user" });
    }
}

module.exports = { createUser, getUsers, loginUser };

