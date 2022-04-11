<!DOCTYPE html>
<html lang="en">
  <script
    type="text/javascript"
    src="https://cdn.jsdelivr.net/npm/browser-image-compression@1.0.17/dist/browser-image-compression.js"
  ></script>
  <style>
    .inputUpload {
      display: none;
    }

    .lblUpload {
      height: 50px;
      padding: 11px 20px;
      background-color: #2a7c6f;
      border-radius: 8px;
      color: white;
      font-size: 15px;
    }

    .lblUpload:hover {
      background-color: #54c5b3;
    }

    .green {
      color: #2a7c6f;
      font-size: 15px;
    }

    .btnUpload {
      height: 40px;
      width: 100px;
      background-color: #2a7c6f;
      color: white;
      border-radius: 8px;
      font-size: 15px;
      border: none;
    }

    .btnUpload:hover {
      background-color: #54c5b3;
    }

    .err {
      color: rgb(247, 49, 49);
      font-style: italic;
      font-size: 15px;
    }
  </style>

  <body>
    <label for="imgUpload" class="lblUpload">Choose Photos</label>
    <input
      type="file"
      onchange="handleFileSelect(this) "
      class="inputUpload"
      multiple
      id="imgUpload"
    />

    <button type="reset" class="btnUpload" onclick="reset(this)">Reset</button>
    <div id="main" style="width: 100%; flex-wrap: wrap">
      <p class="green">
        Upload up to 100 Images <br />
        Max Size 6MB/Image
      </p>
    </div>

    <script>
      function reset() {
        let div = document.getElementById("main");

        div.innerHTML = "";
        window.parent.postMessage(
          {
            condition: true,
            urls: [],
            message: "reset",
          },
          "https://www.wetrybetter.com/?siteRevision=1397"
        );
      }

      async function handleFileSelect() {
        //Check File API support
        if (window.File && window.FileList && window.FileReader) {
          let imgUrl = [];
          var files = [];
          files = event.target.files; //FileList object
          let filesLength = files.length;
          console.log("check files length", filesLength);
          let div = document.getElementById("main");
          div.style.color = "#2A7C6F";
          div.innerHTML = ` <p>${files.length} image selected</p>`;

          for (var i = 0; i < files.length; i++) {
            var file = files[i];
            if (i == 1) {
              window.parent.postMessage(
                {
                  condition: true,
                  urls: [],
                  message: "disabled",
                },
                "https://www.wetrybetter.com/?siteRevision=1397"
              );
            }
            //Only pics
            let finalSize;
            let fileSize = file.size;
            console.log("filesize", fileSize);
            let fileType = file.name.substr(file.name.lastIndexOf(".") + 1);
            fileType.toLowerCase();
            console.log(files);
            if (filesLength < 101) {
              if (fileSize < 7097152) {
                if (
                  fileType == "jpg" ||
                  fileType == "PNG" ||
                  fileType == "JPG" ||
                  fileType == "JPEG" ||
                  fileType == "gif" ||
                  fileType == "bmp" ||
                  fileType == "png" ||
                  fileType == "jpeg" ||
                  fileType == "tiff"
                ) {

           // cut
           compressImage(file,imgUrl,files)

                } else {
                  div.innerHTML = ` <p class="err">*Invalid file type *</p>`;
                  window.parent.postMessage(
                    {
                      condition: true,
                      urls: [],
                      message: "",
                    },
                    "https://www.wetrybetter.com/?siteRevision=1397"
                  );
                }
              } else {
                console.log("file00<", fileType);

                div.innerHTML = ` <p class="err">*Image Size Exceeds*</p>`;
                window.parent.postMessage(
                  {
                    condition: true,
                    urls: [],
                    message: "",
                  },
                  "https://www.wetrybetter.com/?siteRevision=1397"
                );
              }
            } else {
              div.innerHTML = ` <p class="err">*Number of images exceeds limit*</p>`;
              window.parent.postMessage({
                condition: true,
                urls: [],
                message: "",
              });
            }
          }
        } else {
          console.log("Your browser does not support File API");
        }
      }
      function compressImage(file,imgUrl,files) {

var options = {
  maxSizeMB: 50000,
  maxWidthOrHeight: 800,
  useWebWorker: true,
  onProgress: onProgress,
};
imageCompression(file, options)
  .then(function (output) {
    console.log("converted file", output, file);
    //code added

    var picReader = new FileReader();
    picReader.addEventListener("load", async function (event) {
        var picFile = event.target;
        console.log(picFile.result);
        imgUrl.push(picFile.result);

        if (imgUrl.length === files.length) {

            window.parent.postMessage(
                {
                    condition: true,
                    urls: imgUrl,
                    message: "image",
                },
                "https://www.wetrybetter.com/?siteRevision=1397"
            );
        }
    });
    //Read the image
       picReader.readAsDataURL(output);


    //code added
  })
  .catch(function (error) {
    alert(error.message);
  });

function onProgress(p) {
  // console.log("progress",p);
}
}

    </script>
  </body>
</html>
