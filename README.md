# paste-image-js

## Using

```javascript
window.addEventListener("paste", function(e){
      getPasteImage(e, blob => {
          //your callback
      })
    }, false)
```