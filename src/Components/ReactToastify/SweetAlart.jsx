// https://sweetalert.js.org/guides/#getting-started

const SweetAlart = () => {
  const success = () => { swal("Good job!", "You clicked the button!", "success") }
  const deletes = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!", {
            icon: "error",
          });
        }
      });
  }
  return (
    <div>
      <button onClick={success}>Success Button</button>
      <button onClick={deletes}>Delete Button</button>
    </div>
  )
}

export default SweetAlart