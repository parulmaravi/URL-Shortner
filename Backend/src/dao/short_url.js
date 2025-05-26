import ShorturlModel from '../models/shortUrlModel.js';

export const saveShortUrl = async (shortUrl, longUrl, userId)=>{
    try{
         const newUrl = new ShorturlModel({
            full_url: longUrl,
            short_url: shortUrl,
            user_id:userId
         });
         await newUrl.save();
         return newUrl;
    }
    catch(error){
        console.error("Error saving short URL:", error);
    }
}

export const getShortUrl = async(shortUrl)=>{
     return await ShorturlModel.findOne({short_url:shortUrl})
}