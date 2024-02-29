import { ToastContainer, toast } from 'react-toastify';

const ReactToastify = () => {
  const error = () => toast.error("Massage Send Successfully!");
  const success = () => toast.success("Something Wrong!");
  const warning = () => toast.warning("What Happend!")
  return (
    <div className='text-warning'>
      <ToastContainer />
      <button onClick={success}>Success Massage</button>
      <button onClick={error}>Error Massage</button>
      <button onClick={warning}>Warning Massage</button>
    </div>
  )
}

export default ReactToastify