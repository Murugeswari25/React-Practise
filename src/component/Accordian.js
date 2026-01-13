import { useState } from "react";

export const Accoundian = () => {

    const AccordianData = [
        {id: 1, Question: "About the App", Answer: "This app helps users order food online easily." },
        {id: 2, Question: "App Rating", Answer: "This app is rated 4.5 stars by users" }
    ]; 
    const [isOpen, setIsOpen] = useState(null);
    return(
        <div>
            {AccordianData.map((item) => (
                <div key={item.id}>
                    <h3  className="text-2xl border-black-400 flex justify-center m-5 cursor-pointer">
                        {item.Question}<button onClick={() => setIsOpen(isOpen === item.id ? null : item.id)} className="justify-between">+</button>
                    </h3>
                    {isOpen === item.id && <p className="flex justify-center" >{item.Answer}</p>}
                </div>
            ))}
        </div>
    )
}