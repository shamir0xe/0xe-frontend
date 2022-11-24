import { imgPack } from "src/helpers/utils";

const contents = {
    imgs: {
        logo: imgPack(require("assets/logo.png"), "logo")
    },
    txts: {
        items: [
            'بلاگ',
            'پروژه‌ها',
            'درباره',
            'عکاسی',
            'برنامه‌نویسی',
        ]
    }
   
};

export default contents;
