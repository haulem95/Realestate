import bcrypt from "bcryptjs"

export const register = (req, res) => {
    const {username, email, password} = req.body;


    // hash the password
       const hashedPassword = await bcrypt.hash(password, 10);

       console.log(hashedPassword);
    // create a new user and save to database


}

export const login = (req, res) => {
    
}
export const logout = (req, res) => {
    
}