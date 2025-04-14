import { useState } from 'react';

function Collapse ({title, content}) {
const [isOpen, setIsOpen] = useState(false);
    return ( !isOpen ? (
        <div className="collapse">
            <div className="collapse__title">
                <h2 className="collapse__title__text">{title}</h2>
                <svg 
                    width="24" 
                    height="15" 
                    viewBox="0 0 24 15" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setIsOpen(true)}>
                    <path d="M10.7897 1.43151C11.4591 0.762088 12.5462 0.762088 13.2157 1.43151L23.4979 11.7138C24.1674 12.3832 24.1674 13.4703 23.4979 14.1398C22.8285 14.8092 21.7414 14.8092 21.072 14.1398L12 5.06779L2.92804 14.1344C2.25862 14.8038 1.17148 14.8038 0.502065 14.1344C-0.167354 13.465 -0.167354 12.3778 0.502065 11.7084L10.7843 1.42615L10.7897 1.43151Z" fill="white"/>
                </svg>
            </div>
        </div>
    ) : (
        <div className="collapse">
            <div className="collapse__title">
                <h2 className="collapse__title__text">{title}</h2>
                <svg 
                    width="24" 
                    height="15" 
                    viewBox="0 0 24 15" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setIsOpen(false)}>
                    <path d="M13.2103 13.8522C12.5409 14.5216 11.4538 14.5216 10.7843 13.8522L0.502064 3.56991C-0.167355 2.90049 -0.167355 1.81335 0.502064 1.14393C1.17148 0.474515 2.25862 0.474515 2.92804 1.14393L12 10.2159L21.072 1.14929C21.7414 0.479871 22.8285 0.479871 23.4979 1.14929C24.1674 1.81871 24.1674 2.90585 23.4979 3.57526L13.2157 13.8575L13.2103 13.8522Z" fill="white"/>
                </svg>
            </div>
            <div className="collapse__content">
                <div className="collapse__content__text">{content}</div>
            </div>
        </div>

    ))
}
export default Collapse;