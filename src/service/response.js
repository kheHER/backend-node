
export const SendSuccess = (res,message,data)=>{
    res.status(200).json({status: true,message,data})   // status OK = Get,Put,Delete
}
export const SendCrate = (res,message,data)=>{
    res.status(201).json({status: true,message,data})   // create post
}
export const SendError204 =(res,message,error)=>{
    res.status(204).json({status: false,message,data: {},error})   // No Content
}
export const SendError400 =(res,message,error)=>{
    res.status(400).json({status: false,message,data: {},error})   // Bad request ສົ່ງ parameter ບໍ່ຖຶກ
}
export const SendError401 =(res,message,error)=>{
    res.status(401).json({status: false,message,data: {},error})   // unauthorized ບໍ່ມີ token ຫຼຶ ບໍ່ໄດ້ລົງທະບຽນ
}
export const SendError404 =(res,message,error)=>{
    res.status(404).json({status: false,message,data: {},error})   // Not Found
}
export const SendError500 =(res,message,error)=>{
    res.status(500).json({status: false,message,data: {},error})   // Server Error
}