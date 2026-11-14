import ImageKit from '@imagekit/nodejs';
import dotenv from "dotenv";

dotenv.config();
const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY, // This is the default and can be omitted
});

async function uploadFile(buffer) {
    const result = await imagekit.files.upload({
  file: buffer.toString("base64"),
  fileName: 'image.jpg',
})
return result;
}

export default uploadFile;