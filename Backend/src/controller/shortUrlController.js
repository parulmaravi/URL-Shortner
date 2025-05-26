import { getShortUrl} from '../dao/short_url.js';
import {createShorturlWithoutUser} from '../services/shorturlService.js'

 export const createShortUrl = async (req,res)=>{
    const {full_url} = req.body;

    try {
        if (!full_url) {
            return res.status(400).json({ error: "URL is required" });
        }
        const shortUrl = await createShorturlWithoutUser(full_url)
        res.status(201).json(process.env.APP_URL + shortUrl);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

export const redirectFormShortUrl =async (req,res)=>{
    const {id} = req.params;
    try {
         const url = await  getShortUrl(id)
         res.redirect(url.full_url);
    } catch (error) {
         res.status(500).json({error:"Internal server error"})  
    }
}