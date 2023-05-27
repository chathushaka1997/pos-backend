import mongoose, { Schema,  FlatRecord } from 'mongoose';
import { IUser } from '../models/user-model';
import  bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'


export const UserSchemaOptions: mongoose.SchemaOptions<FlatRecord<IUser>> = {
  _id: true,
  id: false,
  timestamps: true,
 // skipVersioning: true,
  strict: false,
  discriminatorKey: "role",
  toJSON: {
    getters: true,
    virtuals: true,
    transform: (doc, ret) => {
      delete ret.password;
    },
  },
};


export const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    email: {
      type: Schema.Types.String,
      unique: true,
      required: true,
    },
    password: {
      type: Schema.Types.String,
      required: true,
    },
    
  },
  UserSchemaOptions
);

userSchema.pre("save", function (next) {
  const user: any = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // generate a salt
  // noinspection JSIgnoredPromiseFromCall
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    // noinspection JSIgnoredPromiseFromCall
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

userSchema.methods.createAccessToken = function (expiresIn: string) {
  return jwt.sign({ user_id: this._id }, process.env.JWT_SECRET as string, {
    expiresIn: expiresIn,
  });
};

userSchema.methods.comparePassword = function (
  password: any
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    // noinspection JSIgnoredPromiseFromCall
    bcrypt.compare(password, this.password, function (err, isMatch) {
      if (err) {
        return reject(err);
      }
      return resolve(isMatch);
    });
  });
};

const User = mongoose.model<IUser>('User', userSchema);




export default User;