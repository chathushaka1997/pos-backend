import * as mongoose from "mongoose";
import { Schema } from "mongoose";
import { IBrand } from "../models/brand-model";


const schemaOptions: mongoose.SchemaOptions = {
  _id: true,
  id: false,
  timestamps: true,
  strict: false,
  toJSON: {
    getters: true,
    virtuals: true,
  },
};
export const BrandSchema = new mongoose.Schema(
  {
    name: {
      type: Schema.Types.String,
      require: true,
      unique: true,
    },
  },
  schemaOptions
);

const Brand = mongoose.model<IBrand>("Brand", BrandSchema);

export default Brand;
