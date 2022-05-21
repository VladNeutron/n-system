export function CloseInvModal(){
    if(document.getElementById('DeleteInv')){
        let modalDelete = document.getElementById('DeleteInv')
        modalDelete.addEventListener('show.bs.modal', function (event) {
          if(document.getElementById('InpModal')){
            $('#InpModal').modal('hide');
          }
        })
    }
}
