import obj from './js/module1'
// 引入json
// import './json/data.json' // 这样引入了json.webpack就会打包json
import data from './json/data.json' // webpack会自动按照默认导出的形式,导出json文件的数据

// 引入css
// import './css/test.css'
console.log(obj)
console.log(data)
