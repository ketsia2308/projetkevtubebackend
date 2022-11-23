const mongoose = require('mongoose');

const Users = mongoose.Schema(
    {
        utilisateur: {
            "id":"ab12",
            "nom":"Makasa",
            "prenom":"Ketsia",
            "lien_instagram":"Kevanikm",
            "lien_facebook":"Ketsia Makasa Kevani"
          },

          commentaire: {
            "id":"12bc",
            "commentaire":"voici mon commentaire",
            "id_utilisateur":"ab12",
            "sous_commentaire":[id]
          },

          notification:{
            "id_envoyer":"ab12",
            "id_recevoir":"yz80",
            "message":"Ketsia iduma vous a repondu"
          },     
            liker:{
                "id_commentaire":"12bc",
                "id_utisateur":"ab12"
            },
  
            disliker:{
                "id_commentaire":"12bc",
                "id_utilisateur":"ab12"
            }
    }
);

module.exports = mongoose.model("user", Users)