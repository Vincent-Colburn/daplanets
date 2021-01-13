import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Planet = new Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },

}
);

export default Planet; 