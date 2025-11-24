import { ClipLoader } from "react-spinners"

const override = {
    display: 'block',
    margin: '100px auto',
    color: '#4338ca'
}

const Spinner = ({loading}) => {
  return (
    <ClipLoader 
        cssOverride = {override}
        size={150}  
    />
  )
}

export default Spinner