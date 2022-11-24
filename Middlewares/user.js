const checkUserFields = (req, res, next) => {
    const {rV, uT, cu, hK} = req.body;
    let error = "";
    if(!rV) {
        error += "\nIl n'y a pas de prénom, veuillez le remplir";
    } 
    if(!uT) {
        error += "\nIl n'y a pas de nom, veuillez le remplir";
    } 
    if(!cu) {
        error += "\nIl n'y a pas de email, veuillez le remplir";
    } 
    if(!hK) {
        error += "\nIl n'y a pas de profile, veuillez le remplir";
    } 
    if(error.length){
        res.send(error);
    }
    next();
}

module.exports = {checkUserFileds};