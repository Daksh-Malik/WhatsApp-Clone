import mongoose from "mongoose";


const userSchema = mongoose.Schema({ //this schema also contains Google authentication fields like iss, nbf, aud, sub
    iss: {
        type: String
    },
    nbf: {
        type: Number
    },
    aud: {
        type: String
    },
    sub: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    email_verified: {
        type: Boolean
    },
    azp: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
    },
    given_name: {
        type: String
    },
    family_name: {
        type: String
    },
    iat: {
        type: Number
    },
    exp: {
        type: Number
    },
    jti: {
        type: String
    }
});

const user = mongoose.model('user', userSchema);  // user collection created with schema

export default user;