
  const home = (req, res) => {
  //기능
  res.render("home/index");
  };

  const login = (req,res) => {
    res.render("home/login");
     }

     module.exports = {
       home,
       login,
     };
     
    