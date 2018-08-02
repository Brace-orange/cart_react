var path=require("path");

module.exports={
  entry:"./app/main.js",
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"all.js"
   },
  module : {
    rules : [
      {
        test : /\.js$/ ,
        use :[
          {
            loader : "babel-loader",
            options : {
              presets:["env","react"],
              plugins:["transform-object-rest-spread"]
            }

          }
        ],
        include : [
          path.resolve(__dirname,"app")
        ],
        exclude : [
          path.resolve(__dirname,"node_modules")
        ]
      }
    ]
  },
  watch:true
}
