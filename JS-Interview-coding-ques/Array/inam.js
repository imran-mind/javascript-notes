const obj = {
    "Rules":{
        "strong": "RL1,RL2",
        "minimal":"R3",
        "partial":"RL4"
    },
    "Controls":{
        "strong": "PL1,PL2",
        "minimal":"P3",
        "partial":"PL4"
    },
    "Risk":{
        "strong": "CL1,CL2",
        "minimal":"C3",
        "partial":"CL4"
    }
}

const input = [
    [
      {
        "prefix": "RL1",
        "score_ds2": 0.96,
        "type": "Rules"
      },
      {
        "prefix": "RL2",
        "score_ds2": 0.98,
        "type": "Rules"
      },
      {
        "prefix": "RL3",
        "score_ds2": 0.78,
        "type": "Rules"
      },
      {
        "prefix": "RL4",
        "score_ds2": 0.47,
        "type": "Rules"
      }
    ],
    [
      {
        "prefix": "CX1",
        "score_ds2": 0.94,
        "type": "Controls"
      },
      {
        "prefix": "CX2",
        "score_ds2": 1,
        "type": "Controls"
      },
      {
        "prefix": "CX3",
        "score_ds2": 0.4,
        "type": "Controls"
      },
      {
        "prefix": "CX4",
        "score_ds2": 0,
        "type": "Controls"
      },
      {
        "prefix": "CX5",
        "score_ds2": 1,
        "type": "Controls"
      },
      {
        "prefix": "CX1",
        "score_ds2": 0.67,
        "type": "Controls"
      }
    ]
  ]
;

const out = {
    "Rules":{
        "strong": "",
        "minimal":"",
        "partial":""
    },
    "Controls":{
        "strong": "",
        "minimal":"",
        "partial":""
    },
    "Risk":{
        "strong": "",
        "minimal":"",
        "partial":""
    }
}
input.forEach((arr)=>{
    arr.forEach((item)=>{
        if(item.type === 'Rules'){
            if(item.score_ds2 >= 0.85 && item.score_ds2 <=1){
                out["Rules"]["strong"] = out["Rules"]["strong"] ? out["Rules"]["strong"] +","+item.prefix: item.prefix
            }
            else if(item.score_ds2 >= 0.60 && item.score_ds2 <= 0.85){
                out["Rules"]["partial"] = out["Rules"]["partial"] ? out["Rules"]["partial"] +","+item.prefix: item.prefix
            }else if(item.score_ds2 >= 0 && item.score_ds2 <= 0.60){
                out["Rules"]["minimal"] = out["Rules"]["minimal"] ? out["Rules"]["minimal"] +","+item.prefix: item.prefix
            }
        }else if(item.type === 'Controls'){
            if(item.score_ds2 >= 0.85 && item.score_ds2 <=1){
                out["Controls"]["strong"] = out["Controls"]["strong"] ? out["Controls"]["strong"] +","+item.prefix: item.prefix
            }else if(item.score_ds2 >= 0.60 && item.score_ds2 <= 0.85){
                out["Controls"]["partial"] = out["Controls"]["partial"] ? out["Controls"]["partial"] +","+item.prefix: item.prefix
            }else if(item.score_ds2 >= 0 && item.score_ds2 <= 0.60){
                out["Controls"]["minimal"] = out["Controls"]["minimal"] ? out["Controls"]["minimal"] +","+item.prefix: item.prefix
            }
        }else if(item.type === 'Risk'){
            if(item.score_ds2 >= 0.85 && item.score_ds2 <=1){
                out["Risk"]["strong"] = out["Risk"]["strong"] ? out["Risk"]["strong"] +","+item.prefix: item.prefix
            }else if(item.score_ds2 >= 0.60 && item.score_ds2 <= 0.85){
                out["Risk"]["partial"] = out["Risk"]["partial"] ? out["Risk"]["partial"] +","+item.prefix: item.prefix
            }else if(item.score_ds2 >= 0 && item.score_ds2 <= 0.60){
                out["Risk"]["minimal"] = out["Risk"]["minimal"] ? out["Risk"]["minimal"] +","+item.prefix: item.prefix
            }
        }
    })
})

console.log(out);
for(const key in out){
    let row =key+"=>";
    <tr></tr>
    for(const k in out[key]){
        row += out[key][k] + ",";

        if(key =="Rules"){
            if(k === "strong"){
                let strong = out.Rules.strong;
                <td>{strong}</td>
            }else if(k === "strong"){
                let pr = out.Rules.partial;
                <td>{pr}</td>
            }else if(k === "strong"){
                let min = out.Rules.minimal;
                <td>{min}</td>
            }
        }
    
    }
    console.log(row);
}
/* 
<tr>
    <td>RL1,Rl2</td>
    <td>RL1,Rl2</td>
    <td>RL1,Rl2</td>
</tr>
<tr>
    <td>RL1,Rl2</td>
    <td>RL1,Rl2</td>
    <td>RL1,Rl2</td>
</tr>
<tr>
    <td>RL1,Rl2</td>
    <td>RL1,Rl2</td>
    <td>RL1,Rl2</td>
</tr> */