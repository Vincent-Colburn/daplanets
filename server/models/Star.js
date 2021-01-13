import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Star = new Schema(
    {


    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Star; 