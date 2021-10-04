const boxName = document.getElementById('box-name');
const addBtn = document.getElementById('add-button');
const warning = document.getElementById('warning-alert');
const list = document.getElementById('list-item')
const item = document.getElementsByClassName('item')
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const header_modal = document.getElementById("head-modal")
const body_modal = document.getElementById("body-modal")
const content_list = document.getElementById("content-list-item")


boxName.placeholder = 'Masukkan barang disini';
const clickListener = (e) => {
    e.preventDefault();
  
    
  if (boxName.value === '') {
    header_modal.textContent = "Perhatian!!"
    body_modal.textContent = "Barang harap diisi. Tidak boleh dikosongkan"
    modal.style.display = "block";
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    span.onclick = function() {
        modal.style.display = "none";
      }
    
    }

    boxName.placeholder = 'Masukkan barang';
    boxName.focus();
  } else {


    // const image_add = document.getElementById('cart-icon')
    // const image_cancel = document.getElementById('wrong-icon')
    // image_add.classList.add('button-picture')
    // image_cancel.classList.add('button-picture')
    const itemName_text = document.createElement('h4')
    const item1 = document.createElement('div')
    const itemName = document.createElement('li')
    const batal = document.createElement('button')
    batal.textContent = "Batal   "
    batal.classList.add('btn', 'btn-danger', 'ms-4')
    itemName.textContent = `${boxName.value}`
    itemName.appendChild(batal)
    if(item1.length === 0){
        itemName.className = 'item'
    }
    item1.append(itemName)
    list.classList.add('item-list-background')
    if(item.length === 0){
        list.append(item1)
    }
    if(item.length >= 1){
        let temp = true
        for (let i = 0; i<item.length;++i){
            if(item1.textContent === item[i].textContent){
                header_modal.textContent = "Mohon maaf :)"
                body_modal.textContent = `Maaf, ${boxName.value} sudah ada dalam keranjang`
                modal.style.display = "block";
                window.onclick = function(event) {
                    if (event.target == modal) {
                      modal.style.display = "none";
                    }
                span.onclick = function() {
                    modal.style.display = "none";
                  }
                
                }
                boxName.placeholder = 'Silahkan ganti barang';
                boxName.focus();
                boxName.value = ''
                temp = false
                return
            }
        }
        if (temp === true) {
            list.append(item1)    
        }
      }
      itemName.className = 'item'
      const removeItem = (e) =>{
          e.preventDefault()
          list.removeChild(item1)
      }

    header_modal.textContent = "Selamat XD"
    body_modal.textContent = `${boxName.value} berhasil dimasukkan ke keranjang`
    modal.style.display = "block";
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    span.onclick = function() {
        modal.style.display = "none";
      }
    
    }
    batal.addEventListener('click', removeItem)
    boxName.value = '';
    boxName.placeholder = 'Masukkan barang disini'

    }



};
addBtn.addEventListener('click', clickListener)