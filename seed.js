const mongoose=require('mongoose');
const Product=require('./models/product');

const products=[
    {
        name:"sb ",
        img1:"https://images.unsplash.com/photo-1523693916903-027d144a2b7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym91cXVldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        price:10000,
        desc:"sb empire",
    },
    {
        name:"sb empire",
        img:"https://images.unsplash.com/photo-1452827073306-6e6e661baf57?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ym91cXVldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price:10000,
        desc:"sb empire",
    },
    {
        name:"sb empire",
        img:"https://images.unsplash.com/photo-1494337095615-b5f370aad75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJvdXF1ZXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price:10000,
        desc:"sb empire",
    },
    {
        name:"sb empire",
        img:"https://images.unsplash.com/photo-1596744186392-e3c6088abff6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=973&q=80",
        price:10000,
        desc:"sb empire",
    },
    {
        name:"sb empire",
        img:"https://images.unsplash.com/photo-1552034452-6943019073b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",
        price:10000,
        desc:"sb empire",
    },
    {
        name:"sb empire",
        img:"https://images.unsplash.com/photo-1615385639736-362b69696227?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyJTIwYm91cXVldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price:10000,
        desc:"sb empire",
    },
]
const seedDB =async ()=>{
    await Product.insertMany(products);
    console.log("DB Seeded");
}

module.exports=seedDB;