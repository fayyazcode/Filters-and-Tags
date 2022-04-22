function delExisting(data, updata) {
    //..........................remove element.....................
    //use array  map and regix 
    try {

      //...................check get attribute of input next to select button
      if (
        data.firstElementChild.firstElementChild.getAttribute("id") ==
        "subInput"
      ) {
        document.getElementById("select").style.display = "block";
      }
    } catch (err) {
      console.log("catch error", err);
      // console.log("catch error", check);
    }
    // let check=data.firstElementChild.firstElementChild.value
    // existingArr = existingArr.filter(function (valueRemov, index, existingArr) {
    //           return valueRemov !== check;
    //       });
    let newVal = updata.previousElementSibling.value;
    console.log("value .................del", newVal);
    for (let z = 0; z < existingArr.length; z++) {
      if (existingArr[z] == undefined) {
      } else {
        if (!Array.isArray(existingArr[z]) && existingArr[z] == newVal) {
          let index = existingArr.indexOf(newVal)
          console.log("logging array z", existingArr[z]);
          existingArr = []

          break;
          // console.log("item not array", existingArr[z]);
        }

        if (Array.isArray(existingArr[z])) {
          console.log("item  is array existingArr[z][0]", existingArr[z][0])
          for (let a = 0; a < existingArr[z].length; a++) {
            for (let x = 0; x < existingArr[z][a].length; x++) {
              if (!Array.isArray(existingArr[z][a][x]) && existingArr[z][a][x] == newVal) {
                existingArr[z][a].splice(a, 1)

                console.log("log cat", existingArr[z][a])
                console.log(existingArr);
                break;
              } else {
                console.log("is an array in tags")
                // if (Array.isArray(existingArr[z][0][a])) {
                for (let p = 0; p < existingArr[z][a][x].length; p++) {
                  console.log("a z o", existingArr[z][a][x][p]);
                  if (!Array.isArray(existingArr[z][a][x][p]) && existingArr[z][a][x][p] == newVal) {
                    existingArr[z][a][x].splice(p, 1)
                    console.log(existingArr);
                  }
                }
              }
            }



          }
        }
      }

      console.log(existingArr[z])
    }

    //zzzzzzzzzzzz
    console.log("array ", data);
    if(newProp=="subCat"){
      // data.remove();
    }else{
      
      data.remove();
    }
    console.log("log child divnext to category"),data; 
    swal("Remove", "Tag removed", "success");
  }