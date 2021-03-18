const User = require('../models/User');
const routes = require('../routes');



module.exports = {

  async create(request, response){
    const {email, password, phoneNumber} = request.body;

    const newUser = new User({
      email: email,
      password: password,
      phoneNumber: phoneNumber
    });

    const result = await newUser.save();
      response.send(result);
  },

  
  async index(request, response){
    try{
      const { id } = request.params;
      const user = await User.findById(id);
      return response.json({ user });
    
    } catch (err) {
     
      return response.status(400).send({ error : `Error while trying to search a user.\n${err}`});
    }
  },

  async update(request, response){
    
    try{
      const { id } = request.params;
      const { email, password, phoneNumber} = request.body;

      const newUser = {
        email,
        password,
        phoneNumber
    }

      await User.findOneAndUpdate(id, newUser).then( (data) =>{

      return response.json(data);
    });

    } catch(err) {
      return request.status(400).send({error: `Error while trying to edit the usern.\n${err}`});
    }
    
  },

  async delete(request, response){   //tem que fazer uma verificacao para ver se o usuario realmente foi deletado
    
    try{
      const { id } = request.params;
      await User.findByIdAndDelete(id);
      User.save;
      return response.send('Deleted with sucess');
    
    } catch (err) {
      return request.status(400).send({ error: `Error while deleting plant from backyard.\n${err}`});
    }


  }

}