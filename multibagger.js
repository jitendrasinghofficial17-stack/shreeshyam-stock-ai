export default function handler(req, res) {

const stocks = [

{name:"KPIT Technologies", score:9.1},

{name:"CG Power", score:8.8},

{name:"Kaynes Technology", score:8.6},

{name:"Dixon Technologies", score:8.3},

{name:"Trent", score:8.0}

];

res.status(200).json({

title:"AI Multibagger Picks",

stocks:stocks

});

}
