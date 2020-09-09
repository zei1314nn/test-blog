// 导入bcrypt
const bcrypt = require('bcrypt');


async function run() {
    // 生成随机字符串
    // genSalt方法接受一个数值作为参数
    // 数值越大 生成的随机字符串复杂度越高
    // 数值越小 生成的随机字符串复杂度越低
    // 默认值是 10
    // 返回生成的随机字符串
    const salt = await bcrypt.genSalt(10);
    // 对密码进行加密
    // 1. 要进行加密的明文
    // 2. 随机字符串
    // 3. 返回值是加密后的密码
    const result = await bcrypt.hash('123456', salt);
    // 对密码进行验证
    // 1. 参数1为明文密码
    // 2. 参数2位添加随机字符串后的加密密码
    // 3. 结果进行比对 会返回true 或 false
    let isValid = await bcrypt.compare('123456', result);
    console.log(salt);
    console.log(result);
    console.log(isValid);
}

run();