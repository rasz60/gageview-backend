const mongoose = require("mongoose");

// 스키마 정의
const MainTabSchema = new mongoose.Schema({
    useYn: String, // 조회 조건으로 쓸 컬럼
}, {
    collection: 'ggv_main_tabs', // 조회할 실제 Table 이름
    strict: false                // 스키마에 정의되지 않은 컬럼도 모두 가져옴
});

// 모델 생성
module.exports = mongoose.model("Menu", MainTabSchema);