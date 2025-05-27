import ShorturlModel from '../models/shortUrlModel.js';
import {ConflictError} from '../utils/errorHandler.js'

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
        throw new ConflictError('Short URL already exists');
    }
}

export const getShortUrl = async(shortUrl)=>{
     return await ShorturlModel.findOneAndUpdate({short_url:shortUrl},{$inc:{clicks:1}})
}