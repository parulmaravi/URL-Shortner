import express from 'express';
import { createShortUrl,redirectFormShortUrl} from '../controller/shortUrlController.js';
const router = express.Router();

router.post('/create', createShortUrl);
router.get("/:id", redirectFormShortUrl);

export default router;