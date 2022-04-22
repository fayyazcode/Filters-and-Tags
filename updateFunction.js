    //....................edit button function
    function updtExist(edit) {
        // console.log("edit value ",edit.previousElementSibling.value)
        let preVal = edit.previousElementSibling.value
        console.log("preVal ", preVal)
        // for(let i=0;i<existingArr.length;i++){
        //   console.log("array items ",existingArr[i])
        // }
  
        //trigger sweet alert takes a value and trigger inner update function if value is not emmpty
        swal({
          content: {
            element: "input",
            attributes: {
              placeholder: "Edit",
              type: "text",
            },
          },
        }).then((res) => {
          console.log("result...........", res);
          innerupdatExist(edit, res, preVal);
        });
      }
      //........................... update value in input from sweet alert
      function innerupdatExist(edit, res, preVal) {
        if (res.trim() == "" || null) {
          swal("Edit", "Value cant be Empty", "error");
        } else {
          swal("Edit", "Title Edited", "success");
          console.log("log dit.previousSibling....", edit.previousSibling);
          let newVal = edit.previousElementSibling.value = res;
          for (let z = 0; z < existingArr.length; z++) {
            if (existingArr[z] == undefined) {
            } else {
              if (!Array.isArray(existingArr[z]) && existingArr[z] == preVal) {
                existingArr[z] = newVal
                console.log(existingArr);
                break;
                // console.log("item not array", existingArr[z]);
              }
  
              if (Array.isArray(existingArr[z])) {
                console.log("item  is array existingArr[z][0]", existingArr[z])
                for (let a = 0; a < existingArr[z].length; a++) {
  
                  if (Array.isArray(existingArr[z][a])) {
                    for (let l = 0; l < existingArr[z][a].length; l++) {
                      if (!Array.isArray(existingArr[z][a][l]) && existingArr[z][a][l] == preVal) {
                        existingArr[z][0][a] = newVal
                        console.log("log cat", existingArr[z][a][l])
                        break;
                      }
                      else {
                        console.log("is an array in tags")
                        // if (Array.isArray(existingArr[z][0][a])) {
                        for (let p = 0; p < existingArr[z][a][l].length; p++) {
                          console.log("a z o", existingArr[z][a][l][p]);
                          if (!Array.isArray(existingArr[z][a][l][p]) && existingArr[z][a][l][p] == preVal) {
                            existingArr[z][a][l][p] = newVal
                            break;
                          }
                        }
                      }
  
                    }
                  }
  
  
  
  
                }
              }
            }
  
            console.log(existingArr[z])
          }
  
        }
        // console.log("Updatee Array ",existingArr.indexOf('Tag'))
  
  
      }