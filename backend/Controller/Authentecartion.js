const Users = require("../Models/Users")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
class Authentecation {
    static Register = async (req, res) => {
        const { username, email, password } = req.body;
        try {
            if (username && email && password) {
                const isUser = await Users.findOne({ email: email });
                if (!isUser) {
                    const genSalt = await bcryptjs.genSalt(10);
                    const HashPassword = await bcryptjs.hash(password, genSalt);

                    const registr = await Users.create({
                        username: username,
                        email: email,
                        password: HashPassword
                    });
                    if (registr) {
                        return res.status(200).json({ message: "User Register Successfully.", registr });
                    }

                } else {
                    return res.status(400).json({ message: "Email Alread Excist." });
                }
            } else {
                return res.status(400).json({ message: "All fiels are Required." });
            }
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
    static Login = async (req, res) => {
        const { email, password } = req.body;
        try {
            if (email && password) {
                const isEmail = await Users.findOne({ email: email });
                if (isEmail) {
                    if (isEmail.email === email && (await bcryptjs.compare(password, isEmail.password))) {
                        const token = await jwt.sign({userID : isEmail._id}, "pleaseSubscribe", {
                            expiresIn : "3d",
                        })
                    return res.status(200).json({ message: "Login Successfully", token, name : isEmail.username }); 
                    } else {
                    return res.status(400).json({ message: "Worng Credentials." }); 
                    }
                } else {
                    return res.status(400).json({ message: "Email not Found." });
                }
            } else {
                return res.status(400).json({ message: "All fiels are Required." });
            }
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}

module.exports = Authentecation;