import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
    url: String,
    channel: String,
    description: String,
    liked: String
})

export default mongoose.model('tiktokVideos', tiktokSchema)