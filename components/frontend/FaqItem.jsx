import { Collapse } from "react-collapse"
import {AiOutlineMinus} from "react-icons/ai"
import {AiOutlinePlus} from "react-icons/ai"

const FaqItem = ({title, desc, open, toggle}) => {
  return (
    <div className='pt-[10px]' >
        <div className='bg-white rounded-t-2xl shadow-2xl py-[25px] lg:px-[50px] p-[20px] flex justify-between items-center cursor-pointer' onClick={toggle}>
            <p className='lg:text-[22px] font-semibold'>{title}</p>
            {/* <div className='text-[30px]'>
                {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div> */}
        </div>
        <Collapse isOpened={open}>
            <div className="bg-white rounded-b-2xl shadow-xl border-t-[1.5px] border-[#9A9A9A] mt-[-15px] px-[20px] lg:px-[50px] py-[20px]">{desc}</div>
        </Collapse>
    </div>
  )
}

export default FaqItem
