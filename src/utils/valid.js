
/**
 * [validPhone 验证手机号格式]
 * @param  {[type]}   rule [description]
 * @param  {[type]}   val  [description]
 * @param  {Function} cb   [description]
 * @return {[type]}        [description]
 */
export const validPhone = (rule, val, cb) => {
  if(!val){
    return cb(new Error('请编辑手机号'))
  }
  setTimeout(()=>{
   let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
   if(val.length < 11){
     cb(new Error('手机号长度为11位数字'))
   }else if(reg.test(val)){
     cb()
   }else{
     cb(new Error('手机号格式错误'))
   }
  },500)
}
