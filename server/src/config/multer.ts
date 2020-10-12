import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

export default {
        storage: multer.diskStorage({
            destination: path.resolve(__dirname, '..', '..', 'uploads'),
            filename(request, file, callback) {
                const filetypes = /jpeg|jpg|png|gif/;
                const mimetype = filetypes.test(file.mimetype);
                const extname = filetypes.test(path.extname(file.originalname));
    
                const hash = crypto.randomBytes(6).toString('hex');
    
                const fileName = `${hash}_${file.originalname}`;
    
                if (mimetype && extname) {
                    return callback(null,fileName);
                } else {
                    return "Tipo de arquivo inválido";
                }
            }
        }),
}